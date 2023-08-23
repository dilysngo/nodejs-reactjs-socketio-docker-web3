import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt';
// import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './interface/token.interface';
import { MailService } from 'src/mail/mail.service';
import { v4 } from 'uuid';
// import { redisEmailToken } from 'src/common/redis';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';

@Injectable()
export class AuthService {
  constructor(
    @InjectRedis() private readonly emailRedisClient: Redis,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<User> {
    try {
      const createdUser = await this.userService.create(registerUserDto);
      const verificationToken = v4();
      await this.mailService.sendUserConfirmationMail(
        createdUser,
        verificationToken,
      );
      await this.emailRedisClient.set(verificationToken, createdUser.id);
      return createdUser;
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAuthenticatedUser(email: string, password: string): Promise<User> {
    try {
      const user = await this.userService.findByEmail(email);
      await this.checkPassword(password, user.password);
      return user;
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }

  private async checkPassword(
    pass: string,
    hashedPass: string,
  ): Promise<boolean> {
    const isPassMatch = await bcrypt.compare(pass, hashedPass);
    if (!isPassMatch) throw new UnauthorizedException('Invalid Credentials');
    return true;
  }

  async getToken(id: string) {
    const payload: TokenPayload = { id };
    const token = this.jwtService.sign(payload);
    //({ 'token-value': token });
    return token;
  }

  async verifyUser(token: string) {
    if (!token) throw new BadRequestException('Invalid token provided');

    const id = await this.emailRedisClient.get(token);

    if (!id) throw new BadRequestException('Invalid token provided');

    try {
      await this.userService.update(id, { isVerified: true });
    } catch (err) {
      throw new InternalServerErrorException('Something went wrong');
    }
    await this.emailRedisClient.del(token);
    return { code: 200, message: 'User verified' };
  }
}

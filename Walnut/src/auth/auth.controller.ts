import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LocalAuthenticationGuard } from '../guard/local-auth.guard';
import { RequestWithUser } from './interface/request-with-user.interface';
import JwtAuthenticationGuard from 'src/guard/jwt-auth.guard';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('auth')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ type: User })
  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return this.authService.register(registerUserDto);
  }

  @HttpCode(200)
  @ApiBody({ required: true, type: LoginUserDto })
  @ApiOkResponse({ type: User })
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(@Req() req: RequestWithUser, @Res() res: Response) {
    const user = req.user;
    // //(user);
    const token = await this.authService.getToken(user.id);
    res
      .cookie('authJwt', token, {
        httpOnly: true,
        maxAge: parseInt(process.env.JWT_SECRET_TIME) * 60,
      })
      .json({ user, token });
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('authJwt');
    return res.sendStatus(200);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthenticationGuard)
  @Get()
  auth(@Req() req: RequestWithUser) {
    const user = req.user;
    return { ...user, password: undefined };
  }

  @Get('confirm')
  async verify(@Query('token') token: string) {
    return await this.authService.verifyUser(token);
  }
}

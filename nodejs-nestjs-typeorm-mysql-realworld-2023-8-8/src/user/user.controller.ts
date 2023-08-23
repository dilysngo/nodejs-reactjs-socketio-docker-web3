import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UserRO, UserData } from './user.interface';
import { CreateUserDto, UpdateUserDto, LoginUserDto } from './dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { User } from './user.decorator';
import { ValidationPipe } from '../shared/pipes/validation.pipe';

import {
  ApiBearerAuth, ApiBody, ApiTags, ApiParam
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get('get')
  async findMe(@User('email') email: string): Promise<UserRO> {
    return await this.userService.findByEmail(email);
  }

  @Put('update')
  @ApiBody({ type: UpdateUserDto })
  async update(@User('id') userId: number, @Body() userData: UpdateUserDto) {
    return await this.userService.update(userId, userData);
  }

  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateUserDto })
  @Post('register')
  async create(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Delete(':email')
  @ApiParam({ name: 'email', type: String })
  async delete(@Param() params) {
    const st = await this.userService.delete(params.email);
    if (st) return { statusCode: 200, message: 'Success' };
    return { statusCode: HttpStatus.BAD_REQUEST, message: 'Bad request' }
  }

  @UsePipes(new ValidationPipe())
  @Post('login')
  @ApiBody({ schema: {example: `{
    "email": "ngohung1@qa.team",
    "password": "abc123"
  }`} })
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserRO> {
    const _user = await this.userService.findOne({email: loginUserDto.email});

    const errors = {statusCode: 401, message: "User not found"};
    if (!_user) throw new HttpException({errors}, 401);

    const _verifyPassword = await this.userService.verifyPassword(loginUserDto)
    if(!_verifyPassword) throw new HttpException({ statusCode: 401, message: 'Password is not correct.' }, 200);

    const token = await this.userService.generateJWT(_user);
    const {email, username, bio, image} = _user;
    const user = {email, token, username, bio, image};
    return { user}
  }
}

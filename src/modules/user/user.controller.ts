import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiFoundResponse,
  ApiProperty,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { hashSync } from 'bcrypt';
import { Request, Response } from 'express';

import { CurrentUser } from '../auth/decorators/user.decorator';
import { AuthenticatedGuard } from '../auth/guards/auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { UserAlreadyExists } from './errors/user-already-exists';
import { UserService } from './user.service';
import { CreateUserDto, User } from 'src/config/@generated';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  @ApiTags('user')
  @ApiCreatedResponse({
    description: 'Registers a user if it does not already exist.',
    type: User,
  })
  @ApiConflictResponse({
    description: 'User already exists.',
    type: UserAlreadyExists,
  })
  signup(@Body() { email, password }: CreateUserDto): Promise<User> {
    const hash = hashSync(password, 10);
    return this.userService.create({ email, password: hash });
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  @ApiTags('user')
  @ApiSecurity('localAuth')
  @ApiCreatedResponse({
    description: 'Successfully signed in user.',
    type: User,
  })
  signin(@CurrentUser() user: User): User {
    return user;
  }

  @ApiTags('user')
  @Get('/signout')
  signout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    req.session.destroy(null);
    res.clearCookie('connect.sid');
    return { statusCode: 200, message: 'successfully signed out' };
  }

  @ApiSecurity('cookieAuth')
  @ApiTags('user')
  @UseGuards(AuthenticatedGuard)
  @Get('/me')
  me(@CurrentUser() user: User) {
    return user;
  }
}

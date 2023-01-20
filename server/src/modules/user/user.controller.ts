//Controllers control incoming requests, something happens and then response

import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Req,
  Res,
  Delete,
  Put,
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

import { CreateUserDto, UpdateUserDto, User } from 'src/config/@generated';
import { CurrentUser } from '../auth/decorators/user.decorator';
import { AuthenticatedGuard } from '../auth/guards/auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { UserAlreadyExists } from './errors/user-already-exists';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //@Are Called annotations = decoration(in nestJS)
  //('ThisIsCalledAFilter') -> This handles routers. If no filter is specified the your-domain.com/
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
    // Passwort wird gehashed
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
  @UseGuards(AuthenticatedGuard)
  @Put('/user')
  updateUser(@CurrentUser() user: User, @Body() body: UpdateUserDto) {
    let hash;
    if (body.password) {
      hash = hashSync(body.password, 10);
    }
    return this.userService.update(user.id, {
      password: hash,
      email: body.email,
    });
  }

  @UseGuards(AuthenticatedGuard)
  @Delete('/user')
  deleteUser(@CurrentUser() user: User) {
    return this.userService.delete(user.id);
  }
}

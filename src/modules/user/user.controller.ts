import {
  Body,
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
} from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { AuthenticatedGuard } from '../auth/guards/auth.guard';

import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { RequestWithUser } from './dto/signin.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  signup(@Body() input: CreateUserDto) {
    const { email, password } = input;

    const hash = hashSync(password, 10);
    return this.userService.create({ email, password: hash });
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  signin(@Request() req: RequestWithUser) {
    return req.user;
  }

  @Get('/signout')
  signout(@Request() req: any) {
    req.session.destroy();
    // req.cookies = '';
    return { msg: 'successfully signed out' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/me')
  me(@Request() req: RequestWithUser) {
    return req.user;
  }
}

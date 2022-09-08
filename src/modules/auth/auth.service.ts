import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { compareSync } from 'bcrypt';

import { UserService } from '../user/user.service';

//Uservalidierung
@Injectable()
export class AuthService {
  // Typescript feature autovervollständigen und Fehlermeldung, dependencies injection
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new HttpException('invalid credentials', HttpStatus.BAD_REQUEST);
    }

    const passwordValid = compareSync(pass, user.password);

    if (!passwordValid) {
      throw new HttpException('invalid credentials', HttpStatus.BAD_REQUEST);
    }

    return user;
  }
}

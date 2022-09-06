import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { User } from '@prisma/client';
import { PrismaService } from '../_setup/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}

  async create(user: CreateUserDto): Promise<User> {
    return this.db.user.create({ data: user }).catch(() => {
      throw new HttpException('user already exists', HttpStatus.CONFLICT);
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { email } });
  }
}

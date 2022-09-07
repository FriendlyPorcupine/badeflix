import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PrismaService } from '../_setup/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto, User } from 'src/config/@generated';

@Injectable()
export class UserService {
  /*private db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }*/

  constructor(private db: PrismaService) {}

  async create(user: CreateUserDto): Promise<User> {
    return this.db.user.create({ data: user }).catch(() => {
      throw new HttpException('user already exists', HttpStatus.CONFLICT);
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { email } });
  }

  async delete(id: string) {
    return this.db.user.delete({ where: { id } });
  }

  async update(id: string, user: UpdateUserDto) {
    return this.db.user.update({ where: { id }, data: user });
  }
}

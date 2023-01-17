import { User } from '@prisma/client';
import { Request as Req } from 'express';

export interface RequestWithUser extends Req {
  user: User;
}

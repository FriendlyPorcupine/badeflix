import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from '@prisma/client';
import { DoneCallback } from 'src/common/types/done-callback';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: User, done: DoneCallback<User>) {
    done(null, user);
  }

  deserializeUser(payload: string, done: DoneCallback<string>) {
    done(null, payload);
  }
}

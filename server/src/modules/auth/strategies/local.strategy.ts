import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';

// Es gibt auch andere strategies um sich zb mit google einzuloggen
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }
  //Validate liefert Userobjekt zurück
  async validate(email: string, password: string): Promise<User> {
    return this.authService.validateUser(email, password);
  }
}

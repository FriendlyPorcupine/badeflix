import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();

    const authHeader = req.headers['authorization'];
    if (authHeader) {
      const [basic, encoded] = authHeader.split(' ');

      if (basic === 'Basic' && encoded) {
        const [email, password] = Buffer.from(encoded, 'base64')
          .toString()
          .split(':');
        req.body['email'] = email;
        req.body['password'] = password;
      }
    }

    const result = (await super.canActivate(context)) as boolean;
    await super.logIn(req);
    return result;
  }
}

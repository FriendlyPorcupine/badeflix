import { createParamDecorator, ExecutionContext as EC } from '@nestjs/common';

export const CurrentUser = createParamDecorator((_, context: EC) => {
  return context.switchToHttp().getRequest().user;
});

//decorators = Annotations

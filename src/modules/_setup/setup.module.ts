import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ApiConfigModule } from './config/api-config.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ApiConfigModule,
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'client'),
      exclude: ['/api*'],
    }),
  ],
})
export class SetupModule {}

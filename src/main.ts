import { ValidationPipe, INestApplication as App } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';

import { AppModule } from './app.module';
import { ApiConfigService } from './modules/_setup/config/api-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ApiConfigService);
  await initializeApp(app, config);
  await app.listen(config.get('API_PORT'));
}

const initializeApp = async (app: App, config: ApiConfigService) => {
  app.enableCors();
  app.setGlobalPrefix('v1');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Badeflix')
    .setDescription('The badeflix API description')
    .setVersion('1.0')
    .addTag('user')
    .addSecurity('cookieAuth', {
      type: 'apiKey',
      in: 'cookie',
      name: 'connect.sid',
    })
    .addSecurity('localAuth', {
      type: 'http',
      scheme: 'basic',
    })
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('v1/api', app, document);

  app.use(cookieParser());
  app.use(
    session({
      secret: config.get('SESSION_SECRET'),
      resave: false,
      saveUninitialized: false,
    }),
  );
  //app.use(helmet());
  app.use(passport.initialize());
  app.use(passport.session());

  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));
};

bootstrap();

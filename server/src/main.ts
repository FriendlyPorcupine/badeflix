//This is the Entrypoint for the whole Programm

import { INestApplication as App, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

import { AppModule } from './app.module';
import { ApiConfigService } from './modules/_setup/config/api-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //Modul von nest
  const config = app.get(ApiConfigService); //config wird hier aufgerufen
  await initializeApp(app, config);
  await app.listen(config.get('API_PORT')); //Steht in env.
}

const initializeApp = async (app: App, config: ApiConfigService) => {
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
  });
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

  //each request has to go here to line 50, cookie will be readable, create in contorller
  app.use(cookieParser());
  app.use(
    session({
      secret: config.get('SESSION_SECRET'),
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));
};

bootstrap();

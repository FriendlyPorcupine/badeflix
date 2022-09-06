import { ValidationPipe, INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import csurf from 'csurf';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';

import { AppModule } from './app.module';
import { ApiConfigService } from './modules/_setup/config/api-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await initializeApp(app);
  await app.listen(3000);
}

const initializeApp = async (app: INestApplication) => {
  const config = app.get(ApiConfigService);

  app.enableCors();

  app.use(helmet());
  // app.use(csurf());

  app.use(
    session({
      secret: 'jshduaishd7821634672!82741z6742ggsdfh',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));
};

bootstrap();

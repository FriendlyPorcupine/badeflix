import { Module } from '@nestjs/common';

import { SetupModule } from './modules/_setup/setup.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { WeatherModule } from './modules/weather/weather.module';

@Module({ imports: [SetupModule, UserModule, AuthModule, WeatherModule] })
export class AppModule {}

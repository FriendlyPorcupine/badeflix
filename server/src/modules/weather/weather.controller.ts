import { Controller, UseGuards, Get, Query } from '@nestjs/common';

import { AuthenticatedGuard } from '../auth/guards/auth.guard';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  //@UseGuards(AuthenticatedGuard)
  @Get('/geolocation')
  getGeolocation(@Query('city') city: string) {
    return this.weatherService.getGeoCoordinates(city);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/coordinates')
  getWeatherByCoordinates(
    @Query('lat') lat: number,
    @Query('lon') lon: number,
  ) {
    return this.weatherService.getWeatherData(lat, lon);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/city')
  async getWeatherByCity(@Query('city') city: string) {
    const { lat, lon } = await this.weatherService.getGeoCoordinates(city);
    return this.weatherService.getWeatherData(lat, lon);
  }
}

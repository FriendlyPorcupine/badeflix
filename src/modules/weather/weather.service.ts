import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  async getGeoCoordinates(city: string): Promise<GeoCoordinatesDto> {
    const res = await axios.get(
      'http://api.openweathermap.org/geo/1.0/direct',
      {
        params: {
          q: city,
          appid: 'xxx',
          limit: 1,
        },
      },
    );

    const { name, country, state, lat, lon } = res.data[0];
    return { name, country, state, lat, lon };
  }

  async getWeatherData(lat: number, lon: number): Promise<WeatherDto> {
    const res = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat,
          lon,
          appid: 'xxx',
          units: 'metric',
        },
      },
    );

    return {
      sunset: res.data.sys.sunset,
      temperature: res.data.main.temp,
    };
  }
}

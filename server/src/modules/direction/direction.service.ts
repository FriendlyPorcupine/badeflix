import { Client } from '@googlemaps/google-maps-services-js';
import {
  Language,
  TravelMode,
  UnitSystem,
} from '@googlemaps/google-maps-services-js/dist/common';
import { Injectable } from '@nestjs/common';
import { ApiConfigService } from '../_setup/config/api-config.service';
import { RouteDto } from './dto/route-dto';
// Sozusagen der/die ArbeiterIn
@Injectable()
export class DirectionService {
  constructor(private readonly config: ApiConfigService) {}
  //Nimm
  async getRoutes(
    startAddress: string,
    destinationAddress: string,
  ): Promise<RouteDto> {
    // Client ist der intgrierte google client
    const client = new Client({});
    const { data } = await client.directions({
      params: {
        origin: startAddress,
        destination: destinationAddress,
        key: this.config.get('GOOGLE_DIRECTIONS_API_KEY'),
        units: UnitSystem.metric,
        language: Language.de,
        mode: TravelMode.transit,
      },
    });

    const route = data.routes[0].legs[0];

    return {
      distance: route.distance.text,
      duration: route.duration.text,
      end_address: route.end_address,
      start_address: route.start_address,
      steps: route.steps.map((google_step) => ({
        distance: google_step.distance.text,
        duration: google_step.duration.text,
        instruction: google_step.html_instructions,
        start_location: google_step.start_location,
        end_location: google_step.end_location,
      })),
    };
  }
}

import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import axios from 'axios';
import { TrafficDto } from './dto/traffic-dto';

@Injectable()
export class BathService {
  async getBathTraffic(bath: string): Promise<TrafficDto> {
    const { data } = await axios.get('https://data.wien.gv.at/daten/geo', {
      params: {
        service: 'WFS',
        request: 'GetFeature',
        version: '1.1.0',
        typeName: 'ogdwien:SCHWIMMBADOGD',
        srsName: 'EPSG:4326',
        outputFormat: 'json',
        cql_filter: `strIndexOf(WEBLINK1,'${bath}')>-1`,
      },
    });

    if (data.features.length === 0) {
      throw new HttpException(`Bath ${bath} does not exist`, 400);
    }

    return {
      address: data.features[0].properties.ADRESSE,
      name: data.features[0].properties.NAME,
      url: data.features[0].properties.WEBLINK1,
      ticketUrl: data.features[0].properties.WEBLINK2,
      location: {
        lat: data.features[0].geometry.coordinates[0],
        lng: data.features[0].geometry.coordinates[1],
      },
      available:
        data.features[0].properties.AUSLASTUNG_AMPEL_KAT_TXT_1 === 'Noch Platz',
    };
  }
}

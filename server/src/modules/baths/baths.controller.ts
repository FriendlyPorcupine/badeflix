import { Controller, Get, Query } from '@nestjs/common';
import { BathService } from './baths.service';
import { baths } from './data/baths';
import { Bath } from './dto/bath-dto';
import { TrafficDto } from './dto/traffic-dto';

@Controller('bath')
export class BathController {
  constructor(private readonly bathService: BathService) {}

  @Get('/baths')
  getBaths(): Bath[] {
    return baths;
  }

  @Get('/traffic')
  getTraffic(@Query('bath') bath: string): Promise<TrafficDto> {
    return this.bathService.getBathTraffic(bath);
  }
}

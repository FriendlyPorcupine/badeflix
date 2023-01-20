import { Controller, UseGuards, Get, Query } from '@nestjs/common';

import { AuthenticatedGuard } from '../auth/guards/auth.guard';
import { DirectionService } from './direction.service';

@Controller('direction')
export class DirectionController {
  constructor(private readonly directionService: DirectionService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('/direction')
  getDirections(
    @Query('start_address') startAddress: string,
    @Query('destination_address') destinationAddress: string,
  ) {
    return this.directionService.getRoutes(startAddress, destinationAddress);
  }
}

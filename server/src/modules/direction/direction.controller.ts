import { Controller, UseGuards, Get, Query } from '@nestjs/common';

import { AuthenticatedGuard } from '../auth/guards/auth.guard';
import { DirectionService } from './direction.service';

// Controller = sozusagen der/die ManagerIn
@Controller('direction')
export class DirectionController {
  constructor(private readonly directionService: DirectionService) {}

  // DierctionService ist natürlich nur authentifizierten usern erlaubt
  @UseGuards(AuthenticatedGuard)

  // Wenn Auth dann get directions
  @Get('/direction')
  getDirections(
    @Query('start_address') startAddress: string,
    @Query('destination_address') destinationAddress: string,
  ) {
    // Und getRoutes
    return this.directionService.getRoutes(startAddress, destinationAddress);
  }
}

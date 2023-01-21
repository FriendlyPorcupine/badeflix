import { Controller, UseGuards, Get, Query, HttpException } from '@nestjs/common';
import { STATUS_CODES } from 'http';

import { AuthenticatedGuard } from '../auth/guards/auth.guard';
import { DirectionService } from './direction.service';

// Controller = sozusagen der/die ManagerIn
@Controller('direction')
export class DirectionController {
  constructor(private readonly directionService: DirectionService) {}

  // DierctionService ist natürlich nur authentifizierten usern erlaubt
  //@UseGuards(AuthenticatedGuard)

  // Wenn Auth dann get directions
  @Get('/direction')
  getDirections(
    @Query('start_street') startStreet: string,
    @Query('start_zip') startZip: number,
    @Query('destination_address') destinationAddress: string,
  ) {
    //only Vienna's ZIP Codes allowed
    if (startZip >= 1240 || startZip <= 1010) {
      throw new HttpException("invalid zip code", 400);
    }

    // Und getRoutes
    return this.directionService.getRoutes(`${startStreet}`, destinationAddress);
  }
}

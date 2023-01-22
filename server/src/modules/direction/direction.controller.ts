import { STATUS_CODES } from 'http';
import {
  Controller,
  UseGuards,
  Get,
  Query,
  HttpException,
} from '@nestjs/common';

import { AuthenticatedGuard } from '../auth/guards/auth.guard';
import { DirectionService } from './direction.service';

// Controller = sozusagen der/die ManagerIn
@Controller('direction')
export class DirectionController {
  constructor(private readonly directionService: DirectionService) {}

  // DierctionService ist natürlich nur authentifizierten usern erlaubt

  // Wenn Auth dann get directions
  @UseGuards(AuthenticatedGuard)
  @Get('/direction')
  getDirections(
    @Query('start_street') startStreet: string,
    @Query('start_zip') startZip: string,
    @Query('destination_address') destinationAddress: string,
  ) {
    const validZipCodes = [
      '1010',
      '1020',
      '1030',
      '1040',
      '1050',
      '1060',
      '1070',
      '1080',
      '1090',
      '1100',
      '1110',
      '1120',
      '1130',
      '1140',
      '1150',
      '1160',
      '1170',
      '1180',
      '1190',
      '1200',
      '1210',
      '1220',
      '1230',
    ];

    //only Vienna's ZIP Codes allowed
    if (!validZipCodes.includes(startZip)) {
      throw new HttpException('invalid zip code', 400);
    }

    // Und getRoutes
    return this.directionService.getRoutes(
      `${startStreet}, ${startZip}, Wien`,
      destinationAddress,
    );
  }
}

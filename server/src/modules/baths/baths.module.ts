import { Module } from '@nestjs/common';
import { BathController } from './baths.controller';
import { BathService } from './baths.service';

@Module({
  controllers: [BathController],
  providers: [BathService],
  exports: [BathService],
})
export class BathsModule {}

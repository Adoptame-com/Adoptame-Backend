import { Module } from '@nestjs/common';
import { AdoptionController } from './adoptions.controller';
import { AdoptionsService } from './services/adoptions.services';
@Module({
  providers: [AdoptionsService],
  controllers: [AdoptionController],
})
export class AdoptionsModule {}

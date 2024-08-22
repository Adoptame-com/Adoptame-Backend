import { Module } from '@nestjs/common';
import { NotFoundController } from './not-found.controller';

@Module({
  imports: [],
  controllers: [NotFoundController],
  providers: [],
})
export class NotFoundModule {}

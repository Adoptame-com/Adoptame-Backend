import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { MongoModule } from '@src/modules/mongo/mongo.module';

@Module({
  imports: [MongoModule],
  controllers: [AccountsController],
})
export class AccountsModule {}

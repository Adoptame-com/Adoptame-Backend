import { Module } from '@nestjs/common';

import { MongoModule } from '@src/modules/mongo/mongo.module';

@Module({
  imports: [MongoModule],
  controllers: [],

})
export class AccountsModule {}

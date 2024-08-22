import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schemas/account.schema';
import { AccountService } from '../api/modules/accounts/services/account.service';
import { CustomConfigModule } from '@src/modules/custom-config/custom-config.module';
import { CustomConfigService } from '@src/modules/custom-config/custom-config.service';
import { LoggerService } from '@src/modules/logger/logger.service';
import { LoggerModule } from '@src/modules/logger/logger.module';

const models = [{ name: Account.name, schema: AccountSchema }];

@Global()
@Module({
  imports: [
    CustomConfigModule,
    MongooseModule.forRootAsync({
      imports: [CustomConfigModule, LoggerModule],
      useFactory: async (
        customConfigService: CustomConfigService,
        loggerService: LoggerService,
      ) => {
        loggerService.info('Connecting to MongoDB...', 'SYSTEM', 'INIT');
        return {
          uri: customConfigService.env.MONGO_URI,
          connectionFactory: (connection) => {
            if (connection.readyState === 1) {
              loggerService.info(
                `Mongo connection established.`,
                'SYSTEM',
                'INIT',
              );
            }
            return connection;
          },
        };
      },
      inject: [CustomConfigService, LoggerService],
    }),
    MongooseModule.forFeature(models),
  ],
  providers: [AccountService],
  exports: [AccountService],
})
export class MongoModule {}

import { Module } from '@nestjs/common';
import { ErrorService } from '@src/services/error.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from '@src/common/interceptors/response.interceptor';
import { NotFoundModule } from '@src/modules/api/modules/not-found/not-found.module';
import { DTOsService } from '@src/services/dtos.service';
import { CustomConfigModule } from '@src/modules/custom-config/custom-config.module';
import { LoggerModule } from '@src/modules/logger/logger.module';
import { ApiModule } from '@src/modules/api/api.module';
import { DefaultErrorFilter } from './common/exceptions/default-error-filter';
import { MongoModule } from '@src/modules/mongo/mongo.module';

@Module({
  imports: [
    LoggerModule,
    CustomConfigModule,
    MongoModule,
    ApiModule,
    NotFoundModule,
  ],
  providers: [
    ErrorService,
    DTOsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: DefaultErrorFilter,
    },
  ],
  exports: [ErrorService, DTOsService],
})
export class AppModule {}

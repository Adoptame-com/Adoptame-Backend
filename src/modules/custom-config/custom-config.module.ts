import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomConfigService } from './custom-config.service';
import { statics } from '@src/statics/statics';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: statics.constants.envs.envFilePath,
      isGlobal: true,
    }),
  ],
  providers: [
    CustomConfigService,
    {
      provide: ConfigService,
      useClass: CustomConfigService,
    },
  ],
  exports: [CustomConfigService],
})
export class CustomConfigModule {}

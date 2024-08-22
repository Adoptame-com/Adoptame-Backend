import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CustomConfigModule } from '@src/modules/custom-config/custom-config.module';
import { CustomConfigService } from '@src/modules/custom-config/custom-config.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { statics } from '@src/statics/statics';

@Global()
@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [CustomConfigModule],
      inject: [CustomConfigService],
      useFactory: async (customConfigService: CustomConfigService) => ({
        secret: customConfigService.env.JWT_SECRET_KEY,
        signOptions: { expiresIn: statics.constants.jwt.tokensExpireIn },
      }),
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

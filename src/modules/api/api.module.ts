import { Module } from '@nestjs/common';
import { TestModule } from '@src/modules/api/modules/test/test.module';
import { AccountsModule } from '@src/modules/api/modules/accounts/accounts.module';
import { ApiController } from './api.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AdoptionsModule } from './modules/adoptions/adoptions.module';

@Module({
  imports: [AuthModule, AccountsModule, TestModule, AdoptionsModule],
  controllers: [ApiController],
})
export class ApiModule {}

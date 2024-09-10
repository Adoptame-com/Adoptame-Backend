import { Module } from '@nestjs/common';
import { AccountsModule } from '@src/modules/api/modules/accounts/accounts.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, AccountsModule],
  controllers: [],
})
export class ApiModule {}

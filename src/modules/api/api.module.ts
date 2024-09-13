import { Module } from '@nestjs/common';
import { AccountsModule } from '@src/modules/api/modules/accounts/accounts.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdoptionsModule } from './modules/adoptions/adoptions.module';

@Module({
  imports: [AuthModule, AccountsModule, AdoptionsModule],
  controllers: [],
})
export class ApiModule {}

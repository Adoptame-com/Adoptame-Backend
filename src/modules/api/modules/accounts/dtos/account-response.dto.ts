import { BodyResponseDto } from '@src/dtos/body-response.dto';
import { IsDefined, IsObject } from 'class-validator';
import { AccountIdNoPasswordDto } from './account.dto';

export class AccountResponseDto extends BodyResponseDto {
  @IsDefined()
  @IsObject()
  body: AccountIdNoPasswordDto;
}

export class AccountsResponseDto extends BodyResponseDto {
  @IsDefined()
  @IsObject()
  body: AccountIdNoPasswordDto[];
}

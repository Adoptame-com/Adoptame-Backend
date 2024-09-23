import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { replacePlaceholders } from '@src/common/functions/replace-placeholders';
import { statics } from '@src/statics/statics';
import {
  IsMongoId,
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  Matches,
} from 'class-validator';

export const AccountNames = {
  id: 'id',
  _id: '_id',
  email: 'email',
  password: 'password',
} as const;

export class AccountIdDto {
  @IsMongoId()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail({}, { message: statics.messages.accounts.invalidEmail })
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, {
    message: replacePlaceholders(statics.messages.accounts.shortPassword, [
      '8',
    ]),
  })
  @Matches(/(?=.*[A-Z])/, {
    message: statics.messages.accounts.noUppercase,
  })
  @Matches(/(?=.*[a-z])/, {
    message: statics.messages.accounts.noLowercase,
  })
  @Matches(/(?=.*\d)/, {
    message: statics.messages.accounts.noNumber,
  })
  @Matches(/(?=.*[!@#$%^&*(),.?":{}|<>])/, {
    message: statics.messages.accounts.noSpecialChar,
  })
  readonly password: string;
}

export class AccountDto extends OmitType(AccountIdDto, [AccountNames.id]) {}

export class PartialAccountIdDto extends PartialType(AccountIdDto) {}
export class PartialAccountDto extends PartialType(AccountDto) {}
export class AccountIdNoPasswordDto extends OmitType(AccountIdDto, [
  AccountNames.password,
]) {}
export class AccountEmailAndPasswordDto extends PickType(AccountIdDto, [
  AccountNames.email,
  AccountNames.password,
]) {}

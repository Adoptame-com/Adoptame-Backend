import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import {
  IsMongoId,
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
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

  @IsEmail({}, { message: 'Email must be valid.' })
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  @MaxLength(20, { message: 'Password cannot be longer than 20 characters.' })
  @IsNotEmpty()
  @Matches(/(?=.*[A-Z])/, {
    message: 'Password must contain at least one uppercase letter.',
  })
  @Matches(/(?=.*\d)/, {
    message: 'Password must contain at least one number.',
  })
  @Matches(/(?=.*[!@#$%^&*(),.?":{}|<>])/, {
    message: 'Password must contain at least one special character.',
  })
  readonly password: string;
}

export class AccountDto extends OmitType(AccountIdDto, [AccountNames.id]) {
  @IsEmail({}, { message: 'Email must be valid.' })
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(12)
  @Matches(/(?=.*[A-Z])/, {
    message: 'Password must contain at least one uppercase letter.',
  })
  @Matches(/(?=.*\d)/, {
    message: 'Password must contain at least one number.',
  })
  @Matches(/(?=.*[!@#$%^&*(),.?":{}|<>])/, {
    message: 'Password must contain at least one special character.',
  })
  readonly password: string;
}

export class PartialAccountIdDto extends PartialType(AccountIdDto) {}
export class PartialAccountDto extends PartialType(AccountDto) {}
export class AccountIdNoPasswordDto extends OmitType(AccountIdDto, [
  AccountNames.password,
]) {}
export class AccountEmailAndPasswordDto extends PickType(AccountIdDto, [
  AccountNames.email,
  AccountNames.password,
]) {}

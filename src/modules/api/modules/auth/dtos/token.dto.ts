import { IsString, IsNotEmpty } from 'class-validator';

export class TokenDto {
  @IsString()
  @IsNotEmpty()
  readonly token: string;
}

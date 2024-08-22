import { BodyResponseDto } from '@src/dtos/body-response.dto';
import { IsDefined, IsObject } from 'class-validator';
import { TokenDto } from './token.dto';

export class TokenResponseDto extends BodyResponseDto {
  @IsDefined()
  @IsObject()
  body: TokenDto;
}

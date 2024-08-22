import { BasicResponseDto } from './basic-response.dto';
import { IsDefined, IsObject } from 'class-validator';
import { ErrorDto } from './error.dto';

export class ErrorResponseDto extends BasicResponseDto {
  @IsDefined()
  @IsObject()
  error: ErrorDto;
}

import { IsDefined, IsObject, IsString } from 'class-validator';
import { ErrorDto } from './error.dto';

export class LaunchErrorResponseDto {
  @IsString()
  code: string;

  @IsString()
  message: string;

  @IsString()
  detail: string;

  @IsDefined()
  @IsObject()
  error: ErrorDto;
}

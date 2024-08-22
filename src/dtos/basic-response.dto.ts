import { IsNumber, IsString } from 'class-validator';

export class BasicResponseDto {
  @IsNumber()
  status: number;

  @IsString()
  code: string;

  @IsString()
  message: string;

  @IsString()
  detail: string;
}

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EnvsDto {
  @IsNumber()
  @IsNotEmpty()
  PORT: number;

  @IsNotEmpty()
  @IsString()
  MONGO_URI: string;

  @IsNotEmpty()
  @IsString()
  JWT_SECRET_KEY: string;
}

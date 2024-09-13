import {
  IsString,
  IsNotEmpty,
  IsMongoId,
  IsNumber,
  IsBoolean,
  IsDate,
  IsArray,
  IsInt,
} from 'class-validator';

export class AdoptionDto {
  @IsMongoId()
  account: string;

  @IsArray()
  @IsString({ each: true })
  imagesVideoUrl: string[];

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsMongoId()
  city: string;

  @IsNumber()
  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsString()
  @IsNotEmpty()
  race: string;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  tastes: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  characteristics: string[];

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsBoolean()
  @IsNotEmpty()
  sterilized: boolean;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}

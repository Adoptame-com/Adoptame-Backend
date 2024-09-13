import { BodyResponseDto } from '@src/dtos/body-response.dto';
import { IsDefined, IsObject } from 'class-validator';
import { AdoptionDto } from './adoptions.dto';

export class AdoptionsResponseDto extends BodyResponseDto {
  @IsDefined()
  @IsObject()
  body: AdoptionDto[];
}

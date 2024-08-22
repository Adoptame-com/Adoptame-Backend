import { IsObject, IsDefined } from 'class-validator';
import { BasicResponseDto } from './basic-response.dto';

export class BodyResponseDto extends BasicResponseDto {
  @IsDefined()
  @IsObject()
  body: Record<string, any>;
}

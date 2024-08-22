import { IsObject, IsDefined } from 'class-validator';
import { BodyResponseDto } from './body-response.dto';
import { MessageDto } from './message.dto';

export class BodyMessageResponseDto extends BodyResponseDto {
  @IsDefined()
  @IsObject()
  body: MessageDto;
}

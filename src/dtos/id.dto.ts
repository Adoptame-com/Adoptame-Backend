import { IsMongoId } from 'class-validator';

export class IdDto {
  @IsMongoId()
  readonly id: string;
}

import { Injectable, ValidationPipe } from '@nestjs/common';
import { statics } from '@src/statics/statics';

@Injectable()
export class DTOsService {
  public validationPipe(): ValidationPipe {
    return new ValidationPipe({
      whitelist: statics.constants.validations.whitelist,
      forbidNonWhitelisted: statics.constants.validations.forbidNonWhitelisted,
    });
  }
}

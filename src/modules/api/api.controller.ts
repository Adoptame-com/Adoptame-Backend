import { Controller } from '@nestjs/common';
import { statics } from '@src/statics/statics';
import { HttpStatus } from '@nestjs/common';
import { BodyMessageResponseDto } from '@src/dtos/body-message-response.dto';
import { ApiTags } from '@nestjs/swagger';
import { EndpointConfig } from '@src/common/decorators/enpoint-config.decorator';

@ApiTags(statics.paths.root.tag)
@Controller()
export class ApiController {
  constructor() {}

  @EndpointConfig(statics.paths.root, [
    {
      status: HttpStatus.OK,
      type: BodyMessageResponseDto,
    },
  ])
  getRootMessage(): BodyMessageResponseDto {
    return {
      status: HttpStatus.OK,
      code: statics.codes.dataRetrievedSuccessfully.code,
      message: statics.codes.dataRetrievedSuccessfully.message,
      detail: statics.messages.root.success,
      body: {
        message: statics.messages.root.hello,
      },
    };
  }
}

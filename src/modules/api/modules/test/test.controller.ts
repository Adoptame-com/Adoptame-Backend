import { Controller, HttpCode } from '@nestjs/common';
import { statics } from '@src/statics/statics';
import { HttpStatus } from '@nestjs/common';
import { ResponseError } from '@src/common/exceptions/response-error';
import { ErrorResponseDto } from '@src/dtos/error-response.dto';
import { BodyMessageResponseDto } from '@src/dtos/body-message-response.dto';
import { ApiTags } from '@nestjs/swagger';
import { EndpointConfig } from '@src/common/decorators/enpoint-config.decorator';

@ApiTags(statics.paths.test.tag)
@Controller()
export class TestController {
  @EndpointConfig(statics.paths.testSuccess, [
    {
      status: HttpStatus.OK,
      type: BodyMessageResponseDto,
    },
  ])
  getTestSuccess(): BodyMessageResponseDto {
    return {
      status: HttpStatus.OK,
      code: statics.codes.dataRetrievedSuccessfully.code,
      message: statics.codes.dataRetrievedSuccessfully.message,
      detail: statics.messages.test.success,
      body: {
        message: statics.messages.test.success,
      },
    };
  }

  @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
  @EndpointConfig(statics.paths.testError, [])
  getTestError(): ErrorResponseDto {
    throw new ResponseError({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: statics.codes.retrievingDataError.code,
      message: statics.codes.retrievingDataError.message,
      detail: statics.messages.test.error,
    });
  }
}

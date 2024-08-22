import { Controller, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ErrorResponseDto } from '@src/dtos/error-response.dto';
import { ResponseError } from '@src/common/exceptions/response-error';
import { statics } from '@src/statics/statics';
import { EndpointConfig } from '@src/common/decorators/enpoint-config.decorator';

@ApiTags(statics.paths.default.tag)
@Controller()
export class NotFoundController {
  constructor() {}

  @HttpCode(HttpStatus.NOT_FOUND)
  @EndpointConfig(statics.paths.defaultGet, [
    {
      status: HttpStatus.NOT_FOUND,
      type: ErrorResponseDto,
    },
  ])
  getNotFound(): ErrorResponseDto {
    throw new ResponseError({
      status: HttpStatus.NOT_FOUND,
      code: statics.codes.noDataFound.code,
      message: statics.codes.noDataFound.message,
      detail: statics.messages.default.noFound,
    });
  }

  @HttpCode(HttpStatus.NOT_FOUND)
  @EndpointConfig(statics.paths.defaultPost, [
    {
      status: HttpStatus.NOT_FOUND,
      type: ErrorResponseDto,
    },
  ])
  postNotFound(): ErrorResponseDto {
    throw new ResponseError({
      status: HttpStatus.NOT_FOUND,
      code: statics.codes.noDataFound.code,
      message: statics.codes.noDataFound.message,
      detail: statics.messages.default.noFound,
    });
  }

  @HttpCode(HttpStatus.NOT_FOUND)
  @EndpointConfig(statics.paths.defaultPatch, [
    {
      status: HttpStatus.NOT_FOUND,
      type: ErrorResponseDto,
    },
  ])
  patchNotFound(): ErrorResponseDto {
    throw new ResponseError({
      status: HttpStatus.NOT_FOUND,
      code: statics.codes.noDataFound.code,
      message: statics.codes.noDataFound.message,
      detail: statics.messages.default.noFound,
    });
  }

  @HttpCode(HttpStatus.NOT_FOUND)
  @EndpointConfig(statics.paths.defaultPut, [
    {
      status: HttpStatus.NOT_FOUND,
      type: ErrorResponseDto,
    },
  ])
  putNotFound(): ErrorResponseDto {
    throw new ResponseError({
      status: HttpStatus.NOT_FOUND,
      code: statics.codes.noDataFound.code,
      message: statics.codes.noDataFound.message,
      detail: statics.messages.default.noFound,
    });
  }

  @HttpCode(HttpStatus.NOT_FOUND)
  @EndpointConfig(statics.paths.defaultDelete, [
    {
      status: HttpStatus.NOT_FOUND,
      type: ErrorResponseDto,
    },
  ])
  deleteNotFound(): ErrorResponseDto {
    throw new ResponseError({
      status: HttpStatus.NOT_FOUND,
      code: statics.codes.noDataFound.code,
      message: statics.codes.noDataFound.message,
      detail: statics.messages.default.noFound,
    });
  }
}

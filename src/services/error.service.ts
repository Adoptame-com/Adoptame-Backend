import { BadRequestException, HttpStatus } from '@nestjs/common';
import { LaunchError } from '@src/common/exceptions/launch-error';
import { ResponseError } from '@src/common/exceptions/response-error';
import { ErrorResponseDto } from '@src/dtos/error-response.dto';
import { LaunchErrorResponseDto } from '@src/dtos/launch-response.dto';
import { LoggerService } from '@src/modules/logger/logger.service';
import { v4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { statics } from '@src/statics/statics';
import { BodyResponseDto } from '@src/dtos/body-response.dto';
import { replacePlaceholders } from '@src/common/functions/replace-placeholders';

@Injectable()
export class ErrorService {
  constructor(private readonly loggerService: LoggerService) {}

  public startSystemHandler(err: any) {
    let response: LaunchErrorResponseDto;
    if (err instanceof LaunchError) {
      response = err.response;
    } else {
      response = {
        code: statics.codes.startError.code,
        message: statics.codes.startError.message,
        detail: err?.message ?? statics.messages.default.unhandledError,
        error: {
          id: v4(),
          stack: err?.stack?.split('\n') ?? [
            `Error: ${statics.messages.default.unhandledError}`,
            `    at ${statics.messages.default.noTraceAvailable}`,
          ],
        },
      };
    }
    this.loggerService.error(response.message, 'SYSTEM', 'INIT', response);
    return response;
  }

  public responseHandler(err: any) {
    let response: ErrorResponseDto;
    if (err instanceof ResponseError) {
      response = err.response;
    } else if (err instanceof BadRequestException) {
      const exceptionResponse = err.getResponse();
      response = {
        status: HttpStatus.BAD_REQUEST,
        code: statics.codes.badRequest.code,
        message: statics.codes.badRequest.message,
        detail:
          replacePlaceholders(statics.messages.default.badRequest, [
            exceptionResponse?.['message']?.join?.(', ') ??
              exceptionResponse?.['message']?.toString?.() ??
              exceptionResponse?.toString(),
          ]) ?? statics.messages.default.unhandledError,
        error: {
          id: v4(),
          stack: err.stack?.split('\n') || [
            `Error: ${exceptionResponse['message']}`,
            `    at ${statics.messages.default.noTraceAvailable}`,
          ],
        },
      };
    } else {
      response = {
        status: err.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
        code: statics.codes.unhandledError.code,
        message: statics.codes.unhandledError.message,
        detail: err?.message ?? statics.messages.default.unhandledError,
        error: {
          id: v4(),
          stack: err?.stack?.split('\n') ?? [
            `Error: ${statics.messages.default.unhandledError}`,
            `    at ${statics.messages.default.noTraceAvailable}`,
          ],
        },
      };
    }
    return response;
  }

  public removePrivateData(
    logLevel: string,
    response: BodyResponseDto | ErrorResponseDto,
  ) {
    if ('error' in response) {
      delete (response as ErrorResponseDto).error.stack;
      switch (logLevel) {
        case 'WARN':
          if (!statics.constants.logs.logResponses.warn) {
            delete (response as ErrorResponseDto).error.id;
          }
          break;
        case 'ERROR':
          if (statics.constants.logs.logResponses.error) {
            delete (response as ErrorResponseDto).error.id;
          }
          break;
      }
    }
  }
}

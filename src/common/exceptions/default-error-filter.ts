import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { LoggerService } from '@src/modules/logger/logger.service';
import { ErrorService } from '@src/services/error.service';
import { Response } from 'express';

@Catch()
export class DefaultErrorFilter implements ExceptionFilter {
  constructor(
    private readonly errorService: ErrorService,
    private readonly loggerService: LoggerService,
  ) {}

  catch(err: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    if (!res.headersSent) {
      const response = this.errorService.responseHandler(err);
      const logLevel = this.loggerService.logResponse(response);
      this.errorService.removePrivateData(logLevel, response);
      res.status(response.status).json(response);
    }
  }
}

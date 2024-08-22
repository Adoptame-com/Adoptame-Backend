import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BodyResponseDto } from '@src/dtos/body-response.dto';
import { ErrorResponseDto } from '@src/dtos/error-response.dto';
import { ErrorService } from '@src/services/error.service';
import { LoggerService } from '@src/modules/logger/logger.service';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(
    private readonly errorService: ErrorService,
    private readonly loggerService: LoggerService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const res = context.switchToHttp().getResponse<Response>();
    return next.handle().pipe(
      tap((response: BodyResponseDto | ErrorResponseDto) => {
        const logLevel = this.loggerService.logResponse(response);
        this.errorService.removePrivateData(logLevel, response);
        res.status(response.status).json(response);
        return of(null);
      }),
    );
  }
}

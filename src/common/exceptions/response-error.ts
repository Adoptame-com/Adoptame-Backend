import { BasicResponseDto } from '@src/dtos/basic-response.dto';
import { ErrorResponseDto } from '@src/dtos/error-response.dto';
import { v4 } from 'uuid';

export class ResponseError extends Error {
  public response: ErrorResponseDto;
  constructor(public responseInput: BasicResponseDto) {
    super(responseInput.detail);
    this.response = {
      status: responseInput.status,
      code: responseInput.code,
      message: responseInput.message,
      detail: responseInput.detail,
      error: {
        id: v4(),
        stack: this.stack.split('\n'),
      },
    };
  }
}

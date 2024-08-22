import { LaunchErrorResponseDto } from '@src/dtos/launch-response.dto';
import { v4 } from 'uuid';

export class LaunchError extends Error {
  public response: LaunchErrorResponseDto;
  constructor(
    public code: string,
    public message: string,
    public detail: string,
  ) {
    super(detail);
    this.response = {
      code: code,
      message: message,
      detail: detail,
      error: {
        id: v4(),
        stack: this.stack.split('\n'),
      },
    };
  }
}

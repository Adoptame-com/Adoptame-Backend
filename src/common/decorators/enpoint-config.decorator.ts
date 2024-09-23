import { applyDecorators, HttpStatus, RequestMapping } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiResponseOptions,
} from '@nestjs/swagger';
import { ErrorResponseDto } from '@src/dtos/error-response.dto';
import { Path } from '@src/statics/paths/paths';
import { statics } from '@src/statics/statics';

export function EndpointConfig(path: Path, apiResponses: ApiResponseOptions[]) {
  const buildApiResponses = [
    ...apiResponses,
    ...(!path.public
      ? [
          {
            status: HttpStatus.UNAUTHORIZED,
            type: ErrorResponseDto,
          },
        ]
      : []),
    {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      type: ErrorResponseDto,
    },
  ];
  return applyDecorators(
    RequestMapping({
      path: path.path,
      method: path.method,
    }),
    ...(!path.public ? [ApiBearerAuth()] : []),
    ...buildApiResponses.map((apiResponse) => {
      return ApiResponse({
        ...apiResponse,
        description: statics.docs.statusCodes[apiResponse.status] || '',
      });
    }),
    ApiOperation({
      summary: path.summary,
    }),
  );
}

import { Controller, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EndpointConfig } from '@src/common/decorators/enpoint-config.decorator';
import { statics } from '@src/statics/statics';
import { AdoptionsResponseDto } from './dtos/adoptions-response.dto';
import { AdoptionsService } from './services/adoptions.services';

@ApiTags(statics.paths.adoptions.tag)
@Controller()
export class AdoptionController {
  constructor(private readonly adoptionsService: AdoptionsService) {}

  @EndpointConfig(statics.paths.adoptionsGet, [
    {
      status: HttpStatus.OK,
      type: AdoptionsResponseDto,
    },
  ])
  async findAll(): Promise<AdoptionsResponseDto> {
    return {
      status: HttpStatus.OK,
      code: 'STATUS_OK',
      message: 'Adoptions found',
      detail: 'Adoptions found',
      body: await this.adoptionsService.findAll(),
    };
  }
}

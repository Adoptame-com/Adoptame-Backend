import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { statics } from '@src/statics/statics';

export class SwaggerService {
  constructor(private readonly app: INestApplication) {}

  public setupSwagger() {
    const documentConfig = new DocumentBuilder()
      .setTitle(statics.docs.title)
      .setDescription(statics.docs.description)
      .setVersion(statics.docs.version)
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(this.app, documentConfig);
    SwaggerModule.setup(statics.paths.docs.path, this.app, document);
  }
}

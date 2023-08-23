import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.setGlobalPrefix('api');

  const optionsSwagger = new DocumentBuilder()
    .setTitle('NestJS ECommerce App')
    .setDescription('The ECommerce description')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, optionsSwagger);
  SwaggerModule.setup('/docs', app, document, {
    customSiteTitle: 'eCommerce Swagger API',
  });

  await app.listen(3000);
}
bootstrap();

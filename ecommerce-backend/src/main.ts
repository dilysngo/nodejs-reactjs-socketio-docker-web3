import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ExceptionInterceptor } from './common/interceptors/exception.interceptor';

/** Starts the application */
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new ExceptionInterceptor());

  const config = new DocumentBuilder()
    .setTitle('eCommerce Back End')
    .setDescription('Back End for eCommerces')
    .setVersion('0.0.1')
    .setBasePath('api')
    .addBearerAuth()
    .addTag('authentication')
    .addTag('user')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document, {
    customSiteTitle: 'eCommerce Swagger API',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

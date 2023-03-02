import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //para que solo reciba las cosas que le estoy pidiendo
      forbidNonWhitelisted: true, //sumado a lo anterior, me da un error si recibe cosas que no me pide
    }),
  );
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { AppConfig, AppConfigToken } from './(shared)/config/configs'
import { ValidationPipe, VersioningType } from '@nestjs/common';

const corsOptions = () => {
  const origin = [
    'http://localhost:4000',
  ];
  const methods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'];
  const allowedHeaders = ['Content-Type', 'Authorization'];
  const exposedHeaders = ['Authorization', 'Set-Cookie', 'Cookie', 'jwt'];

  return {
    origin,
    credentials: true,
    methods,
    allowedHeaders,
    exposedHeaders,
  } as CorsOptions
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  })
  const config = app.get<AppConfig>(AppConfigToken)

  app.use(cookieParser());
  app.enableCors(corsOptions())
  app.useGlobalPipes(new ValidationPipe())
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })

  await app.listen(config.port);
}

bootstrap();

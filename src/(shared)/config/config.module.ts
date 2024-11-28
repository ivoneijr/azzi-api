import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'
import Joi from 'joi';

import {
  appConfig,
  googleConfig,
  jwtConfig,
  postgresConfig,
  redisConfig
} from './configs'

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        appConfig,
        postgresConfig,
        redisConfig,
        jwtConfig,
        googleConfig,
      ],
      validationSchema: Joi.object({
        // App
        NODE_ENV: Joi.string()
          .valid('local', 'staging', 'production')
          .required(),
        PORT: Joi.number().default(4000),
        API_URL: Joi.string().required(),
        CLIENT_URL: Joi.string().required(),
        // PostgreSQL
        DATABASE_URL: Joi.string().required(),
        // Redis
        REDIS_URL: Joi.string().required(),
        // JWT
        JWT_SECRET: Joi.string().required(),
        JWT_REFRESH_SECRET: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigModule { }

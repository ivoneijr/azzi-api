import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'
import { APP_GUARD } from '@nestjs/core'

import { HttpLoggerMiddleware } from '@shared/middlewares/http-logger.middleware'
import { ConfigModule } from '@shared/config/config.module'
import { PrismaService } from '@shared/prisma/prisma.service'

import { StatusModule } from './status/status.module';

import { UsersModule } from '@features/users/users.module';
import { ServiceProvidersModule } from '@features/service-providers/service-providers.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 10000, limit: 20 }],
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({
      verboseMemoryLeak: true,
    }),
    ConfigModule,

    StatusModule,
    UsersModule,
    ServiceProvidersModule,
  ],
  controllers: [],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    PrismaService,

    StatusModule,
    UsersModule,
    ServiceProvidersModule,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*')
  }
}

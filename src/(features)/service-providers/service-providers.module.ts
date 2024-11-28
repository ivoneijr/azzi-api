import { forwardRef, Module } from '@nestjs/common';

import { PrismaModule } from 'src/(shared)/prisma/prisma.module';

import { ServiceProvidersService } from './service-providers.service';
import { ServiceProvidersController } from './service-providers.controller';
// import { AuthModule } from '@features/auth/auth.module';
// import { AuthGuard } from '@features/auth/auth.guard';

@Module({
  imports: [
    PrismaModule,
    // forwardRef(() => AuthModule),
  ],
  controllers: [ServiceProvidersController],
  providers: [ServiceProvidersService],
  exports: [ServiceProvidersService]
})
export class ServiceProvidersModule { }

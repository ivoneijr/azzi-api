import { forwardRef, Module } from '@nestjs/common';

import { PrismaModule } from 'src/(shared)/prisma/prisma.module';

import { PackagesService } from './packages.service';
import { PackagesController } from './packages.controller';

@Module({
  imports: [
    PrismaModule,
    // forwardRef(() => AuthModule),
  ],
  controllers: [PackagesController],
  providers: [PackagesService],
  exports: [PackagesService]
})
export class PackagesModule { }

import { forwardRef, Module } from '@nestjs/common';

import { PrismaModule } from '@shared/prisma/prisma.module';
// import { AuthModule } from '@features/auth/auth.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    PrismaModule,
    // forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }

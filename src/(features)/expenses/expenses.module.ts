import { forwardRef, Module } from '@nestjs/common';

import { PrismaModule } from 'src/(shared)/prisma/prisma.module';

import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { AuthModule } from '@features/auth/auth.module';
import { AuthGuard } from '@features/auth/auth.guard';

@Module({
  imports: [
    PrismaModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [ExpensesController],
  providers: [ExpensesService, AuthGuard],
  exports: [ExpensesService, AuthGuard]
})
export class ExpensesModule { }

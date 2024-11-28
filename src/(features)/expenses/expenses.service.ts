import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from 'src/(shared)/prisma/prisma.service';

import { AllDTO } from './dto/all.dto';
import { UpdateDTO } from './dto/update.dto';

@Injectable()
export class ExpensesService {
  private readonly logger = new Logger(ExpensesService.name)

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) { }

  async all(query: AllDTO) {
    return []
  }
}

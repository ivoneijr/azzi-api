import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { PrismaService } from 'src/(shared)/prisma/prisma.service';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name)

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) { }

  // TODO: finish this...
  async me() {
    return {
      todo: true
    }
  }
}

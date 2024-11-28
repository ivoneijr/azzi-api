import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from 'src/(shared)/prisma/prisma.service';

@Injectable()
export class PackagesService {
  private readonly logger = new Logger(PackagesService.name)

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) { }

  async quotes() {
    const queryResult = await this.prisma.package.groupBy({
      by: ['type'],
      _min: {
        price: true,
        quantity: true,
      },
      orderBy: {
        type: 'asc',
      },
    });

    const result = {}

    queryResult.forEach(item => result[item.type] = {
      _min: {
        price: item._min.price,
        quantity: item._min.quantity,
      },
    })

    return result
  }
}

import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from 'src/(shared)/prisma/prisma.service';

@Injectable()
export class ServiceProvidersService {
  private readonly logger = new Logger(ServiceProvidersService.name)

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) { }

  async all() {
    const serviceProviders = await this.prisma.serviceProvider.findMany({
      include: {
        user: {
          include: {
            profile: true,
          }
        },
        packages: true,
      }
    })

    return serviceProviders
  }
}

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
      select: {
        id: true,
        slug: true,
        location: true,
        isActive: true,
        user: {
          select: {
            id: true,
            profile: {
              select: {
                name: true,
                avatarUrl: true,
              }
            },
          }
        },
        packages: {
          select: {
            id: true,
            title: true,
            price: true,
            quantity: true,
            type: true,
          }
        },
      },
    })

    return serviceProviders
  }

  async available() {
    const serviceProviders = await this.prisma.serviceProvider.findMany({
      select: {
        id: true,
        location: true,
      },
      where: { isActive: true },
    })

    const markers = serviceProviders.map(provider => {
      const latitude = provider.location.split(',')[0].trim()
      const longitude = provider.location.split(',')[1].trim()

      return {
        id: provider.id,
        location: provider.location,
        latitude,
        longitude,
      }
    })

    return markers
  }
}

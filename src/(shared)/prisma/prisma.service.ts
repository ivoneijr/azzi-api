import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  private static isConnected = false
  private readonly logger = new Logger(PrismaService.name)

  async onModuleInit() {
    if (PrismaService.isConnected) return

    await this.$connect()
    PrismaService.isConnected = true
    this.logger.log('Connected to database')
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}

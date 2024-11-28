import { ConfigType, registerAs } from '@nestjs/config'

export type RedisConfig = ConfigType<typeof redisConfig>

export const redisConfig = registerAs('redis', () => ({
  url: process.env.REDIS_URL,
}))

export const RedisConfigToken = redisConfig.KEY

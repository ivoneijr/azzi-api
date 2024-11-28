import { ConfigType, registerAs } from '@nestjs/config'

export type JWTConfig = ConfigType<typeof jwtConfig>

export const jwtConfig = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
  refreshSecret: process.env.JWT_REFRESH_SECRET,
}))

export const JWTConfigToken = jwtConfig.KEY

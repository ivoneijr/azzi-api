import { ConfigType, registerAs } from '@nestjs/config'

export type PostgreSQLConfig = ConfigType<typeof postgresConfig>

export const postgresConfig = registerAs('postgres', () => ({
  databaseUrl: process.env.DATABASE_URL,
}))

export const PostgresConfigToken = postgresConfig.KEY

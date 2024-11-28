import { ConfigType, registerAs } from '@nestjs/config'

export type AppConfig = ConfigType<typeof appConfig>

export const appConfig = registerAs('app', () => ({
  environment: process.env.NODE_ENV,
  port: Number(process.env.PORT) || 3000,
  apiUrl: process.env.API_URL as string,
  clientUrl: process.env.CLIENT_URL as string,
  isEnvEqualsTo: (env: string) => env === process.env.NODE_ENV
}))

export const AppConfigToken = appConfig.KEY

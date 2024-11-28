import { ConfigType, registerAs } from '@nestjs/config'

export type GoogleConfig = ConfigType<typeof googleConfig>

export const googleConfig = registerAs('google', () => ({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
}))

export const GoogleConfigToken = googleConfig.KEY

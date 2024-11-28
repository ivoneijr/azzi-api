import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  hello() {
    return 'up and running (='
  }

  config() {
    return {
      success: true,
      message: 'Server is running',
      metadata: {
        version: require('../../../package.json').version,
        uptime: process.uptime(),
        NODE_ENV: process.env.NODE_ENV,
        API_URL: process.env.API_URL,
        PORT: process.env.PORT,
        CLIENT_URL: process.env.CLIENT_URL,
        REDIS_URL: process.env.REDIS_URL
      }
    }
  }
}


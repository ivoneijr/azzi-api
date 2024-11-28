import { Injectable, Logger, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP')

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request
    const userAgent = request.get('user-agent') || ''

    // Sanitize sensitive information
    const sanitizedBody = this.sanitizeSensitiveInfo(request.body)
    const sanitizedHeaders = this.sanitizeSensitiveInfo(request.headers)

    this.logger.log(
      `REQUEST: ${method} ${originalUrl} - ${JSON.stringify(sanitizedBody)} - ${JSON.stringify(sanitizedHeaders)} - ${userAgent} ${ip}`,
    )

    response.on('finish', () => {
      const { statusCode } = response

      this.logger.log(
        `RESPONSE: ${method} ${originalUrl} ${statusCode} - ${userAgent} ${ip}`,
      )
    })

    next()
  }

  private sanitizeSensitiveInfo(obj: any): any {
    const sensitiveFields = [
      'password',
      'newPassword',
      'confirmPassword',
      'passwordHash',
      'refreshTokenHash',
      'accessToken',
      'refreshToken',
      'authorization',
    ]
    const sanitized = { ...obj }

    for (const key in sanitized) {
      if (sensitiveFields.includes(key.toLowerCase())) {
        sanitized[key] = '[REDACTED]'
      } else if (
        typeof sanitized[key] === 'object' &&
        sanitized[key] !== null &&
        !Array.isArray(sanitized[key])
      ) {
        sanitized[key] = this.sanitizeSensitiveInfo(sanitized[key])
      }
    }

    return sanitized
  }
}

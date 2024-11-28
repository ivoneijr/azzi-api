import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { ServiceProvidersService } from './service-providers.service';


@Controller('service-providers')
export class ServiceProvidersController {
  constructor(private readonly serviceProvidersService: ServiceProvidersService) { }

  // TODO: add query param to filter by nearest providers
  @Get()
  all() {
    return this.serviceProvidersService.all();
  }

  @Get('/available')
  available() {
    return this.serviceProvidersService.available();
  }
}

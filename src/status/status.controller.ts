import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) { }

  @Get()
  hello() {
    return this.statusService.hello();
  }

  @Get('config')
  config() {
    return this.statusService.config();
  }
}

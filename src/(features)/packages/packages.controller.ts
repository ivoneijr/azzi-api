import { Controller, Get } from '@nestjs/common';
import { PackagesService } from './packages.service';


@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) { }

  @Get('/quotes')
  quotes() {
    return this.packagesService.quotes();
  }
}

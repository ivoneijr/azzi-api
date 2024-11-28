import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { AllDTO } from './dto/all.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) { }

  @Get()
  all(@Query() query: AllDTO, @Req() req: any) {
    return this.expensesService.all(query);
  }

}

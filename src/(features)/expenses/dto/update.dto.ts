import { ExpenseStatus } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsNumber, Min, Max, IsOptional, IsString, IsEnum } from 'class-validator';

export class UpdateDTO {
  @IsNumber()
  @Min(2000)
  @Max(2500)
  @IsOptional()
  @Transform(({ value }) => value ? Number(value) : new Date().getFullYear())
  year: number;

  @IsNumber()
  @Min(0)
  @Max(11)
  @IsOptional()
  @Transform(({ value }) => value ? Number(value) : new Date().getMonth())
  month: number;

  @IsString()
  @IsOptional()
  categoryId: string;

  @IsString()
  description: string;

  @IsNumber()
  @Transform(({ value }) => value ? Number(value) : new Date().getMonth())
  amount: number;

  @IsEnum(ExpenseStatus)
  status: ExpenseStatus;
}

import { Transform } from 'class-transformer';
import { IsNumber, Min, Max, IsOptional, IsString } from 'class-validator';

export class CreateDTO {
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
  description: string;

  @IsNumber()
  @Transform(({ value }) => value ? Number(value) : new Date().getMonth())
  amount: number;
}

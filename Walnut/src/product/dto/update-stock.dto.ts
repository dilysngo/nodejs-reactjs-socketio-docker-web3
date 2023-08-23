import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductStockDto extends PartialType(CreateProductDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  stock: number;
}

import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateProductStockDto } from './dto/update-stock.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepositiry: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { name, description, stock, price, categoryId } = createProductDto;
    const product = new Product();

    product.name = name;
    product.description = description;
    product.stock = stock;
    product.price = price;
    product.categoryId = categoryId;

    await this.productRepositiry.save(product);

    return product;
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepositiry.find();
  }

  async findOne(id: string): Promise<Product> {
    try {
      return await this.productRepositiry.findOneOrFail(id);
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<boolean> {
    try {
      await this.findOne(id);
      await this.productRepositiry.update(id, updateProductDto);
      return true;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.findOne(id);
      await this.productRepositiry.delete(id);
      return true;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async updateStock(
    id: string,
    updateProductStockDto: UpdateProductStockDto,
    type: string,
  ): Promise<boolean> {
    const { stock } = updateProductStockDto;
    const product = await this.findOne(id);

    if (type === 'remove') {
      if (stock > product.stock)
        throw new HttpException(
          'Removed stock greater than existing stock',
          HttpStatus.CONFLICT,
        );
      await this.productRepositiry.update(id, { stock: product.stock - stock });
      return true;
    } else if (type === 'add') {
      await this.productRepositiry.update(id, { stock: product.stock + stock });
      return true;
    } else {
      throw new HttpException('INVALID', HttpStatus.BAD_REQUEST);
    }
  }
}

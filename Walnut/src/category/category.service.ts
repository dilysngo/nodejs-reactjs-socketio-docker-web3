import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const { name, description } = createCategoryDto;

    const category = new Category();

    category.name = name;
    category.description = description;

    await this.categoryRepository.save(category);

    return category;
  }

  async findAll(relation: boolean): Promise<Category[]> {
    if (relation)
      return await this.categoryRepository.find({ relations: ['products'] });
    return await this.categoryRepository.find();
  }

  async findOne(id: string): Promise<Category> {
    try {
      return await this.categoryRepository.findOneOrFail(id, {
        relations: ['products'],
      });
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<boolean> {
    try {
      await this.findOne(id);
      await this.categoryRepository.update(id, updateCategoryDto);
      return true;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.findOne(id);
      await this.categoryRepository.delete(id);
      return true;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}

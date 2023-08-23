import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  @Column({ nullable: true })
  description?: string;

  @ApiProperty()
  @Column()
  stock: number;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column()
  categoryId: string;

  @ApiProperty()
  @ManyToOne(() => Category, (category) => category.products, {
    nullable: true,
  })
  @JoinTable({ name: 'categoryId' })
  category?: Category;

  @ApiProperty({ required: false })
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at',
  })
  createdAt?: Date;

  @ApiProperty({ required: false })
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    name: 'updated_at',
  })
  updatedAt?: Date;

  // TODO: add m-1 relation with super-user
}

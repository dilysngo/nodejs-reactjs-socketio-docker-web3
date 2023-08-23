import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('uploaded_file')
export class File {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  name?: string;

  @ApiProperty()
  @Column({ name: 'original_name' })
  originalName: string;

  @ApiProperty()
  @Column({ name: 'file_type' })
  fileType: string;

  @ApiProperty()
  @Column({ name: 'file_name' })
  fileName: string;

  @ApiProperty()
  @Column()
  size: string;

  @ApiProperty()
  @Column()
  path: string;

  @ApiProperty({ required: false })
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at',
  })
  createdAt?: Date;
}

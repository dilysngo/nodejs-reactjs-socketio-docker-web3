import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from './role.enum';
import { Exclude } from 'class-transformer';

@Entity()
@Unique(['email'])
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ name: 'first_name' })
  firstName: string;

  @ApiProperty()
  @Column({ name: 'last_name' })
  lastName: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty({ nullable: true, default: false })
  @Column({ name: 'verified', default: false, type: Boolean })
  isVerified?: boolean;

  @Column()
  @Exclude()
  password: string;

  @ApiProperty({ required: false })
  @Column({ type: 'enum', enum: Role, default: Role.USER })
  roles?: Role;

  @BeforeInsert()
  private hashPassword?() {
    this.password = bcrypt.hashSync(this.password, 10);
  }
}

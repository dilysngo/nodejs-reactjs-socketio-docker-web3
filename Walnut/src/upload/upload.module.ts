import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/file.entity';

@Module({
  imports: [MulterModule.register(), TypeOrmModule.forFeature([File])],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}

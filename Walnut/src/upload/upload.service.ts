import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { FileInterface } from './interface/file.interface';
import { formatBytes } from './upload.util';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(File) private fileRepository: Repository<File>,
  ) {}

  async createFile(fileDto: FileInterface): Promise<File> {
    const file = new File();

    file.name = fileDto.name;
    file.originalName = fileDto.originalname;
    file.fileName = fileDto.filename;
    file.fileType = fileDto.mimetype;
    file.size = formatBytes(fileDto.size);
    file.path = `/uploads/${
      file.fileType.includes('image') ? 'images' : 'files'
    }/${file.fileName}`;

    await this.fileRepository.save(file);

    return file;
  }
}

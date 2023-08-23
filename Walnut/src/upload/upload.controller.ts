import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { FileExtenderInterceptor } from 'src/interceptor/file-extender.interceptor';
import { FileUploadDto } from './dto/create-upload.dto';
import { File } from './entities/file.entity';
import { FileInterface } from './interface/file.interface';
import { UploadService } from './upload.service';
import { editFileName, imageFilter, textFileFilter } from './upload.util';

@ApiTags('upload')
@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}
  @Post('image')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileExtenderInterceptor)
  @ApiBody({
    type: FileUploadDto,
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/images',
        filename: editFileName,
      }),
      fileFilter: imageFilter,
      limits: {
        fileSize: 2000000,
        files: 1,
      },
    }),
  )
  @ApiCreatedResponse({ type: File })
  async uploadImage(@UploadedFile() file: FileInterface): Promise<File> {
    if (!file)
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    return await this.uploadService.createFile(file);
  }

  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/files',
        filename: editFileName,
      }),
      fileFilter: textFileFilter,
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: FileUploadDto,
  })
  @ApiCreatedResponse({ type: File })
  async uploadTextFile(@UploadedFile() file: FileInterface): Promise<File> {
    if (!file)
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    return await this.uploadService.createFile(file);
  }

  @Get('image/:imageName')
  sendUploadedImage(@Param('imageName') image: string, @Res() res: Response) {
    return res.sendFile(image, { root: './uploads/images' });
  }

  @Get('file/:fileName')
  sendUploadedFile(@Param('fileName') file: string, @Res() res: Response) {
    return res.sendFile(file, { root: './uploads/files' });
  }
}

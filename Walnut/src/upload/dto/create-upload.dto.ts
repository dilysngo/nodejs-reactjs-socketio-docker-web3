import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FileUploadDto {
  @ApiPropertyOptional()
  name?: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

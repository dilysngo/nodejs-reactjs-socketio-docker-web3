import { HttpException, HttpStatus } from '@nestjs/common';
import { extname } from 'path';

export const imageFilter = (req, file, callback) => {
  const fileExt: string = file.originalname.slice(
    ((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2,
  );
  if (
    fileExt != 'png' &&
    fileExt != 'jpg' &&
    fileExt != 'jpeg' &&
    fileExt != 'gif'
  ) {
    return callback(
      new HttpException('Only image files allowed', HttpStatus.BAD_REQUEST),
    );
  }
  return callback(null, true);
};

export const textFileFilter = (req, file: Express.Multer.File, callback) => {
  // const validExtension = /\.txt$/i.test(file.originalname);
  if (!/\.txt$/i.test(file.originalname)) {
    return callback(
      new HttpException('Only text files allowed', HttpStatus.BAD_REQUEST),
    );
  }
  return callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16));
  callback(null, `${name}-${randomName}-${fileExtName}`);
};

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

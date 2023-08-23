import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { UploadModule } from './upload/upload.module';
import { MailModule } from './mail/mail.module';
import { CustomRedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    CategoryModule,
    UserModule,
    AuthModule,
    DatabaseModule,
    HealthModule,
    UploadModule,
    MailModule,
    CustomRedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

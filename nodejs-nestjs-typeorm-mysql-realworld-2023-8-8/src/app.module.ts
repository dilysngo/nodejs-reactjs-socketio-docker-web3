import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule
  ],
  controllers: [
    AppController
  ],
  providers: [AppService]
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}

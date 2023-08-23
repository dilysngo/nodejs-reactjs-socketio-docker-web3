import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { DatabaseModule } from 'src/database/database.module';
import { HealthController } from './health.controller';
import { HttpModule } from '@nestjs/axios';
import { RedisHealthModule } from '@liaoliaots/nestjs-redis/health';

@Module({
  imports: [DatabaseModule, TerminusModule, HttpModule, RedisHealthModule],
  controllers: [HealthController],
})
export class HealthModule {}

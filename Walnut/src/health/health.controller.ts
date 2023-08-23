import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { RedisHealthIndicator } from '@liaoliaots/nestjs-redis/health';
import { Redis } from 'ioredis';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly database: TypeOrmHealthIndicator,
    private readonly http: HttpHealthIndicator,
    private readonly redis: RedisHealthIndicator,
    @InjectRedis() private readonly defaultRedisClient: Redis,
  ) {}
  @Get()
  @HealthCheck()
  readiness() {
    return this.health.check([
      async () =>
        this.database.pingCheck('Database-Container', { timeout: 300 }),
      () =>
        this.http.pingCheck('Frontend-Container', 'https://www.google.com/'),
      async () =>
        this.redis.checkHealth('Redis-Container', {
          client: this.defaultRedisClient,
        }),
    ]);
  }
}

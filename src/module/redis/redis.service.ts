import { Injectable } from '@nestjs/common';
import {
  RedisService as NestjsRedisService,
  DEFAULT_REDIS,
} from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redis: Redis | null;

  constructor(private readonly redisService: NestjsRedisService) {
    this.redis = this.redisService.getOrThrow();
  }

  async set(key: string, val: any, ttl?: number): Promise<'OK' | null> {
    const data = JSON.stringify(val);
    if (!ttl) return await this.redis.set(key, data);
    return await this.redis.set(key, data, 'PX', ttl);
  }
  async get(key: string): Promise<any> {
    if (!key || key === '*') return null;
    const res = await this.redis.get(key);
    return JSON.parse(res);
  }
}

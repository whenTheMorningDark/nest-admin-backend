import { RedisService as NestjsRedisService } from '@liaoliaots/nestjs-redis';
export declare class RedisService {
    private readonly redisService;
    private readonly redis;
    constructor(redisService: NestjsRedisService);
    set(key: string, val: any, ttl?: number): Promise<'OK' | null>;
    get(key: string): Promise<any>;
}

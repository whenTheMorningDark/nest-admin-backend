import { DynamicModule } from '@nestjs/common';
import { RedisModuleAsyncOptions } from '@liaoliaots/nestjs-redis';
export declare class RedisModule {
    static forRoot(options: RedisModuleAsyncOptions, isGlobal?: boolean): DynamicModule;
    static forRootAsync(options: RedisModuleAsyncOptions, isGlobal?: boolean): DynamicModule;
}

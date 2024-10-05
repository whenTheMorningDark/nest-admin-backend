import { Repository } from 'typeorm';
import { RedisService } from 'src/module/redis/redis.service';
import { SysConfigEntity } from './entities/config.entity';
export declare class ConfigService {
    private readonly sysConfigEntityRep;
    private readonly redisService;
    constructor(sysConfigEntityRep: Repository<SysConfigEntity>, redisService: RedisService);
    getConfigValue(configKey: string): Promise<any>;
}

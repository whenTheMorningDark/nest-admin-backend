import { Injectable } from '@nestjs/common';
import { CacheEnum } from 'src/common/enum/index';
import { Repository } from 'typeorm';
import { RedisService } from 'src/module/redis/redis.service';
import { InjectRepository } from '@nestjs/typeorm';
import { SysConfigEntity } from './entities/config.entity';

@Injectable()
export class ConfigService {
  constructor(
    @InjectRepository(SysConfigEntity)
    private readonly sysConfigEntityRep: Repository<SysConfigEntity>,
    private readonly redisService: RedisService
  ) {

  }
  async getConfigValue(configKey: string) {
    const cacheData = await this.redisService.get(`${CacheEnum.SYS_CONFIG_KEY}${configKey}`);
    if (cacheData) {
      // 如果缓存中存在配置信息，则直接返回
      return cacheData;
    }
    // 从数据库中查询配置信息
    const data = await this.sysConfigEntityRep.findOne({
      where: {
        configKey: configKey,
      },
    });
    await this.redisService.set(`${CacheEnum.SYS_CONFIG_KEY}${configKey}`, data.configValue);
    return data.configValue;
  }
}

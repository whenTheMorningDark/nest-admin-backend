import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LoginDto, ClientInfoDto } from 'src/module/main/dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entityes/sys-user.entity';
import { ConfigService } from '../config/config.service';
import { RedisService } from '../redis/redis.service';
import { CacheEnum } from 'src/common/enum/index';
import { ResultData } from 'src/common/utils/result';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService
  ) { }
  async login(user: LoginDto, clientInfo: ClientInfoDto) {
    const enable = await this.configService.getConfigValue('sys.account.captchaEnabled');
    const captchaEnabled: boolean = enable === 'true';

    if (captchaEnabled) {
      const code = await this.redisService.get(CacheEnum.CAPTCHA_CODE_KEY + user.uuid);
      if (!code) {
        return ResultData.fail(500, `验证码已过期`);
      }
      if (code !== user.code) {
        return ResultData.fail(500, `验证码错误`);
      }
    }

    const data = await this.userRepo.findOne({
      where: {
        userName: user.username,
      }
    });
    // return data;
    return ResultData.ok(data, '登录成功',);
  }
}

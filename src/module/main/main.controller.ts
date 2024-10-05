import { Body, Controller, Post, HttpCode, Get } from '@nestjs/common';
import { LoginDto } from './dto';
import { MainService } from './main.service';
import { ConfigService } from 'src/module/config/config.service';
import { GenerateUUID } from 'src/common/utils/index';
import { RedisService } from 'src/module/redis/redis.service';
import { CacheEnum } from 'src/common/enum/index';
@Controller('/')
export class MainController {
  constructor(
    private readonly mainService: MainService,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService
  ) { }
  @Post("/login")
  @HttpCode(200)
  login(@Body() user: LoginDto) {
    return this.mainService.login(user);
  }
  @Get("/captchaImage")
  async captchaImage() {
    const enable = await this.configService.getConfigValue('sys.account.captchaEnabled');
    const captchaEnabled: boolean = enable === 'true';
    const data = {
      captchaEnabled,
      img: '',
      uuid: '',
    };
    try {
      if (captchaEnabled) {
        const captchaInfo = await this.mainService.createCaptcha();
        data.img = captchaInfo.data;
        data.uuid = GenerateUUID();
        await this.redisService.set(CacheEnum.CAPTCHA_CODE_KEY + data.uuid, captchaInfo.text.toLowerCase(), 1000 * 60 * 5);
        return {
          data,
          message: "获取验证码成功"
        };
      }
    } catch (e) {
      return {
        data: null,
        message: "获取验证码失败"
      }
    }
    // return configData
  }
}

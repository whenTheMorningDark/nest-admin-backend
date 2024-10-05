import { LoginDto } from './dto';
import { MainService } from './main.service';
import { ConfigService } from 'src/module/config/config.service';
import { RedisService } from 'src/module/redis/redis.service';
export declare class MainController {
    private readonly mainService;
    private readonly configService;
    private readonly redisService;
    constructor(mainService: MainService, configService: ConfigService, redisService: RedisService);
    login(user: LoginDto): Promise<import("../user/entityes/sys-user.entity").UserEntity>;
    captchaImage(): Promise<{
        data: {
            captchaEnabled: boolean;
            img: string;
            uuid: string;
        };
        message: string;
    }>;
}

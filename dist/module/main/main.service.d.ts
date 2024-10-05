import { LoginDto } from './dto';
import { UserService } from '../user/user.service';
export declare class MainService {
    private readonly userService;
    constructor(userService: UserService);
    login(user: LoginDto): Promise<import("../user/entityes/sys-user.entity").UserEntity>;
    createCaptcha(): Promise<import("svg-captcha").CaptchaObj>;
}

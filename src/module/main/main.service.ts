import { Injectable } from '@nestjs/common';
import { LoginDto, ClientInfoDto } from './dto';
import { UserService } from '../user/user.service';
import { createMath } from 'src/common/utils/captcha';
@Injectable()
export class MainService {
  constructor(private readonly userService: UserService) { }
  async login(user: LoginDto, clientInfo: ClientInfoDto) {
    const loginLog = {
      ...clientInfo,
      userName: user.username,
      status: '0',
      msg: '',
    };
    const loginRes = await this.userService.login(user, loginLog);
    return loginRes;
  }
  async createCaptcha() {
    return createMath()
  }

}

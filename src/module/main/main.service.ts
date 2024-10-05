import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto';
import { UserService } from '../user/user.service';
import { createMath } from 'src/common/utils/captcha';
@Injectable()
export class MainService {
  constructor(private readonly userService: UserService) { }
  async login(user: LoginDto) {
    const loginRes = await this.userService.login(user);
    return loginRes;
  }
  async createCaptcha() {
    return createMath()
  }

}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  singIn(username: string, password: string) {
    return `This action returns a #${username} user, with password: ${password}`;
  }
  singUp(username: string, password: string) {
    return 'This action returns all cats';
  }
}
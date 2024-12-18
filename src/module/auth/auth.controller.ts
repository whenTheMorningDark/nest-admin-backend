/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  singIn(@Body() dto: any) {
    return this.authService.singIn(dto.username, dto.password);
  }
  @Post('signup')
  singUp(@Body() dto: any) {
    return this.authService.signUp(dto.username, dto.password);
  }
}

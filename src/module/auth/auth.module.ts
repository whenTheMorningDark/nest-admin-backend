import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthStrategy } from './auth.strategy';
import { PassportModule } from '@nestjs/passport';
import { RedisModule } from 'src/module/redis/redis.module';
@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), RedisModule],
  providers: [AuthService, AuthStrategy],
  controllers: [AuthController]
})
export class AuthModule { }

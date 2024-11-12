import { Module } from '@nestjs/common';
import { MainService } from './main.service';
import { MainController } from './main.controller';
import { UserModule } from 'src/module/user/user.module';
import { ConfigModule } from 'src/module/config/config.module';
import { RedisModule } from 'src/module/redis/redis.module';
@Module({
  imports: [UserModule, ConfigModule, RedisModule],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule {}

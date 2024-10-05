import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { RedisModule } from 'src/module/redis/redis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SysConfigEntity } from './entities/config.entity';
@Module({
  imports: [RedisModule, TypeOrmModule.forFeature([SysConfigEntity])],
  providers: [ConfigService],
  controllers: [ConfigController],
  exports: [ConfigService],
})
export class ConfigModule { }

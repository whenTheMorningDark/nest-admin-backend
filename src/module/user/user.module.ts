import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entityes/sys-user.entity';
import { ConfigModule } from 'src/module/config/config.module';
import { RedisModule } from 'src/module/redis/redis.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    ConfigModule,
    RedisModule
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule { }

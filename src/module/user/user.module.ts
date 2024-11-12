import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entityes/sys-user.entity';
import { ConfigModule } from 'src/module/config/config.module';
import { ConfigModule as JWTConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from 'src/module/redis/redis.module';
import { SysUserWithRoleEntity } from './entityes/user-role.entity';
import { RoleModule } from 'src/module/role/role.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
      imports: [
    TypeOrmModule.forFeature([UserEntity, SysUserWithRoleEntity]),
    ConfigModule,
    RedisModule,
    RoleModule,
    JwtModule.registerAsync({
      imports: [JWTConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get('jwt.secretkey'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthModule } from './module/auth/auth.module';
import { ConfigModule as nestConfigModule, ConfigService } from '@nestjs/config';
import { RedisClientOptions } from '@liaoliaots/nestjs-redis';
import { UserModule } from './module/user/user.module';
import { MainModule } from './module/main/main.module';
import { ConfigModule } from './module/config/config.module';
import { RedisModule } from './module/redis/redis.module';
import { RoleModule } from './module/role/role.module';
import configuration from './common/config/index';
@Module({
  imports: [
    // 配置模块
    nestConfigModule.forRoot({
      cache: true,
      load: [configuration],
      isGlobal: true,
    }),
    // 数据库
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          entities: [`${__dirname}/**/*.entity{.ts,.js}`],
          autoLoadEntities: true,
          keepConnectionAlive: true,
          timezone: '+08:00',
          ...config.get('db.mysql'),
        } as TypeOrmModuleOptions;
      },
    }),
    RedisModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
          return {
            closeClient: true,
            readyLog: true,
            errorLog: true,
            config: config.get<RedisClientOptions>('redis'),
          };
        },
      },
      true,
    ),
    AuthModule,
    UserModule,
    MainModule,
    ConfigModule,
    RoleModule,
  ],
  providers: [],
})
export class AppModule { }

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./module/auth/auth.module");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./module/user/user.module");
const main_module_1 = require("./module/main/main.module");
const config_module_1 = require("./module/config/config.module");
const redis_module_1 = require("./module/redis/redis.module");
const index_1 = require("./common/config/index");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                cache: true,
                load: [index_1.default],
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        type: 'mysql',
                        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
                        autoLoadEntities: true,
                        keepConnectionAlive: true,
                        timezone: '+08:00',
                        ...config.get('db.mysql'),
                    };
                },
            }),
            redis_module_1.RedisModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        closeClient: true,
                        readyLog: true,
                        errorLog: true,
                        config: config.get('redis'),
                    };
                },
            }, true),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            main_module_1.MainModule,
            config_module_1.ConfigModule,
        ],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
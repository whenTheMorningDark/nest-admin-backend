"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const index_1 = require("../../common/enum/index");
const typeorm_1 = require("typeorm");
const redis_service_1 = require("../redis/redis.service");
const typeorm_2 = require("@nestjs/typeorm");
const config_entity_1 = require("./entities/config.entity");
let ConfigService = class ConfigService {
    constructor(sysConfigEntityRep, redisService) {
        this.sysConfigEntityRep = sysConfigEntityRep;
        this.redisService = redisService;
    }
    async getConfigValue(configKey) {
        const cacheData = await this.redisService.get(`${index_1.CacheEnum.SYS_CONFIG_KEY}${configKey}`);
        if (cacheData) {
            return cacheData;
        }
        const data = await this.sysConfigEntityRep.findOne({
            where: {
                configKey: configKey,
            },
        });
        await this.redisService.set(`${index_1.CacheEnum.SYS_CONFIG_KEY}${configKey}`, data.configValue);
        return data.configValue;
    }
};
exports.ConfigService = ConfigService;
exports.ConfigService = ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(config_entity_1.SysConfigEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        redis_service_1.RedisService])
], ConfigService);
//# sourceMappingURL=config.service.js.map
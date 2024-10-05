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
exports.MainController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const main_service_1 = require("./main.service");
const config_service_1 = require("../config/config.service");
const index_1 = require("../../common/utils/index");
const redis_service_1 = require("../redis/redis.service");
const index_2 = require("../../common/enum/index");
let MainController = class MainController {
    constructor(mainService, configService, redisService) {
        this.mainService = mainService;
        this.configService = configService;
        this.redisService = redisService;
    }
    login(user) {
        return this.mainService.login(user);
    }
    async captchaImage() {
        const enable = await this.configService.getConfigValue('sys.account.captchaEnabled');
        const captchaEnabled = enable === 'true';
        const data = {
            captchaEnabled,
            img: '',
            uuid: '',
        };
        try {
            if (captchaEnabled) {
                const captchaInfo = await this.mainService.createCaptcha();
                data.img = captchaInfo.data;
                data.uuid = (0, index_1.GenerateUUID)();
                await this.redisService.set(index_2.CacheEnum.CAPTCHA_CODE_KEY + data.uuid, captchaInfo.text.toLowerCase(), 1000 * 60 * 5);
                return {
                    data,
                    message: "获取验证码成功"
                };
            }
        }
        catch (e) {
            return {
                data: null,
                message: "获取验证码失败"
            };
        }
    }
};
exports.MainController = MainController;
__decorate([
    (0, common_1.Post)("/login"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], MainController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("/captchaImage"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MainController.prototype, "captchaImage", null);
exports.MainController = MainController = __decorate([
    (0, common_1.Controller)('/'),
    __metadata("design:paramtypes", [main_service_1.MainService,
        config_service_1.ConfigService,
        redis_service_1.RedisService])
], MainController);
//# sourceMappingURL=main.controller.js.map
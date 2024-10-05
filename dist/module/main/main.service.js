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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const captcha_1 = require("../../common/utils/captcha");
let MainService = class MainService {
    constructor(userService) {
        this.userService = userService;
    }
    async login(user) {
        const loginRes = await this.userService.login(user);
        return loginRes;
    }
    async createCaptcha() {
        return (0, captcha_1.createMath)();
    }
};
exports.MainService = MainService;
exports.MainService = MainService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], MainService);
//# sourceMappingURL=main.service.js.map
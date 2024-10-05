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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const base_1 = require("../../../common/entities/base");
let UserEntity = class UserEntity extends base_1.BaseEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'user_id', comment: '用户ID' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'dept_id', default: null, comment: '部门ID' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "deptId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'user_name', length: 30, nullable: false, comment: '用户账号' }),
    __metadata("design:type", String)
], UserEntity.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'nick_name', length: 30, nullable: false, comment: '用户昵称' }),
    __metadata("design:type", String)
], UserEntity.prototype, "nickName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'user_type', length: 2, default: '00', comment: '用户类型' }),
    __metadata("design:type", String)
], UserEntity.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'email', length: 50, default: '', comment: '邮箱' }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'phonenumber', default: '', length: 11, comment: '手机号码' }),
    __metadata("design:type", String)
], UserEntity.prototype, "phonenumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', name: 'sex', default: '0', length: 1, comment: '性别' }),
    __metadata("design:type", String)
], UserEntity.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'avatar', default: '', comment: '头像地址' }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: false, default: '', comment: '用户登录密码' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'login_ip', length: 128, default: '', comment: '最后登录IP' }),
    __metadata("design:type", String)
], UserEntity.prototype, "loginIp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', name: 'login_date', comment: '最后登录时间' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "loginDate", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('sys_user', {
        comment: '用户信息表',
    })
], UserEntity);
//# sourceMappingURL=sys-user.entity.js.map
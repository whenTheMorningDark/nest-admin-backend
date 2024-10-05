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
exports.BaseEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let BaseEntity = class BaseEntity {
};
exports.BaseEntity = BaseEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: '状态' }),
    (0, typeorm_1.Column)({ type: 'char', name: 'status', default: '0', length: 1, comment: '状态' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: '删除标志' }),
    (0, typeorm_1.Column)({ type: 'char', name: 'del_flag', default: '0', length: 1, comment: '删除标志' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "delFlag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: '创建者' }),
    (0, typeorm_1.Column)({ type: 'varchar', name: 'create_by', length: 64, default: '', comment: '创建者' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "createBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: '创建时间' }),
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', name: 'create_time', default: null, comment: '创建时间' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: '更新者' }),
    (0, typeorm_1.Column)({ type: 'varchar', name: 'update_by', length: 64, default: '', comment: '更新者' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "updateBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Date, description: '更新时间' }),
    (0, typeorm_1.UpdateDateColumn)({ type: 'datetime', name: 'update_time', default: null, comment: '更新时间' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: '备注' }),
    (0, typeorm_1.Column)({ type: 'varchar', name: 'remark', length: 500, default: null, comment: '备注' }),
    __metadata("design:type", String)
], BaseEntity.prototype, "remark", void 0);
exports.BaseEntity = BaseEntity = __decorate([
    (0, typeorm_1.Entity)()
], BaseEntity);
//# sourceMappingURL=base.js.map
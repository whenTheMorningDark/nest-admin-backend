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
exports.SysConfigEntity = void 0;
const typeorm_1 = require("typeorm");
const base_1 = require("../../../common/entities/base");
let SysConfigEntity = class SysConfigEntity extends base_1.BaseEntity {
};
exports.SysConfigEntity = SysConfigEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'config_id', comment: '参数主键' }),
    __metadata("design:type", Number)
], SysConfigEntity.prototype, "configId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'config_name', length: 100, default: '', comment: '参数名称' }),
    __metadata("design:type", String)
], SysConfigEntity.prototype, "configName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'config_key', length: 100, default: '', comment: '参数键名' }),
    __metadata("design:type", String)
], SysConfigEntity.prototype, "configKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'config_value', length: 500, default: '', comment: '参数键值' }),
    __metadata("design:type", String)
], SysConfigEntity.prototype, "configValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', name: 'config_type', length: 1, default: 'N', comment: '系统内置' }),
    __metadata("design:type", String)
], SysConfigEntity.prototype, "configType", void 0);
exports.SysConfigEntity = SysConfigEntity = __decorate([
    (0, typeorm_1.Entity)('sys_config', {
        comment: '参数配置表',
    })
], SysConfigEntity);
//# sourceMappingURL=config.entity.js.map
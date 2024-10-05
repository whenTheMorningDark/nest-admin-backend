import { BaseEntity } from 'src/common/entities/base';
export declare class SysConfigEntity extends BaseEntity {
    configId: number;
    configName: string;
    configKey: string;
    configValue: string;
    configType: string;
}

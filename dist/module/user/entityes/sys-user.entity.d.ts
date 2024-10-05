import { BaseEntity } from 'src/common/entities/base';
export declare class UserEntity extends BaseEntity {
    userId: number;
    deptId: number;
    userName: string;
    nickName: string;
    userType: string;
    email: string;
    phonenumber: string;
    sex: string;
    avatar: string;
    password: string;
    loginIp: string;
    loginDate: Date;
}

export declare enum StatusEnum {
    STATIC = "0",
    DYNAMIC = "1"
}
export declare class LoginDto {
    code?: string;
    username: string;
    password: string;
    uuid?: string;
}
export declare class RegisterDto extends LoginDto {
}
export declare class ClientInfoDto {
    ipaddr: string;
    userAgent: string;
    browser: string;
    os: string;
    loginLocation: string;
}

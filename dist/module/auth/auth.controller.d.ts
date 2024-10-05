import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    singIn(dto: any): string;
    singUp(dto: any): string;
}

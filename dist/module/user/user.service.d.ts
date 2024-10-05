import { Repository } from 'typeorm';
import { LoginDto } from 'src/module/main/dto';
import { UserEntity } from './entityes/sys-user.entity';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<UserEntity>);
    login(user: LoginDto): Promise<UserEntity>;
}

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LoginDto } from 'src/module/main/dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entityes/sys-user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) { }
  async login(user: LoginDto) {
    const data = await this.userRepo.findOne({
      where: {
        userName: user.username,
      }
    });
    return data;
  }
}

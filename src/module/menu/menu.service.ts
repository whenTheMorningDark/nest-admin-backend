import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysMenuEntity } from './entities/menu.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class MenuService {
  @InjectRepository(SysMenuEntity)
  private readonly sysMenuEntityRep: Repository<SysMenuEntity>
  async findMany(where: FindManyOptions<SysMenuEntity>) {
    return await this.sysMenuEntityRep.find(where);
  }
}

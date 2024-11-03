import { Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SysRoleEntity } from './entities/role.entity';
@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(SysRoleEntity)
    private readonly sysRoleEntityRep: Repository<SysRoleEntity>
  ) { }
  async findRoles(where: FindManyOptions<SysRoleEntity>) {
    return await this.sysRoleEntityRep.find(where);
  }
}

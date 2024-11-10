import { Injectable } from '@nestjs/common';
import { FindManyOptions, Repository, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SysRoleEntity } from './entities/role.entity';
import { SysRoleWithMenuEntity } from './entities/role-width-menu.entity';
import { MenuService } from '../menu/menu.service';
@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(SysRoleEntity)
    private readonly sysRoleEntityRep: Repository<SysRoleEntity>,
    @InjectRepository(SysRoleWithMenuEntity)
    private readonly sysRoleWithMenuEntityRep: Repository<SysRoleWithMenuEntity>,
    private readonly menuService: MenuService,
  ) { }
  async findRoles(where: FindManyOptions<SysRoleEntity>) {
    return await this.sysRoleEntityRep.find(where);
  }
  async getPermissionsByRoleIds(roleIds: string[]) {
    const list = await this.sysRoleWithMenuEntityRep.find({
      where: {
        roleId: In(roleIds),
      },
      select: ['menuId'],
    });
    const menuIds = list.map((item) => item.menuId);
    const permission = await this.menuService.findMany({
      where: { delFlag: '0', status: '0', menuId: In(menuIds) },
    });
    return permission;
  }
}

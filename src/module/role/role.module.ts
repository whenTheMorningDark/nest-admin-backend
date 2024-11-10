import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleService } from './role.service';
import { SysRoleEntity } from './entities/role.entity';
import { SysRoleWithMenuEntity } from './entities/role-width-menu.entity';
import { MenuModule } from '../menu/menu.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([SysRoleEntity, SysRoleWithMenuEntity]),
    MenuModule
  ],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule { }

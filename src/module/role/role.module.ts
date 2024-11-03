import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleService } from './role.service';
import { SysRoleEntity } from './entities/role.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SysRoleEntity])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule { }

import { Injectable } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { LoginDto, ClientInfoDto } from 'src/module/main/dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entityes/sys-user.entity';
import { SysDeptEntity } from '../dept/entities/dept.entity';
import { SysUserWithRoleEntity } from './entityes/user-role.entity';
import { ConfigService } from '../config/config.service';
import { RedisService } from '../redis/redis.service';
import { CacheEnum, DelFlagEnum, StatusEnum } from 'src/common/enum/index';
import { ResultData } from 'src/common/utils/result';
import * as bcrypt from 'bcrypt';
import { Uniq, GenerateUUID } from 'src/common/utils/index';
import { RoleService } from 'src/module/role/role.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
    @InjectRepository(SysUserWithRoleEntity)
    private readonly sysUserWithRoleEntityRep: Repository<SysUserWithRoleEntity>,
    private readonly roleService: RoleService,
    private readonly jwtService: JwtService,
  ) { }
  async login(user: LoginDto, clientInfo: ClientInfoDto) {
    const enable = await this.configService.getConfigValue('sys.account.captchaEnabled');
    const captchaEnabled: boolean = enable === 'true';

    if (captchaEnabled) {
      const code = await this.redisService.get(CacheEnum.CAPTCHA_CODE_KEY + user.uuid);
      if (!code) {
        return ResultData.fail(500, `验证码已过期`);
      }
      if (code !== user.code) {
        return ResultData.fail(500, `验证码错误`);
      }
    }

    const data = await this.userRepo.findOne({
      where: {
        userName: user.username,
      },
      select: ['userId', 'password'],
    });
    if (!(data && bcrypt.compareSync(user.password, data.password))) {
      return ResultData.fail(500, `帐号或密码错误`);
    }

    // 获取用户信息
    const userData = await this.getUserinfo(data.userId);
    if (userData.delFlag === DelFlagEnum.DELETE) {
      return ResultData.fail(500, `您已被禁用，如需正常使用请联系管理员`);
    }
    if (userData.status === StatusEnum.STOP) {
      return ResultData.fail(500, `您已被停用，如需正常使用请联系管理员`);
    }
    await this.updateLoginDate(data.userId)
    const uuid = GenerateUUID();
    const token = this.createToken({ uuid: uuid, userId: userData.userId });

    return ResultData.ok(token, '登录成功',);
  }
  // 生成token
  createToken(payload: { uuid: string; userId: number }): string {
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }
  // 解析token
  parseToken(token: string) {
    try {
      if (!token) return null;
      const payload = this.jwtService.verify(token.replace('Bearer ', ''));
      return payload;
    } catch (error) {
      return null;
    }
  }

  // 更新登录时间
  updateLoginDate(userId: number) {
    this.userRepo.update({
      userId: userId,
    }, {
      loginDate: new Date(),
    });
  }

  // 获取用户信息 用户部门信息 角色 岗位等
  async getUserinfo(userId: number) {
    const entity = this.userRepo.createQueryBuilder("user")
    entity.where({
      userId: userId,
      delFlag: DelFlagEnum.NORMAL
    })
    // 联合查询部门信息
    entity.leftJoinAndMapOne('user.dept', SysDeptEntity, 'dept', 'dept.deptId = user.deptId');
    // 联合查询角色信息
    const roleIds = await this.getRoleIds([userId]);
    const roles = await this.roleService.findRoles({
      where: {
        delFlag: '0',
        roleId: In(roleIds),
      },
    });

    const data: any = await entity.getOne();
    data['roles'] = roles;
    return data;
  }
  async getRoleIds(userIds: Array<number>) {
    const roleList = await this.sysUserWithRoleEntityRep.find({
      where: {
        userId: In(userIds),
      },
      select: ['roleId'],
    });
    const roleIds = roleList.map((item) => item.roleId);
    return Uniq(roleIds);
  }
}

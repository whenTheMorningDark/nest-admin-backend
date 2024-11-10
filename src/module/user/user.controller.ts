import { Controller, Get, Query, Request } from '@nestjs/common';
import { RequirePermission } from 'src/common/decorators/require-premission.decorator';
import { RequireRole } from 'src/common/decorators/require-role.decorator';
import { ResultData } from 'src/common/utils/result';
@Controller('system/user')
export class UserController {
  @RequirePermission('system:user:list')
  @Get('list')
  findAll(@Query() query: any, @Request() req) {
    return ResultData.ok(req.user, '查询成功');
  }
}

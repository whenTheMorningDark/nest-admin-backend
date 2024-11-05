import { Controller, Get, Query, Request } from '@nestjs/common';
import { RequireRole } from 'src/common/decorators/require-role.decorator';
@Controller('system/user')
export class UserController {
  @RequireRole('common')
  @Get('list')
  findAll(@Query() query: any, @Request() req) {
    console.log(req.user, 'ff')
    return 'This action returns all catsasd';
    // const user = req.user.user;
    // return user;
  }
}

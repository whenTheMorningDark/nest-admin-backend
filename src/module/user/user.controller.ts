import { Controller, Get, Query, Request } from '@nestjs/common';
// import { RequirePermission } from 'src/common/decorators/require-premission.decorator';
@Controller('system/user')
export class UserController {

  @Get('list')
  findAll(@Query() query: any, @Request() req) {
    console.log(req.user, 'ff')
    return 'This action returns all catsasd';
    // const user = req.user.user;
    // return user;
  }
}

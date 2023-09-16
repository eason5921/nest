/*
 * @Author: dengpu 1255026858@qq.com
 * @Date: 2023-09-14 22:22:56
 * @LastEditors: dengpu 1255026858@qq.com
 * @LastEditTime: 2023-09-16 20:36:12
 * @FilePath: \nest-shop\src\modules\admin\users\users.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Response,
  Res,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/loging-user.dto';
import ResponseEntity from 'src/config/response';

@Controller('admin/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  async login(@Res() Res, @Body() loginUserDto: LoginUserDto) {
    const res = await this.usersService.login(loginUserDto);
    if (res?.userName) {
      Res.cookie('userName', res.userName);
      Res.send(res);
      return Res;
    } else {
      Res.send(new ResponseEntity('passWord or userName error', false, 'fail'));
      return Res;
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

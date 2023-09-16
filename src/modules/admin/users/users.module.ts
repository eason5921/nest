/*
 * @Author: dengpu 1255026858@qq.com
 * @Date: 2023-09-14 22:22:56
 * @LastEditors: dengpu 1255026858@qq.com
 * @LastEditTime: 2023-09-14 22:29:08
 * @FilePath: \nest-shop\src\modules\admin\users\users.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

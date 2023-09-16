/*
 * @Author: dengpu 1255026858@qq.com
 * @Date: 2023-09-13 22:41:50
 * @LastEditors: dengpu 1255026858@qq.com
 * @LastEditTime: 2023-09-14 22:33:47
 * @FilePath: \nest-shop\src\app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/db.config';
import { GoodsModule } from './modules/admin/goods/goods.module';
import { UsersModule } from './modules/admin/users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig as any),
    GoodsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

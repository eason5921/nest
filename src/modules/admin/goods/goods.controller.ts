/*
 * @Author: dengpu 1255026858@qq.com
 * @Date: 2023-09-13 22:43:45
 * @LastEditors: dengpu 1255026858@qq.com
 * @LastEditTime: 2023-09-16 22:05:27
 * @FilePath: \nest-shop\src\modules\admin\goods\goods.controller.ts
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
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { MyInterceptor } from 'src/common/MyInterceptor';
import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';

import { Request } from 'express';
@Controller('admin/goods')
@UseInterceptors(MyInterceptor)
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Post('/addGoods')
  create(@Req() request: Request) {
    return this.goodsService.create(request);
  }

  @Patch('update')
  update(@Req() request: Request) {
    return this.goodsService.update(request);
  }

  @Delete('/delete')
  remove(@Req() request: Request) {
    const id = request.query.id;
    console.log(id);
    return this.goodsService.remove(+id);
  }

  @Get('/getList')
  findAll() {
    return this.goodsService.findAll();
  }

  @Get('/detail')
  findOne(@Req() request: Request) {
    const id = request.query.id;
    return this.goodsService.findOne(+id);
  }
}

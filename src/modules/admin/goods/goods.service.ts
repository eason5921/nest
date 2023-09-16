/*
 * @Author: dengpu 1255026858@qq.com
 * @Date: 2023-09-13 22:43:45
 * @LastEditors: dengpu 1255026858@qq.com
 * @LastEditTime: 2023-09-16 23:09:14
 * @FilePath: \nest-shop\src\modules\admin\goods\goods.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { HttpException, Injectable, Req } from '@nestjs/common';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { Goods } from './entities/goods.entity';
import ResponseEntity from 'src/config/response';
import { Request } from 'express';
import { parse } from 'cookie';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Goods)
    private readonly goods: Repository<Goods | UpdateGoodDto>,
  ) {}

  async create(@Req() request: Request) {
    try {
      const createGoodDto: CreateGoodDto = request.body;
      const cookie = parse(request.headers.cookie);
      createGoodDto.creator = cookie.userName;
      const res = await this.goods.save(createGoodDto);
      if (res?.id) return new ResponseEntity<Goods>(res?.id, true, 'ok');
    } catch (e) {
      const error = new HttpException(e, 400);
      return new ResponseEntity<HttpException>(error, false, 'fail');
    }
  }

  async update(@Req() request: Request) {
    console.log(request.body);
    try {
      const updateGoodDto: UpdateGoodDto = request.body;
      const cookie = parse(request.headers.cookie);
      updateGoodDto.modifier = cookie.userName;
      const res = await this.goods.update(updateGoodDto.id, updateGoodDto);
      if (res?.affected) return new ResponseEntity<Goods>(null, true, 'ok');
      return;
    } catch (e) {
      const error = new HttpException(e, 400);
      return new ResponseEntity<HttpException>(error, false, 'fail');
    }
  }

  async remove(id: number) {
    try {
      const res = await this.goods.delete(id);
      if (res?.affected) return new ResponseEntity<Goods>(null, true, 'ok');
    } catch (e) {
      const error = new HttpException(e, 400);
      return new ResponseEntity<HttpException>(error, false, 'fail');
    }
  }

  async findAll() {
    try {
      const res = await this.goods.find();
      return new ResponseEntity<Goods>(res as Goods[], true, 'ok');
    } catch (e) {
      const error = new HttpException(e, 400);
      return new ResponseEntity<HttpException>(error, false, 'fail');
    }
  }

  async findOne(id: number) {
    try {
      const res = await this.goods.findOne({
        where: {
          id,
        },
      });
      if (res.id) {
        return new ResponseEntity<Goods>([res as Goods], true, 'ok');
      }
    } catch (e) {
      const error = new HttpException(e, 400);
      return new ResponseEntity<HttpException>(error, false, 'fail');
    }
  }
}

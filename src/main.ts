/*
 * @Author: dengpu 1255026858@qq.com
 * @Date: 2023-09-13 22:41:50
 * @LastEditors: dengpu 1255026858@qq.com
 * @LastEditTime: 2023-09-16 23:00:42
 * @FilePath: \nest-shop\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://127.0.0.1:3000',
    methods: 'GET,PUT,POST',
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Content-Range,X-Content-Range',
    credentials: true,
  });
  app.use(cookieParser('zdcdq'));
  await app.listen(9527);
}
bootstrap();

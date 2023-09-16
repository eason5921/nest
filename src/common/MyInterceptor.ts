/*
 * @Author: dengpu 1255026858@qq.com
 * @Date: 2023-09-16 21:22:28
 * @LastEditors: dengpu 1255026858@qq.com
 * @LastEditTime: 2023-09-16 22:57:29
 * @FilePath: \nest-shop\src\common\MyInterceptor.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 在请求进入控制器之前执行逻辑
    const request = context.switchToHttp().getRequest();
    console.log(request.cookies)
    if (!request.cookies.userName) {
      throw new HttpException('Invalid cookie', HttpStatus.UNAUTHORIZED);
    }

    return next.handle();
  }
}

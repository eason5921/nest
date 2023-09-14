import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/db.config';
import { GoodsModule } from './modules/admin/goods/goods.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig as any),
    GoodsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

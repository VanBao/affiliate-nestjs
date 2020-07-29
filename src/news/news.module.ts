import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {NewsEntity} from 'src/entities/news.entity';
@Module({
  imports:[TypeOrmModule.forFeature([
    NewsEntity
  ])],
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}

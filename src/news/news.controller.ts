import { NewsEntity } from 'src/entities/news.entity';
import { ListNews, CreateNewsDTO } from './../model/news.dto';
import { NewsService } from './news.service';
import { Controller, Get, Query, Post, Body, ValidationPipe } from '@nestjs/common';
@Controller('news')
export class NewsController {
    constructor(private newsService:NewsService){}

    @Get()
    async listNews(@Query() query: ListNews): Promise<NewsEntity[]>{
        let listNews = this.newsService.listNews(query);
        return listNews;
    }
    @Post()
    async create(@Body(ValidationPipe) createNewsDTO:CreateNewsDTO):Promise<any>{
        //this.newsService.createNews(createNewsDTO);
        return this.newsService.createNews(createNewsDTO);;
    }
}

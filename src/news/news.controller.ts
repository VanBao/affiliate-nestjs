import { UpdateNewsDTO } from './../dto/news.dto';
import { NewsEntity } from '../entities/news.entity';
import { ListNewsDTO, CreateNewsDTO } from '../dto/news.dto';
import { NewsService } from './news.service';
import { Controller, Get, Query, Post, Body, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
@Controller('news')
export class NewsController {
    constructor(private newsService:NewsService){}
    @Get('/list')
    async listNews(@Query() query: ListNewsDTO): Promise<NewsEntity[]>{
        let listNews = await this.newsService.listNews(query);
        return listNews;
    }
    @Post('/create')
    async create(@Body() createNewsDTO: CreateNewsDTO):Promise<any>{
        let result = await this.newsService.createNews(createNewsDTO);
        return result;
    }
    @Put('/update/:id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateNewsDTO: UpdateNewsDTO): Promise<any>{
        let result = await this.newsService.updateNews(id, updateNewsDTO);
        return {result};
    }

    @Delete('/delete/:id')
    async delete(@Param('id', ParseIntPipe) id: number):Promise<any>{
        let result = await this.newsService.deleteNews(id);
        return {result};
    }
}

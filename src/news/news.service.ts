import { ListNews, CreateNewsDTO } from './../model/news.dto';
import { NewsEntity } from './../entities/news.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity) private newsRepo: Repository<NewsEntity>
    ){}

    async listNews(query: ListNews){
        let listNews = this.newsRepo.find({
            where: {}
        });
        return listNews;
    }

    async createNews(dataToCreateNews: CreateNewsDTO): Promise<any>{
        return this.newsRepo.create(dataToCreateNews);
    }
}

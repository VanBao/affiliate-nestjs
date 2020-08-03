import { ListNewsDTO, CreateNewsDTO, UpdateNewsDTO } from '../dto/news.dto';
import { NewsEntity } from './../entities/news.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity) private newsRepo: Repository<NewsEntity>
    ){}

    async listNews(query: ListNewsDTO){
        let listNews = this.newsRepo.find();
        return listNews;
    }

    async createNews(dataToCreateNews: CreateNewsDTO): Promise<any>{
        let result = await this.newsRepo.create(dataToCreateNews).save();
        return result;
    }

    async updateNews(id: number, dataToUpdateNews: UpdateNewsDTO): Promise<any>{
        // let result = await this.newsRepo.update(id, dataToUpdateNews);
        // return result;

        let currNews = await this.newsRepo.findOne(id);
        if(dataToUpdateNews.category) currNews.category = dataToUpdateNews.category;
        if(dataToUpdateNews.title) currNews.title = dataToUpdateNews.title;
        if(dataToUpdateNews.image) currNews.image = dataToUpdateNews.image;
        if(dataToUpdateNews.content) currNews.content = dataToUpdateNews.content;
        if(dataToUpdateNews.hot) currNews.hot = dataToUpdateNews.hot;
        if(dataToUpdateNews.status) currNews.status = dataToUpdateNews.status;
        let result = await this.newsRepo.save(currNews);
        return result;
    }

    async deleteNews(id: number): Promise<any>{
        let result = await this.newsRepo.delete(id);
        return result;
    }
}

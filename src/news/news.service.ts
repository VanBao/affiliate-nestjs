import { NewsEntity } from './../entities/news.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity) private newsRepo: Repository<NewsEntity>
    ){}

}

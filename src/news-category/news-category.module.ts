import { Module } from '@nestjs/common';
import { NewsCategoryController } from './news-category.controller';
import { NewsCategoryService } from './news-category.service';

@Module({
  controllers: [NewsCategoryController],
  providers: [NewsCategoryService]
})
export class NewsCategoryModule {}

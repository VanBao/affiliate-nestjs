import { Test, TestingModule } from '@nestjs/testing';
import { NewsCategoryController } from './news-category.controller';

describe('NewsCategory Controller', () => {
  let controller: NewsCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsCategoryController],
    }).compile();

    controller = module.get<NewsCategoryController>(NewsCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

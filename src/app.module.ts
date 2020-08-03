import { CheckLoginMiddleware } from './middlewares/CheckLogin';
import { DatabaseConnectionService } from './database-connection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, MiddlewareConsumer, RequestMethod, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { NewsCategoryModule } from './news-category/news-category.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService
    }),
    NewsModule,
    NewsCategoryModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckLoginMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL});
  }
}

import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './../product/product.module';
import { AuthModule } from '../auth/auth.module';
import { ReviewModule } from '../review/review.module';
import config from '../ormconfig';
import { AuchMiddlewares } from '../auth/middlewares/auth.middlewares';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, ReviewModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuchMiddlewares).forRoutes({
      path: "*",
      method: RequestMethod.ALL
    })
  }
}

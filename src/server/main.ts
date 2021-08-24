import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

let port = process.env.PORT || 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(port, () => console.log('app listen port ' + port));
}
bootstrap();

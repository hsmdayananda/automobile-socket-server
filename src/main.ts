import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import 'dotenv/config'



const port = process.env.PORT || 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  app.enableCors({
    origin: [
      'http://localhost:4001', // bull-service
    ],
  });
  Logger.log('Configured port ', process.env.PORT)
  Logger.log(`Server Started and running on http://localhost:${port}`)
}

bootstrap();

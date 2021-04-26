import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import 'dotenv/config'
//import { WsAdapter } from '@nestjs/platform-ws'


const port = process.env.PORT || 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  app.enableCors({
    origin: [
      'http://localhost:4001', // bull-service
    ],
    allowedHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers']
  });
  //app.useWebSocketAdapter(new WsAdapter(app));
  Logger.log('Configured port ', process.env.PORT)
  Logger.log(`Server Started and running on http://localhost:${port}`)
}
bootstrap();

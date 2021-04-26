import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('websocket-gateway')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('send-message')
  async downloadFile(@Body() eventObject: any) {
    this.appService.emitMessageToSocketServer(eventObject);

  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

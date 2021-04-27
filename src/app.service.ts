import { Injectable } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

@Injectable()
export class AppService {

  constructor(private eventGateway: EventsGateway) { }

  emitMessageToSocketServer(eventObject: any) {
    console.log(' event obkect ', eventObject)
    // todo: change to emmit dedicated user message
    this.eventGateway.wss.emit(eventObject.event, eventObject.data.message);
  }

  getHello(): string {
    return 'Hello World!';
  }

}

import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageQueueService {
  getHello(): string {
    return 'Hello World!';
  }
}

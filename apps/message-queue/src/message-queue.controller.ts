import { Controller, Get } from '@nestjs/common';
import { MessageQueueService } from './message-queue.service';

@Controller()
export class MessageQueueController {
  constructor(private readonly messageQueueService: MessageQueueService) {}

  @Get()
  getHello(): string {
    return this.messageQueueService.getHello();
  }
}

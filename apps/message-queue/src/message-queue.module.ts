import { Module } from '@nestjs/common';
import { MessageQueueController } from './message-queue.controller';
import { MessageQueueService } from './message-queue.service';

@Module({
  imports: [],
  controllers: [MessageQueueController],
  providers: [MessageQueueService],
})
export class MessageQueueModule {}

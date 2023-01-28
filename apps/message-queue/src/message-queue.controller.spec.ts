import { Test, TestingModule } from '@nestjs/testing';
import { MessageQueueController } from './message-queue.controller';
import { MessageQueueService } from './message-queue.service';

describe('MessageQueueController', () => {
  let messageQueueController: MessageQueueController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessageQueueController],
      providers: [MessageQueueService],
    }).compile();

    messageQueueController = app.get<MessageQueueController>(MessageQueueController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(messageQueueController.getHello()).toBe('Hello World!');
    });
  });
});

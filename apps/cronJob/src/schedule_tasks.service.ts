import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ScheduleTasksService {
  constructor(private readonly logger: Logger) {}

  public async getHello(_message: any): Promise<string> {
    this.logger.log({ hello: 'world' });
    return 'Hello World!';
  }
}

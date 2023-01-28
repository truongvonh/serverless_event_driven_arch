import { Controller, Get } from '@nestjs/common';
import { ScheduleTasksService } from './schedule_tasks.service';

@Controller()
export class ScheduleTasksController {
  constructor(private readonly scheduleTasksService: ScheduleTasksService) {}

  @Get('test')
  getHello(): string {
    return '';
  }
}

import { Logger, Module } from '@nestjs/common';
import { ScheduleTasksController } from './schedule_tasks.controller';
import { ScheduleTasksService } from './schedule_tasks.service';

@Module({
  imports: [],
  controllers: [ScheduleTasksController],
  providers: [ScheduleTasksService, Logger],
})
export class ScheduleTasksModule {}

import { INestApplication, Logger } from '@nestjs/common';
import { Handler, ScheduledEvent } from 'aws-lambda';
import { APP_PORT } from '../../shared/config/apps.port';
import { bootstrapAndGetService } from '../../shared/serverless/event-bootstrap.shared';
import { bootstrap } from '../../shared/serverless/normal-bootstrap.shared';
import { ScheduleTasksModule } from './schedule_tasks.module';
import { ScheduleTasksService } from './schedule_tasks.service';

let cachedServer: INestApplication;

bootstrap(ScheduleTasksModule, APP_PORT.CRON_JOB);

export const handler: Handler = async (event?: ScheduledEvent) => {
  const scheduleModule = await bootstrapAndGetService(
    ScheduleTasksModule,
    cachedServer,
  );

  Logger.debug(event);
  await scheduleModule
    .get(ScheduleTasksService)
    .getHello(`('hello world v3' ${Date()}`);
};

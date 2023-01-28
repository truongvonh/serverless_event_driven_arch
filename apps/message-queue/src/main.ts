import { APP_PORT } from 'apps/shared/config/apps.port';
import { bootstrapForServerLess } from 'apps/shared/serverless/http-bootstrap.shared';
import { bootstrap } from 'apps/shared/serverless/normal-bootstrap.shared';
import { Handler } from 'aws-lambda';
import { MessageQueueModule } from './message-queue.module';

bootstrap(MessageQueueModule, APP_PORT.QUEUE);

let cachedServer: Handler;
bootstrapForServerLess(MessageQueueModule, cachedServer);

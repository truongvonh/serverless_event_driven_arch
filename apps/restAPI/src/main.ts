import { Callback, Context, Handler } from 'aws-lambda';
import { APP_PORT } from '../../shared/config/apps.port';
import { bootstrapForServerLess } from '../../shared/serverless/http-bootstrap.shared';
import { bootstrap } from '../../shared/serverless/normal-bootstrap.shared';
import { AppModule } from './app.module';

let server: Handler;

bootstrap(AppModule, APP_PORT.REST_API);

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  return (await bootstrapForServerLess(AppModule, server))(
    event,
    context,
    callback,
  );
};

import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'aws-lambda';
import Module from 'module';

export async function bootstrapForServerLess(
  bootstrapModule: any | Module,
  cachedServer: Handler,
): Promise<Handler> {
  if (cachedServer) return cachedServer;

  const app = await NestFactory.create(bootstrapModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

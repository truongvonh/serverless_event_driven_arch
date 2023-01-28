import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import Module from 'module';

export const bootstrapWithoutServerless = async (
  module: any | Module,
  port: number,
) => {
  const app = await NestFactory.create(module);
  await app.init();
  await app.listen(port);
};

export const bootstrap = (module: any | Module, port: number) => {
  if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return Logger.debug('bootstrap without serverless');
  }

  return bootstrapWithoutServerless(module, port);
};

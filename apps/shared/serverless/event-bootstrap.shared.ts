import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import Module from 'module';

export async function bootstrapAndGetService(
  module: any | Module,
  cachedServer: INestApplication,
) {
  if (cachedServer) return cachedServer;

  const nestApp = await NestFactory.create(module);
  await nestApp.init();

  cachedServer = nestApp;
  return cachedServer;
}

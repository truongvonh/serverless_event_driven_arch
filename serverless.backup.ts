/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { AWS } from '@serverless/typescript';
import customize from './serverless/config';
import functions from './serverless/functions';

const serverlessConfiguration: AWS = {
  service: 'aws-nodejs-typescript',
  frameworkVersion: '*',
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    memorySize: 512,
    region: 'ap-southeast-1',
    stage: "${opt:stage, 'dev'}",
  },
  custom: customize,
  // @ts-ignore
  plugins: '${self:custom.plugins.${self:provider.stage}}',
  functions: functions,
};

module.exports = serverlessConfiguration;

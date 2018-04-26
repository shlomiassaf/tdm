import '@tdm/core';
export { ServiceMockerServer, ServerBase } from './service-mocker-server/index';
export * from './core';
export { HttpError, HttpErrorConfig } from './http-error';

import { initMetadata } from './init-metadata';
initMetadata();

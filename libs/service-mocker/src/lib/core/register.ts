import { MockerRequest, MockerResponse } from 'service-mocker/server';
import {
  stringify,
  isFunction,
  targetStore,
  TargetMetadata,
  MapExt
} from '@tdm/core/tdm';

import { HttpError } from '../http-error';
import { createHandlerFromController } from './request-handler';
import { ServerMetadata, ServiceMockControllerMetadata } from './metadata';
import { ServiceMockerServer } from '../service-mocker-server';

export function registerControllers(serverMeta: ServerMetadata, serviceMockerServer: ServiceMockerServer): void {
  const allMode = serverMeta.controllers === 'all';

  const reg = (t: TargetMetadata) => {
    const m: any = t.model();
    if ( m instanceof ServiceMockControllerMetadata ) {
      registerMethods(m, serviceMockerServer);
    } else if (!allMode) {
      throw new Error(`"${stringify(t.target)}" is not a controller in "${stringify(serverMeta.target)}"`);
    }
  };

  if ( allMode ) {
    targetStore.getAllModels().forEach(reg);
  } else {
    const controllers = Array.isArray(serverMeta.controllers)
      ? serverMeta.controllers
      : isFunction(serverMeta.controllers) ? serverMeta.controllers() : null
    ;
    if ( !controllers ) {
      throw new Error(`@Server() class "${stringify(serverMeta.target)}" has no controllers not set.`);
    }
    for ( let c of controllers ) {
      const t = targetStore.getTargetMeta(c);
      if ( t ) {
        reg(t);
      }
    }
  }
}

export function registerMethods(ctrl: ServiceMockControllerMetadata , server: ServiceMockerServer): void {
  const subRouter = server.router.scope(ctrl.path);
  const methods = MapExt.asValArray(ctrl.methods);
  for (let m of methods) {
    switch (m.method) {
      case 'get':
      case 'post':
      case 'put':
      case 'patch':
      case 'delete':
      case 'options':
      case 'head':
        subRouter[m.method](m.path, createHandlerFromController(ctrl, m));
        break;
      default:
        break;
    }
  }
  subRouter.all('/*', methodNotAllowed);
}

function methodNotAllowed(req: MockerRequest, res: MockerResponse) {
  return res.status(405).json(HttpError.createKnown(405));
}

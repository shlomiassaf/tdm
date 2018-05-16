import {
  isFunction,
  stringify,
  getBaseClass,
  MapExt,
  MetaClass,
  Constructor,
  targetStore
} from '@tdm/core/tdm';
import { MockerRequest, MockerResponse } from 'service-mocker/server';

import { ServerResponse, ClientProtocol, ClientRequest } from '@tdm/service-mocker/shared';
import { ServiceMockerServer, MessageHandler, ServerBase } from '../../service-mocker-server/index';
import { ServerMetadata, ServerMetadataArgs, FallbackRouteMetadata } from '../metadata';
import { initExtensions } from '../metadata/method-extensions';
import { createHandler, createGlobalMiddlewareHandler } from '../request-handler';
import { registerControllers } from '../register';

const server = MetaClass.decorator(ServerMetadata, true, 'class');

class ContextMessageHandler implements MessageHandler {

  constructor(private instance: any, private handlersMap: Map<string, string>) {
  }

  canHandle(name: keyof ClientProtocol): boolean {
    return this.handlersMap.has(name);
  }

  handle<T extends keyof ClientProtocol>(action: T, data: ClientRequest<T>): Promise<ServerResponse<T>> {
    const methodName = this.handlersMap.get(action);
    return this.instance[ methodName ](data);
  }
}

function isExtendingServerBase(target: Constructor<any>): boolean {
  while ( target ) {
    if ( target === ServerBase ) {
      return true;
    }
    target = <any> getBaseClass(target);
  }
  return false;
}

export function Server(metaArgs: ServerMetadataArgs): <T extends Constructor<ServerBase>>(target: T) => T | void {
  return <T extends Constructor<ServerBase>>(target: T) => {

    if ( !isExtendingServerBase(target) ) {
      throw new Error(`Class ${stringify(target)} decorated with "@Server()" must extend "ServerBase"`);
    }

    class WrappedServiceMockerServer extends (target as T) { // tslint:disable-line:max-classes-per-file
      constructor(...args: any[]) {
        super(...args);
        const serverMeta = targetStore.getMetaFor(target, ServerMetadata, true);
        const serviceMockerServer = ServiceMockerServer
          .create(new ContextMessageHandler(this, serverMeta.messageHandlers), serverMeta.baseUrl);

        registerControllers(serverMeta, serviceMockerServer);

        if (isFunction(this.init)) {
          this.init();
        }

        const fallback = targetStore.getMetaFor(target, FallbackRouteMetadata);
        if (fallback) {
          const fallbackMeta = MapExt.asValArray(fallback)[0];
          if (fallbackMeta) {
            serviceMockerServer.router.scope()
              .all('/*', createGlobalMiddlewareHandler(
                serverMeta.baseUrl,
                createHandler(() => this, fallbackMeta),
                (req: MockerRequest, res: MockerResponse) => res.forward(req.url)
              ));
          }
        }
      }
    }

    targetStore.registerTarget(WrappedServiceMockerServer);
    targetStore.extend(target, WrappedServiceMockerServer);
    target = <any> server(metaArgs)(WrappedServiceMockerServer) || WrappedServiceMockerServer;

    initExtensions(target);

    return target;
  };
}

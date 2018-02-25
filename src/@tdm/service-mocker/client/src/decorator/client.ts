import { stringify, isFunction, MetaClass, Constructor, targetStore, getBaseClass } from '@tdm/core/tdm';

import { ClientResponse, ServerProtocol, ServerRequest } from '../../../shared/src/index';
import { ServiceMockerClient, MessageHandler } from '../client';
import { ClientBase } from '../client-base';
import { ClientMetadata, ClientMetadataArgs } from '../metadata';

const client = MetaClass.decorator(ClientMetadata, true, 'class');

class ContextMessageHandler implements MessageHandler  {

  constructor(private instance: any, private handlersMap: Map<string, string>) { }

  canHandle(name: keyof ServerProtocol): boolean {
    return this.handlersMap.has(name);
  }

  handle<T extends keyof ServerProtocol>(action: T, data: ServerRequest<T>): Promise<ClientResponse<T>> {
    const methodName = this.handlersMap.get(action);
    return this.instance[methodName](data);
  }
}

function isExtendingClientBase(target: Constructor<any>): boolean {
  while (target) {
    if (target === ClientBase) {
      return true;
    }
    target = <any> getBaseClass(target);
  }
  return false;
}

export function Client(metaArgs?: ClientMetadataArgs): <T extends Constructor<ClientBase>>(target: T) => T | void {
  return <T extends Constructor<ClientBase>> (target: T) => {

    if (!isExtendingClientBase(target)) {
      throw new Error(`Class ${stringify(target)} decorated with "@Client()" must extend "ClientBase"`);
    }

    class WrappedClientMockerServer extends (target as T) { // tslint:disable-line:max-classes-per-file
      constructor(...args: any[]) {
        super(...args);
        const clientMeta = targetStore.getMetaFor(target, ClientMetadata, true);
        const serviceMockerClient = ServiceMockerClient
          .create(new ContextMessageHandler(this, clientMeta.messageHandlers), clientMeta.scriptURL);

        Object.defineProperty(this, '_smClient', { value: serviceMockerClient });
        if (isFunction(this.init)) {
          this.init();
        }
      }
    }
    targetStore.registerTarget(WrappedClientMockerServer);
    targetStore.extend(target, WrappedClientMockerServer);
    target = <any> client(metaArgs)(WrappedClientMockerServer) || WrappedClientMockerServer;
    return target;
  };
}

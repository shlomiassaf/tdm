import { MetaClass } from '@tdm/core/tdm';

import { ClientProtocol, ClientRequest, ServerResponse } from '../../../shared/src/index';
import { OnMessageMetadata } from '../metadata';

const onMessage = MetaClass.decorator(OnMessageMetadata, 'method');

export type OnMessageHandler<T extends keyof ClientProtocol>
  = (data: ClientRequest<T>) => Promise<ServerResponse<T>>;

export type OnMessageHandlerDecorator = <T extends keyof ClientProtocol>(
  target: Object,
  propertyKey: T,
  descriptor: TypedPropertyDescriptor<OnMessageHandler<T>>
) => any;

export type OnMessageHandlerDecoratorLoose = <T extends keyof ClientProtocol>(
  target: Object,
  propertyKey: any,
  descriptor: TypedPropertyDescriptor<OnMessageHandler<T>>
) => any;

/**
 * Declares a handler for an incoming message from the client.
 */
export function OnMessage(): OnMessageHandlerDecorator;
export function OnMessage<T extends keyof ClientProtocol>(metaArgs: T): OnMessageHandlerDecoratorLoose;
export function OnMessage<T extends keyof ClientProtocol>(metaArgs?: T): OnMessageHandlerDecorator {
  if (!metaArgs) {
    return (...args: any[]) => (<any> onMessage)(args[1])(args[0], args[1], args[2]);
  } else {
    return onMessage(metaArgs);
  }
}

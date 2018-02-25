import { MetaClass } from '@tdm/core/tdm';
import { ServerProtocol, ClientResponse, ServerRequest } from '../../../shared/src/index';
import { OnMessageMetadata } from '../metadata';

const onMessage = MetaClass.decorator(OnMessageMetadata, 'method');

export type OnMessageHandler<T extends keyof ServerProtocol>
  = (data: ServerRequest<T>) => Promise<ClientResponse<T>>;

export type OnMessageHandlerDecorator = <T extends keyof ServerProtocol>(
  target: Object,
  propertyKey: T,
  descriptor: TypedPropertyDescriptor<OnMessageHandler<T>>
) => any;

export type OnMessageHandlerDecoratorLoose = <T extends keyof ServerProtocol>(
  target: Object,
  propertyKey: any,
  descriptor: TypedPropertyDescriptor<OnMessageHandler<T>>
) => any;

/**
 * Declares a handler for an incoming message from the client.
 */
export function OnMessage(): OnMessageHandlerDecorator;
export function OnMessage<T extends keyof ServerProtocol>(metaArgs: T): OnMessageHandlerDecoratorLoose;
export function OnMessage<T extends keyof ServerProtocol>(metaArgs?: T): any {
  if (!metaArgs) {
    return (...args: any[]) => (<any> onMessage)(args[1])(args[0], args[1], args[2]);
  } else {
    return onMessage(metaArgs);
  }
}

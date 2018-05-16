import {
  stringify,
  isFunction,
  targetStore,
  DecoratorInfo,
  MapExt,
  ModelMetadata,
  MetaClass,
  BaseMetadata,
  Constructor,
  TargetMetadata
} from '@tdm/core/tdm';

import { ServiceMockerServer } from '../../service-mocker-server';
import { ServiceMockControllerMetadata } from '../metadata';
import { OnMessageMetadata } from './on-message';

export interface ServerMetadataArgs {
  /**
   * The controllers to register.
   * Valid values:
   *  - An array of all the classes (controllers).
   *  - A function returning an array of all the classes (controllers).
   *    The context (this) the function is invoked with is the instance of the server.
   *  - Literal string 'all' which means all controllers found will register.
   */
  controllers: ( Array<Constructor<any>> ) | ( () => Array<Constructor<any>> ) | ( 'all' );

  baseUrl?: string;
}

@MetaClass<ServerMetadataArgs, ServerMetadata>({
  single: true,
  inherit: ModelMetadata,
  allowOn: [ 'class' ]
})
export class ServerMetadata extends BaseMetadata {
  baseUrl: string;
  messageHandlers = new Map<string, string>();

  controllers: Array<Constructor<any>> | ( () => Array<Constructor<any>> ) | 'all';

  constructor(metaArgs: ServerMetadataArgs, info: DecoratorInfo, public target: Constructor<any>) {
    super(info);
    this.baseUrl = metaArgs.baseUrl || '/';
    this.controllers = metaArgs.controllers;
    const clientMessage = targetStore.getMetaFor(target, OnMessageMetadata);
    if ( clientMessage ) {
      for ( let [ k, v ] of MapExt.asKeyValArray(clientMessage) ) {
        this.messageHandlers.set(v.eventName, <any> k);
      }
    }
  }
}

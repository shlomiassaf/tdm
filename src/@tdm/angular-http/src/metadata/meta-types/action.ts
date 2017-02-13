import { ActionMetadata, ActionMetadataArgs, isFunction, DecoratorInfo } from '@tdm/core';
import { Params } from '../../utils/match-pattern';
import { BaseHttpConfig, TrailingSlashesStrategy } from '../../core/interfaces';
import { mapMethod, MappedMethod, HttpActionMethodType } from './method-mapper';

export interface HttpActionMetadataArgs extends ActionMetadataArgs<HttpActionMethodType>, BaseHttpConfig {
  /**
   * action specific url override. The url templating is supported just like for the resource-level urls.
   * @optional
   * @default undefined
   */
  endpoint?: string;

}


export class HttpActionMetadata extends ActionMetadata {
  methodInfo: MappedMethod;

  endpoint?: string;
  urlParams?: Params;
  headers?: { [key: string]: any };
  withCredentials?: boolean;
  trailingSlashes?: TrailingSlashesStrategy;


  constructor(obj: HttpActionMetadataArgs, info: DecoratorInfo) {
    super(info);

    Object.assign(this, obj);
    this.methodInfo = mapMethod(obj.method);
    this.method = this.methodInfo.method;

    if (obj.raw) {
      if (isFunction(obj.raw)) {
        this.raw = {
          handler: obj.raw,
          deserialize: false
        }
      } else {
        obj.raw = {
          handler: obj.raw.handler,
          deserialize: !!obj.raw.deserialize
        }
      }
    }
  }


  static DEFAULTS: HttpActionMetadataArgs = {
    method: undefined
  };

  static VALIDATE(obj: HttpActionMetadataArgs): void {
    if (!obj.hasOwnProperty('method')) {
      throw new Error('Resource Action method is mandatory.');
    }
  }
}

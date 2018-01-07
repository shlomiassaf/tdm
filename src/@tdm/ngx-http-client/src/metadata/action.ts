import { DecoratorInfo, MetaClass } from '@tdm/core/tdm';

import { ActionMetadata, ActionMetadataArgs } from '@tdm/data';
import { HttpAdapter } from '../core';
import { Params } from '../utils/match-pattern';
import { BaseHttpConfig, TrailingSlashesStrategy } from '../core/interfaces';
import { mapMethod, MappedMethod, HttpActionMethodType } from './method-mapper';

export interface HttpActionMetadataArgs extends ActionMetadataArgs<HttpActionMethodType>, BaseHttpConfig {
  /**
   * action specific url override. The url templating is supported just like for the resource-level urls.
   * @optional
   * @default undefined
   */
  endpoint?: string;

  /**
   * When setting a [[PostActionHandler]] (post) with the `returns` property set to true
   * you can adjust the response type that will be set in the data property of the [[ExecuteResponse]].
   *
   * > This is only applicable when you set a [[PostActionHandler]] with `returns` set to true
   */
  postResponseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
}

@MetaClass<HttpActionMetadataArgs, HttpActionMetadata>({
  allowOn: ['staticMember', 'member'],
  extend: ActionMetadata.extend,
  register: ActionMetadata.register
})
export class HttpActionMetadata extends ActionMetadata {
  methodInfo: MappedMethod;

  endpoint?: string;
  urlParams?: Params;
  headers?: { [key: string]: any };
  withCredentials?: boolean;
  trailingSlashes?: TrailingSlashesStrategy;

  postResponseType?: 'arraybuffer' | 'blob' | 'json' | 'text';

  constructor(obj: HttpActionMetadataArgs, info: DecoratorInfo) {
    super(obj, info);

    if (!obj.hasOwnProperty('method')) {
      throw new Error('Resource Action method is mandatory.');
    }

    this.methodInfo = mapMethod(obj.method);
    this.method = this.methodInfo.method;

    if (this.postResponseType && (!this.post || !this.post.returns)) {
      throw new Error('"postResponseType" can only be set when using a "post" handler with "returns" set to true');
    }
  }

  static adapterClass = HttpAdapter;
}

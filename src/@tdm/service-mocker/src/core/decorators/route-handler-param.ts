import { MockerRequest, MockerResponse } from 'service-mocker';
import { BaseParamMetadata, Overwrite, MetaClass, isFunction } from '@tdm/core/tdm';

import { RequestContext } from '../request-context';
import { RouteHandleParamType, RouteHandlerParamMetadata } from '../metadata';

export type ParameterMetadataInfo
  = Overwrite<Pick<BaseParamMetadata, 'name' | 'paramIndex' | 'paramType'>, { name: string }>;

export type ParamInjectionHandler<T extends keyof RouteHandleParamType> = (param: ParameterMetadataInfo,
                                                                           req: MockerRequest,
                                                                           res: MockerResponse,
                                                                           metaArgs?: RouteHandleParamType[T]) => any;

export type MethodParamInjections = { [P in keyof RouteHandleParamType]: ParamInjectionHandler<P> };

const methodParamInject = MetaClass.decorator(RouteHandlerParamMetadata, 'param');
const methodParamInjections: MethodParamInjections = <any> {};

// tslint:disable:max-line-length
export function resolveRouteHandlerParam<T extends keyof RouteHandleParamType>(ctx: RequestContext,
                                                                               p: BaseParamMetadata,
                                                                               metaType: T,
                                                                               metaArgs?: RouteHandleParamType[T]) {
  if (isFunction( methodParamInjections[metaType])) {
    return methodParamInjections[metaType].apply(null, [p, ctx.req, ctx.res, metaArgs]);
  }
}

export function createRouteHandlerParamDecorator<T extends keyof RouteHandleParamType>(metaType: T,
                                                                                       handler: ParamInjectionHandler<T>): (metaArgs?: RouteHandleParamType[T]) => ParameterDecorator;
export function createRouteHandlerParamDecorator<T extends keyof RouteHandleParamType>(metaType: T,
                                                                                       handler: ParamInjectionHandler<T>,
                                                                                       metaArgsMandatory: true): (metaArgs: RouteHandleParamType[T]) => ParameterDecorator;
export function createRouteHandlerParamDecorator<T extends keyof RouteHandleParamType>(metaType: T,
                                                                                       handler: ParamInjectionHandler<T>,
                                                                                       metaArgsMandatory?: boolean): ( (metaArgs: RouteHandleParamType[T]) => ParameterDecorator ) | ( (metaArgs?: RouteHandleParamType[T]) => ParameterDecorator ) {
  methodParamInjections[metaType] = handler;
  return (metaArgs?: RouteHandleParamType[T]) => {
    if (metaArgsMandatory === true && !metaArgs) {
      throw new Error('');
    }
    return methodParamInject({ metaType, metaArgs });
  };
}

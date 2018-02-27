import { isFunction } from '@tdm/core/tdm';
import { MockerRequest, MockerResponse, RouteCallback } from 'service-mocker/server';

import { HttpError } from '../http-error';
import { resolveRouteHandlerParam } from './decorators/route-handler-param';
import { ServiceMockControllerMetadata } from './metadata';
import { RequestContext } from './request-context';
import { ServiceMockMethodExtensionsHost } from '@tdm/service-mocker/src/core/metadata/method-extensions';

function getForwardLink(ctx: RequestContext): Promise<string> {
  const forwardValue = ctx.method.forwardMeta.forward === true
    ? resolveMethodValue(ctx)
    : ctx.method.forwardMeta.forward
  ;
  return Promise.resolve(forwardValue);
}

function delay(method: ServiceMockMethodExtensionsHost): Promise<void> {
  return method.delayMeta
    ? new Promise( resolve => setTimeout(resolve, method.delayMeta.delay || 0) )
    : Promise.resolve()
  ;
}

function getHttpCode(method: ServiceMockMethodExtensionsHost): number {
  return method.httpCodeMeta ? method.httpCodeMeta.code : 200;
}

function resolveMethodValue(ctx: RequestContext): Promise<any> | any {
  const instance = ctx.instance();
  const name = ctx.method.decoratorInfo.name;
  if (instance && name in instance) {
    return isFunction(instance[name]) ? emitInstanceMethod(ctx, instance, name as string) : instance[name];
  } else {
    return null;
  }
}

function emitInstanceMethod(ctx: RequestContext, instance: any, name: string): any {
  const injection: any[] = [];
  const { routeHandlerParams } = ctx.method;
  if (Array.isArray(routeHandlerParams)) {
    for (let p of routeHandlerParams) {
      const { metaType, metaArgs } = p.metaArgs;
      injection[p.paramIndex] = resolveRouteHandlerParam(ctx, p, metaType, metaArgs);
    }
  }
  return Promise.all(injection)
    .then( args => instance[name](...args));
}

function emitError(res: MockerResponse, error: Error, extendError?: any): void {
  const httpError: HttpError = error instanceof HttpError
    ? error
    : HttpError.createKnown('500', error.message || 'Unknown Error')
  ;

  const sendData: any = {
    message: httpError.message
  };

  if (httpError.description) {
    sendData.description = httpError.description;
  }

  if (extendError) {
    Object.assign(sendData, extendError);
  }

  res.status(httpError.httpCode).json(sendData);
}

export function createHandlerFromController(ctrl: ServiceMockControllerMetadata,
                                            method: ServiceMockMethodExtensionsHost): RouteCallback {
  return createHandler(() => ctrl.factory(false), method);
}

export function createHandler(instance: () => any,
                              method: ServiceMockMethodExtensionsHost): RouteCallback {
  return (req: MockerRequest, res: MockerResponse) => {
    return delay(method)
      .then( () => {
        const ctx: RequestContext = { instance, method, req, res };
        if (method.forwardMeta) {
          return getForwardLink(ctx).then( value => res.forward(value) );
        } else {
          res.type('json');
          return Promise.resolve(resolveMethodValue(ctx))
            .then( value => res.status(getHttpCode(method)).json(value) );
        }
      })
      .catch( err => emitError(res, err) );
  };
}

/**
 * Returns a handler that checks if the current request pathname starts with the given path, if so will
 * invoke `matchHandler` otherwise will invoke noMatchHandler if provided.
 */
export function createGlobalMiddlewareHandler(path: string,
                                              matchHandler: RouteCallback,
                                              noMatchHandler?: RouteCallback): RouteCallback {
  const regExp = new RegExp(`^${path}(?:$|\/)`);
  return (req: MockerRequest, res: MockerResponse) => {
    const url = new URL(req.url);
    if ( regExp.test(url.pathname) ) {
      return matchHandler(req, res);
    } else if (noMatchHandler) {
      return noMatchHandler(req, res);
    }
  };
}

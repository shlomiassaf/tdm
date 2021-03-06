import { Subscription } from 'rxjs';
import {
  HttpParams,
  HttpHeaders,
  HttpResponse,
  HttpClient
} from '@angular/common/http';
import { isUndefined, stringify, TargetMetadata } from '@tdm/core/tdm';

import {
  Adapter,
  findProp,
  ExecuteParams,
  ExecuteContext,
  AdapterResponse,
  ExecuteResponse
} from '@tdm/data';

import {
  HttpResourceMetadata,
  HttpActionMetadata,
  UrlParamMetadata
} from '../metadata';

import { HttpActionOptions, TrailingSlashesStrategy } from './interfaces';
import { HttpDefaultConfig } from '../http-default-config';
import { Params, getParamNames, formatPattern } from '../utils/match-pattern';
import { HttpActionMethodType } from '../metadata/method-mapper';

export interface HttpAdapterFactoryArgs {
  httpClient: HttpClient;
  defaultConfig: HttpDefaultConfig;
}

const defaultFactoryArgs = {
  value: undefined as HttpAdapterFactoryArgs
};

export function setDefaultFactoryArgs(
  args: HttpAdapterFactoryArgs
): HttpAdapterFactoryArgs {
  return (defaultFactoryArgs.value = args);
}

function getFactoryArgs(
  params: ExecuteParams<HttpAdapterFactoryArgs>
): HttpAdapterFactoryArgs {
  const args: HttpAdapterFactoryArgs =
    params.factoryArgs || defaultFactoryArgs.value;
  if (!args) {
    throw new Error(
      'HttpClientResourceModule did not init, are you trying to invoke an action before the modules registered?'
    );
  }
  return args;
}

export class HttpAdapter
  implements Adapter<HttpActionMetadata, HttpActionOptions> {
  readonly supports = { cancel: true };

  private executing = new Map<number, Subscription>();

  private idCount = 1;

  execute(
    ctx: ExecuteContext<HttpActionMetadata>,
    options: HttpActionOptions,
    params: ExecuteParams<HttpAdapterFactoryArgs>
  ): AdapterResponse {
    const id = this.idCount++;
    try {
      const { httpClient, defaultConfig } = getFactoryArgs(params);

      options = options || <any>{};

      const { action } = ctx;

      const resource = ctx.targetMeta.model<HttpResourceMetadata>();

      if (!resource) {
        throw new Error('Http resource not set.');
      }

      const rawUrl = parseRawUrl(resource, action, defaultConfig);
      if (!rawUrl) {
        // TODO: move to @tdm error with more info.
        throw new Error('Invalid endpoint, no endpoint found.');
      }

      const withCredentials = findProp(
        'withCredentials',
        defaultConfig,
        resource,
        action,
        options
      );
      const strip = findProp(
        'trailingSlashes',
        defaultConfig,
        resource,
        action,
        options
      );
      const urlParams = this.getParams(
        ctx,
        ctx.targetMeta,
        resource,
        options,
        defaultConfig
      );

      const { path, query } = this.splitParams(rawUrl, urlParams);

      // TODO: this is legacy from `ngx-http`, refactor.
      const method = HttpActionMethodType[
        action.methodInfo.source
      ].toUpperCase();
      const url = processUrl(this.parseUrl(rawUrl, path), strip);
      const request = {
        method,
        url,
        body: ctx.data,
        headers: this.getHeaders(ctx, resource, options, defaultConfig),
        reportProgress: false, // its the default but let be verbose
        observe: 'response',
        params: this.paramsToSearchParams(query),
        responseType: action.postResponseType || 'json',
        withCredentials
      } as {
        body?: any;
        headers?:
          | HttpHeaders
          | {
              [header: string]: string | string[];
            };
        reportProgress?: boolean;
        observe: 'response';
        params?:
          | HttpParams
          | {
              [param: string]: string | string[];
            };
        responseType?: 'json';
        withCredentials?: boolean;
      };
      // TODO: TS complains on request so has to force type for it, check why

      const response = new Promise<ExecuteResponse>((resolve, reject) => {
        let httpResponse: HttpResponse<any>;
        const subscription = httpClient
          .request<any>(method, url, request)
          .subscribe(
            v => (httpResponse = v),
            err => {
              this.executing.delete(id);
              reject(err);
            },
            () => {
              this.executing.delete(id);
              resolve({ data: httpResponse.body, response: httpResponse });
            }
          );

        this.executing.set(id, subscription);
      });
      return { id, response, request };
    } catch (err) {
      return { id, response: Promise.reject(err) };
    }
  }

  cancel(id: number): void {
    const sub = this.executing.get(id);
    if (sub && !sub.closed) {
      sub.unsubscribe();
    }
  }

  protected getHeaders(
    ctx: ExecuteContext<HttpActionMetadata>,
    resource: HttpResourceMetadata,
    options: HttpActionOptions,
    httpDefaultConfig: HttpDefaultConfig
  ): HttpHeaders {
    let headers = new HttpHeaders(
      findProp('headers', httpDefaultConfig, resource, ctx.action)
    );
    if (options.headers) {
      Object.keys(options.headers).forEach(k => {
        if (isUndefined(options.headers[k])) {
          headers = headers.delete(k);
        } else {
          headers = headers.set(k, options.headers[k]);
        }
      });
    }
    return headers;
  }

  protected getParams(
    ctx: ExecuteContext<HttpActionMetadata>,
    meta: TargetMetadata,
    resource: HttpResourceMetadata,
    options: HttpActionOptions,
    httpDefaultConfig: HttpDefaultConfig
  ): Params {
    const params = Object.assign(
      {},
      findProp('urlParams', httpDefaultConfig, resource, ctx.action)
    );

    if (ctx.instance) {
      // we don't care about the keys (properties) UrlParam is on...
      // TODO: change how UrlParams are stored, instead of target->UrlParamMetadata->propName->Set<UrlParamMetadata>
      // store everything in one set/array to avoid this messy extraction.
      // an alternative is to cache the flattened array.
      const boundParams = meta
        .getValues<any, UrlParamMetadata[]>(UrlParamMetadata)
        .reduce(
          (arr, partial) => arr.concat(partial),
          [] as UrlParamMetadata[]
        );

      for (let i = 0, len = boundParams.length; i < len; i++) {
        const bp = boundParams[i];
        if (
          bp.methods.length === 0 ||
          bp.methods.some(mi => mi.method === ctx.action.method)
        ) {
          params[bp.urlTemplateParamName] = ctx.instance[bp.name];
        }
      }
    }

    if (options.urlParams) {
      Object.assign(params, options.urlParams);
    }

    return params;
  }

  protected parseUrl(url: string, params: Params): string {
    try {
      return formatPattern(url, params);
    } catch (e) {
      throw new Error(
        `URL Parameter Error in ${stringify(this.constructor)}: ${e.message}`
      );
    }
  }

  /**
   * From a collection of parameters return those belong to the url (path) and those that are not (query).
   * @param url
   * @param params
   * @returns
   */
  protected splitParams(
    url: string,
    params: Params
  ): { path: Params; query: Params } {
    const pathParamNames = getParamNames(url);

    return Object.keys(params).reduce(
      (splitParams, key) => {
        if (!isUndefined(params[key])) {
          if (pathParamNames.indexOf(key) === -1) {
            splitParams.query[key] = params[key];
          } else {
            splitParams.path[key] = params[key];
          }
        }
        return splitParams;
      },
      { path: {}, query: {} }
    );
  }

  private paramsToSearchParams(params: Params): HttpParams {
    return new HttpParams({ fromObject: params });
  }
}

function parseRawUrl(
  resource: HttpResourceMetadata,
  action: HttpActionMetadata,
  defaultConfig: HttpDefaultConfig
): string {
  const urlParts = [
    defaultConfig.baseUrl,
    action.absolute !== true ? resource.endpoint : '',
    action.endpoint
  ];

  let suffix = '';

  const rawParts = [];
  for (let part of urlParts) {
    if (part) {
      if (/^.+\/$/.test(part)) {
        suffix = '/';
      }
      const raw = part
        .split('/')
        .filter(p => !!p)
        .map(u => u.replace(/\/(.*(?:\/))\/*/, '$1'))
        .filter(p => !!p);
      rawParts.push(...raw);
    }
  }

  // TODO: this can be moved to the action, cached there without recalc, only baseUrl might change
  return '/' + rawParts.join('/') + suffix;
}

function processUrl(url: string, slashes: TrailingSlashesStrategy): string {
  switch (slashes) {
    case 'strip':
      url = url.replace(/\/+$/, '') || '/';
      break;
    case 'force':
      if (url[url.length - 1] !== '/') {
        url += '/';
      }
      break;
    default:
      break;
  }

  // E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`
  return url.replace(/\/\.(?=\w+($|\?))/, '.').replace(/\/\\\./, '/.'); // replace escaped `/\.` with `/.`
}

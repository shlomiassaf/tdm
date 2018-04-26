import { MockerRequest, MockerResponse } from 'service-mocker';
import { createRouteHandlerParamDecorator, ParameterMetadataInfo } from './decorators';

declare module './metadata/method-extensions/route-handler-param' {
  interface RouteHandleParamType {
    request: undefined;
    response: undefined;
    header: string;
    param: string;
    query: string;
    body: BodyParamInjectType;
  }
}
export type BodyParamInjectType = 'text' | 'blob' | 'json' | 'arrayBuffer' | 'formData';

export const Request = createRouteHandlerParamDecorator(
  'request',
  (param: ParameterMetadataInfo, req: MockerRequest, res: MockerResponse) => req
);

export const Response = createRouteHandlerParamDecorator(
  'response',
  (param: ParameterMetadataInfo, req: MockerRequest, res: MockerResponse) => res
);

export const Header = createRouteHandlerParamDecorator(
  'header',
  (param: ParameterMetadataInfo, req: MockerRequest, res: MockerResponse, metaArgs?: string) => {
    if (req.headers) {
      return metaArgs ? req.headers.get(metaArgs) : req.headers;
    }
  }
);

export const Param = createRouteHandlerParamDecorator(
  'param',
  (param: ParameterMetadataInfo, req: MockerRequest, res: MockerResponse, metaArgs?: string) => {
    if (req.params) {
      return metaArgs ? req.params[metaArgs] : req.params;
    }
  }
);

export const Query = createRouteHandlerParamDecorator(
  'query',
  (param: ParameterMetadataInfo, req: MockerRequest, res: MockerResponse, metaArgs?: string) => {
    if (req.query) {
      return metaArgs ? req.query[metaArgs] : req.query;
    }
  }
);

export const Body = createRouteHandlerParamDecorator(
  'body',
  (param: ParameterMetadataInfo, req: MockerRequest, res: MockerResponse, metaArgs?: BodyParamInjectType) => {
    switch (metaArgs) {
      case 'json':
        return req.json();
      case 'text':
        return req.text();
      case 'blob':
        return req.blob();
      case 'arrayBuffer':
        return req.arrayBuffer();
      case 'formData':
        return req.formData();
      default:
        return req.json();
    }
  }
);

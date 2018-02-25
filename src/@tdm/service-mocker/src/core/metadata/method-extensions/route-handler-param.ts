import { BaseParamMetadata, DecoratorInfo, MetaClass, Constructor } from '@tdm/core/tdm';

export interface RouteHandleParamType { }

interface RouteHandlerParamMetadataArgs<T extends keyof RouteHandleParamType = keyof RouteHandleParamType> {
  metaType: T;
  metaArgs: RouteHandleParamType[T];
}

@MetaClass<any, RouteHandlerParamMetadata>({
  allowOn: ['param'],
  register: 'array',
  extend: 'mergeMapArray'
})
export class RouteHandlerParamMetadata extends BaseParamMetadata {
  constructor(public metaArgs: RouteHandlerParamMetadataArgs, info: DecoratorInfo, target: Constructor<any>) {
    super(info, target);
  }
}

declare module './method-extensions' {
  interface ServiceMockMethodExtensionsHost {
    routeHandlerParams?: RouteHandlerParamMetadata[];
  }
  interface ServiceMockMethodExtensions {
    routeHandlerParams: RouteHandlerParamMetadata;
  }
}

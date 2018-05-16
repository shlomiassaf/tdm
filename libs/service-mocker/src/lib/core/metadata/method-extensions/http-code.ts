import { BaseMetadata, DecoratorInfo, MetaClass } from '@tdm/core/tdm';

import { ServiceMockMethodMetadata } from '../service-mock-method';

@MetaClass<number, HttpCodeMetadata>({
  allowOn: ['member'],
  extend: 'mergeMap',
  proxy: {
    host: ServiceMockMethodMetadata,
    containerKey: 'httpCode'
  }
})
export class HttpCodeMetadata extends BaseMetadata {
  public code: number;

  constructor(code: number, info: DecoratorInfo) {
    super(info);
    this.code = code;
  }
}

declare module '../service-mock-method' {
  interface ServiceMockMethodMetadataArgs {
    httpCode?: number;
  }
}

declare module './method-extensions' {
  interface ServiceMockMethodExtensionsHost {
    httpCodeMeta?: HttpCodeMetadata;
  }
  interface ServiceMockMethodExtensions {
    httpCodeMeta: HttpCodeMetadata;
  }
}

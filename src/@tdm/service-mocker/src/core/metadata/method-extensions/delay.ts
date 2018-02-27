import { BaseMetadata, DecoratorInfo, MetaClass } from '@tdm/core/tdm';

import { ServiceMockMethodMetadata } from '../service-mock-method';

@MetaClass<number, DelayMetadata>({
  allowOn: ['member'],
  extend: 'mergeMap',
  proxy: {
    host: ServiceMockMethodMetadata,
    containerKey: 'httpCode'
  }
})
export class DelayMetadata extends BaseMetadata {
  public delay: number;

  constructor(delay: number, info: DecoratorInfo) {
    super(info);
    this.delay = delay;
  }
}

declare module '../service-mock-method' {
  interface ServiceMockMethodMetadataArgs {
    delay?: number;
  }
}

declare module './method-extensions' {
  interface ServiceMockMethodExtensionsHost {
    delayMeta?: DelayMetadata;
  }
  interface ServiceMockMethodExtensions {
    delayMeta: DelayMetadata;
  }
}

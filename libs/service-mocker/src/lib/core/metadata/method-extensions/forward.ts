import { BaseMetadata, DecoratorInfo, MetaClass } from '@tdm/core/tdm';

import { ServiceMockMethodMetadata } from '../service-mock-method';

@MetaClass<number, ForwardMetadata>({
  allowOn: ['member'],
  extend: 'mergeMap',
  proxy: {
    host: ServiceMockMethodMetadata,
    containerKey: 'forward'
  }
})
export class ForwardMetadata extends BaseMetadata {
  public forward: string | true;

  constructor(forward: string | true, info: DecoratorInfo) {
    super(info);
    this.forward = forward;
  }
}

declare module '../service-mock-method' {
  interface ServiceMockMethodMetadataArgs {
    /**
     * A string value that will be used to forward the request
     */
    forward?: string | true;
  }
}

declare module './method-extensions' {
  interface ServiceMockMethodExtensionsHost {
    forwardMeta?: ForwardMetadata;
  }
  interface ServiceMockMethodExtensions {
    forwardMeta: ForwardMetadata;
  }
}

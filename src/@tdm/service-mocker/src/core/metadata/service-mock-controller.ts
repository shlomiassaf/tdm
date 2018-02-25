import {
  LazyInit,
  Constructor,
  DecoratorInfo,
  ModelMetadataArgs,
  ModelMetadata,
  MetaClass
} from '@tdm/core/tdm';

import { ServiceMockMethodMetadata } from './service-mock-method';

export interface ServiceMockControllerMetadataArgs extends ModelMetadataArgs {
  /**
   * A parameterized URL template with parameters prefixed by : as in /user/:username.
   */
  path: string;
}

@MetaClass<ServiceMockControllerMetadataArgs, ServiceMockControllerMetadata>({
  inherit: ModelMetadata
})
export class ServiceMockControllerMetadata extends ModelMetadata implements ServiceMockControllerMetadataArgs {
  /**
   * The url for this resource.
   * This property does not extend from a base type.
   */
  path: string;

  @LazyInit(function(this: ServiceMockControllerMetadata) {
    return this.tMeta.getMetaFor(ServiceMockMethodMetadata);
  })
  methods: Map<TdmPropertyKey, ServiceMockMethodMetadata>;

  constructor(obj: ServiceMockControllerMetadataArgs | undefined, info: DecoratorInfo, t: Constructor<any>) {
    super(obj, info, t);
    if (obj) {
      this.path = obj.path || '/';
    }
  }

  setMethod(metaArgs: ServiceMockMethodMetadata): void {
    this.methods.set(metaArgs.name, metaArgs);
  }

  getMethod(propertyKey: TdmPropertyKey): ServiceMockMethodMetadata | undefined {
    return this.methods.get(propertyKey);
  }
}

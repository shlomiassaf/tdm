import { BaseMetadata, MetaClass, DecoratorInfo, TargetMetadata, PropMetadata, targetStore } from '@tdm/core/tdm';
import { getExtensions, MethodExtensionsHost } from './method-extensions/method-extensions';

export interface ServiceMockMethodType {
  get: any;
  post: any;
  put: any;
  patch: any;
  delete: any;
  head: any;
  options: any;
}

export interface ServiceMockMethodMetadataArgs {
  method: keyof ServiceMockMethodType;

  /**
   * Additional path (to the controller path) for this endpoint.
   */
  path?: string;
}

@MetaClass<ServiceMockMethodMetadataArgs, ServiceMockMethodMetadata>({
  allowOn: ['member'],
  extend: 'mergeMap'
})
@MethodExtensionsHost()
export class ServiceMockMethodMetadata extends BaseMetadata
                                       implements ServiceMockMethodMetadataArgs {
  method: keyof ServiceMockMethodType;

  /**
   * Additional path (to the controller path) for this endpoint.
   */
  path?: string;

  constructor(obj: ServiceMockMethodMetadataArgs | undefined, info: DecoratorInfo, t: any) {
    super(info);
    this.path = obj.path || '/';
    this.method = obj.method;
  }

  initExtensions(tMeta: TargetMetadata, prop: PropMetadata): void {
    for (let [key, metaClass] of getExtensions()) {
      if (!this[key]) {
        const metaClassInstance: any = tMeta.getMetaFor(metaClass, prop.name as any);
        // we set 'any' because `getMetaFor returns a type which is the instance of the metaClass however,
        // this is not a rule, the type can be for example and array of the metaClass (we use getValues) for that
        if (metaClassInstance) {
          this[key] = metaClassInstance;
        }
      }
    }
  }
}

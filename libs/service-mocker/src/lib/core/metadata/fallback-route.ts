import { BaseMetadata, MetaClass, TargetMetadata, PropMetadata, DecoratorInfo } from '@tdm/core/tdm';
import { getExtensions, MethodExtensionsHost } from './method-extensions/method-extensions';

@MetaClass<never, FallbackRouteMetadata>({
  allowOn: ['member'],
  extend: 'mergeMap'
})
@MethodExtensionsHost()
export class FallbackRouteMetadata extends BaseMetadata {
  constructor(metaArgs: undefined, info: DecoratorInfo) {
    super(info);
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

import { targetStore, MapExt, BaseMetadata, Constructor, PropMetadata, TargetMetadata } from '@tdm/core/tdm';

export interface ServiceMockMethodExtensions { }
export interface ServiceMockMethodExtensionsHost extends BaseMetadata {
  initExtensions(tMeta: TargetMetadata, prop: PropMetadata): void;
}

export type ServiceMockMethodExtensionsStore<T extends keyof ServiceMockMethodExtensions = keyof ServiceMockMethodExtensions>
  = Array<[T, Constructor<ServiceMockMethodExtensions[T]>]>;

const methodExtensionStore: ServiceMockMethodExtensionsStore = [ ];
const methodExtensionHostStore: Array<Constructor<ServiceMockMethodExtensionsHost>> = [ ];

export function getExtensions(): ServiceMockMethodExtensionsStore {
  return methodExtensionStore;
}

// tslint:disable-next-line:max-line-length
export function registerMethodExtensions<T extends keyof ServiceMockMethodExtensions = keyof ServiceMockMethodExtensions>(key: T, metaClass: Constructor<ServiceMockMethodExtensions[T]>): void {
  methodExtensionStore.push([key, metaClass]);
}

export function MethodExtensionsHost(): <T extends ServiceMockMethodExtensionsHost>(target: Constructor<T>) => any {
  return (t: any) => {
    methodExtensionHostStore.push(t);
  };
}

export function initExtensions(target: Constructor<any>): void {
  const tMeta = targetStore.getTargetMeta(target);
  for (let ext of methodExtensionHostStore) {
    const extMap = tMeta.getMetaFor(ext);
    if (extMap) {
      MapExt.asKeyValArray(extMap).forEach(([ k, v ]) => {
        const prop = tMeta.getCreateProp(k as any);
        v.initExtensions(tMeta, prop);
      });
    }
  }
}

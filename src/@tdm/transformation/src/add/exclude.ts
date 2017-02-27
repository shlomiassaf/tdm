import { targetStoreSetter } from '../fw';
import { targetStore, TargetStore, ExcludeMetadata, ExcludeMetadataArgs } from '../metadata';


/**
 * @propertyDecorator instance
 * @param def
 */
export function Exclude(def?: ExcludeMetadataArgs): Function {
  return (...args: any[]) =>{
    targetStore.addExclude(def, ...args);
  };
}

TargetStore.prototype.addExclude = targetStoreSetter<ExcludeMetadata, ExcludeMetadataArgs>(ExcludeMetadata);

declare module '../metadata/target-store' {
  interface TargetStore {
    addExclude(def: ExcludeMetadataArgs, ...args: any[]): ExcludeMetadata;
    addExclude(def: ExcludeMetadataArgs, tProto: Object, key: PropertyKey, desc: PropertyDescriptor): ExcludeMetadata;
  }
}

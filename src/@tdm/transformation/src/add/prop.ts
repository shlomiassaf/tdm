import { targetStoreSetter } from '../fw';
import { targetStore, TargetStore, PropMetadata, PropMetadataArgs } from '../metadata';

/**
 * @propertyDecorator instance
 * @param def
 */
export function Prop(def?: PropMetadataArgs): Function {
  return (...args: any[]) => {
    targetStore.addProp(def, ...args);
  };
}

TargetStore.prototype.addProp = targetStoreSetter<PropMetadata, PropMetadataArgs>(PropMetadata);

declare module '../metadata/target-store' {
  interface TargetStore {
    addProp(def: PropMetadataArgs, ...args: any[]): PropMetadata;
    addProp(def: PropMetadataArgs, tProto: Object, key: PropertyKey, desc: PropertyDescriptor): PropMetadata;
  }
}

import { targetStore, TargetStore, ClassMetadata, TransformableMetadataArgs } from '../metadata';


/**
 * @propertyDecorator static
 * @param def
 */
export function Transformable(def: TransformableMetadataArgs): Function {
  return (...args: any[]) => targetStore.setTransformable(def, ...args);
}

const allowedKeys: Array<keyof TransformableMetadataArgs>
  = ['factory', 'transformStrategy', 'transformNameStrategy'];

TargetStore.prototype.setTransformable = function(metaArgs: TransformableMetadataArgs, target: Function): void {
  if (metaArgs) {
    allowedKeys.forEach( key => {
      if (metaArgs.hasOwnProperty(key)) {
        this.set(target, ClassMetadata, key, metaArgs[key]);
      }
    });
  }
}

declare module '../metadata/target-store' {
  interface TargetStore {
    setTransformable(def: TransformableMetadataArgs, ...args: any[]): void;
    setTransformable(def: TransformableMetadataArgs, target: Function): void;
  }
}

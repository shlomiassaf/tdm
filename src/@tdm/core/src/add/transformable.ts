import { targetStore, TargetStore, ClassMetadata, TransformableMetadataArgs } from '../metadata';

// The logic can be implemented in the @Transformable decorator without
// using a prototype function `setTransformable`, the prototype is used to allow override of logic.
// e.g. using custom decorator and throwing when Transformable is used...

/**
 * @propertyDecorator static
 * @param def
 */
export function Transformable(def: TransformableMetadataArgs): Function {
  return (target: Function) => {
    targetStore.setTransformable(def, target);
  };
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
};

declare module '../metadata/target-store' {
  interface TargetStore {
    setTransformable(def: TransformableMetadataArgs, target: Function): void;
  }
}

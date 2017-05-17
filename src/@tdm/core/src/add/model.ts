import { getProtoChain } from '../fw/utils';
import { fireEvents } from '../fw/events';
import { targetStore, TargetStore, ModelMetadataArgs } from '../metadata';

// The logic can be implemented in the @Model decorator without
// using a prototype function `setModel`, the prototype is used to allow override of logic.
// e.g. using custom decorator and throwing when Model is used...

/**
 * @propertyDecorator static
 * @param metaArgs
 */
export function Model(metaArgs?: ModelMetadataArgs): Function {
  return (target: any) => {
    // register manually, if metaArgs is empty, no keys etc..
    targetStore.registerTarget(target);

    if (metaArgs) {
      Object.keys(metaArgs)
        .forEach( key => targetStore.setClassProp(target, <any>key, metaArgs[key]) );
    }

    getProtoChain(target)
      .forEach(proto => {
        if (target !== proto && this.hasTarget(proto)) {
          targetStore.extend(proto, target);
        }
      });

    fireEvents('processType', target);
  };
}

TargetStore.prototype.setModel = function(metaArgs: ModelMetadataArgs, target: Function): void {
  if (metaArgs) {
    Object.keys(metaArgs)
      .forEach( key => this.setClassProp(target, key, metaArgs[key]) );
  }
};

declare module '../metadata/target-store' {
  interface TargetStore {
    setModel(def: ModelMetadataArgs, target: Function): void;
  }
}

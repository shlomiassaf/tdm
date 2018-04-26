import { MetaClass, getProtoChain } from '../../fw';
import { targetStore, ModelMetadataArgs } from '../../metadata';
import { ModelMetadata } from './model';

/**
 * @propertyDecorator static
 * @param metaArgs
 */
export function Model(metaArgs?: ModelMetadataArgs): Function {
  return (target: any) => {
    const metaClass = MetaClass.create(ModelMetadata, metaArgs, target);
    processModel(target, metaClass, metaClass.skip !== true);
  };
}

/**
 * Takes a model and process it.
 * The first step is to extend the target, if it inherits.
 * The second step is calling the build() method on the metadata class which will
 * start the event lifecycle.
 */
export function processModel(target: any, metaClass: ModelMetadata, build?: boolean) {
  for (let proto of getProtoChain(target)) {
    if (target !== proto && targetStore.hasTarget(proto)) {
      targetStore.extend(proto, target);
    }
  }

  if (build) {
    metaClass.build();
  }
}

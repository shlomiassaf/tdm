import { MetaClass, getProtoChain } from '../../fw';
import { targetStore, ModelMetadataArgs } from '../../metadata';
import { ModelMetadata } from './model';

/**
 * @propertyDecorator static
 * @param metaArgs
 */
export function Model(metaArgs?: ModelMetadataArgs): Function {
  return (target: any) => {
    const metaClass = MetaClass.create(ModelMetadata, metaArgs || {}, target);

    getProtoChain(target)
      .forEach(proto => {
        if (target !== proto && targetStore.hasTarget(proto)) {
          targetStore.extend(proto, target);
        }
      });

    if(!metaArgs || metaArgs.skip !== true) {
      metaClass.build();
    }

  };
}

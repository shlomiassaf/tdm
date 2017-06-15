import { targetStore, MapExt, Constructor, MetaClass, MetaClassInstanceDetails } from '@tdm/core/tdm';
import {
  FormModelMetadata,
  FormModelMetadataArgs,
  FormPropMetadata,
  FormPropMetadataArgs // leave for angular AOT compiler.
} from './metadata/index';


/**
 * @propertyDecorator static
 * @param metaArgs
 */
export function FormModel(metaArgs?: FormModelMetadataArgs): (target: Function) => any {
  return formModel(metaArgs) as any;
}
export const formModel = MetaClass.decorator(FormModelMetadata, true);
// Split due to angular AOT

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const FormProp = MetaClass.decorator(FormPropMetadata, true);

targetStore.on
  .processType((target: Constructor<any>) => {
    const tMeta = targetStore.getTargetMeta(target);
    const modelProps = tMeta.getMetaFor(FormPropMetadata);
    if (modelProps) {
      let formModel = tMeta.getMetaFor(FormModelMetadata, true);
      if (!formModel) {
        FormModel()(target);
        formModel = tMeta.getMetaFor(FormModelMetadata, true);
      }

      MapExt.asKeyValArray(modelProps)
        .forEach(([k, v]) => {
          formModel.addProp(tMeta.getCreateProp(k as any), v);
        });
    }
  });

import { tdm, Constructor } from '@tdm/core';
import { MetaClassInstanceDetails } from '@tdm/core/tdm'; // leave for angular AOT compiler.
import {
  FormModelMetadata,
  FormModelMetadataArgs,
  FormPropMetadata,
  FormPropMetadataArgs // leave for angular AOT compiler.
} from './metadata';


/**
 * @propertyDecorator static
 * @param metaArgs
 */
export function FormModel(metaArgs?: FormModelMetadataArgs): (target: Function) => any {
  return formModel(metaArgs) as any;
}
export const formModel = tdm.MetaClass.decorator(FormModelMetadata, true);
// Split due to angular AOT

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const FormProp = tdm.MetaClass.decorator(FormPropMetadata, true);

tdm.targetStore.on
  .processType((target: Constructor<any>) => {
    const tMeta = tdm.targetStore.getTargetMeta(target);
    const modelProps = tMeta.getMetaFor(FormPropMetadata);
    if (modelProps) {
      let formModel = tMeta.getMetaFor(FormModelMetadata, true);
      if (!formModel) {
        FormModel()(target);
        formModel = tMeta.getMetaFor(FormModelMetadata, true);
      }

      tdm.MapExt.asKeyValArray(modelProps)
        .forEach(([k, v]) => {
          formModel.addProp(tMeta.getCreateProp(k as any), v);
        });
    }
  });

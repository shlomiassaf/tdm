import {
  targetStore,
  MapExt,
  Constructor,
  MetaClass,
  MetaClassInstanceDetails
} from '@tdm/core/tdm';
import {
  FormModelMetadata,
  FormModelMetadataArgs,
  FormPropMetadata,
  FormPropMetadataArgs // leave for angular AOT compiler.
} from './metadata/index';
import { FormElementType } from '../interfaces';

/** @internal */
export let formModel: any = {};
formModel = MetaClass.decorator(FormModelMetadata, true);

/**
 * @propertyDecorator static
 * @param metaArgs
 */
export function FormModel(
  metaArgs?: FormModelMetadataArgs
): (target: Function) => any {
  return formModel(metaArgs) as any;
}

// we need to export `FormProp` explicitly or else the type of the parameter "def" in the "d.ts" file will be set
// to FormModelMetadataArgs<"form" | "none">
export let formProp: any = {};
formProp = MetaClass.decorator(FormPropMetadata);

export function FormProp(
  def: FormPropMetadataArgs
): (target: Object, key: TdmPropertyKey) => any {
  return formProp(def) as any;
}

targetStore.on.processType((target: Constructor<any>) => {
  const tMeta = targetStore.getTargetMeta(target);
  const modelProps = tMeta.getMetaFor(FormPropMetadata);
  if (modelProps) {
    let formModelMeta = tMeta.getMetaFor(FormModelMetadata, true);
    if (!formModelMeta) {
      FormModel()(target);
      formModelMeta = tMeta.getMetaFor(FormModelMetadata, true);
    }

    MapExt.asKeyValArray(modelProps).forEach(([k, v]) =>
      formModelMeta.addProp(tMeta.getCreateProp(k as any), v)
    );
  }
});

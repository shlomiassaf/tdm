import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { tdm } from '@tdm/core';

import { FormPropMetadata } from './form-prop';

export interface FormModelMetadataArgs {
  validator?: ValidatorFn;
  asyncValidator?: AsyncValidatorFn;
}

@tdm.MetaClass<FormModelMetadataArgs, FormModelMetadata>({
  single: true,
  allowOn: ['class'],
  proxy: {
    host: tdm.ModelMetadata,
    containerKey: 'form'
  }
})
export class FormModelMetadata extends tdm.BaseMetadata implements FormModelMetadataArgs {
  validator: ValidatorFn | null;
  asyncValidator: AsyncValidatorFn | null;
  props = new Map<string, FormPropMetadata>();

  constructor(metaArgs: FormModelMetadataArgs | undefined, info: tdm.DecoratorInfo) {
    super(info);

    if (metaArgs) {
      this.validator = metaArgs.validator || null;
      this.asyncValidator = metaArgs.asyncValidator || null;
    }
  }

  addProp(prop: tdm.PropMetadata, metaArgs: FormPropMetadata) {
    if (!metaArgs.exclude && !metaArgs.render.type) {
      switch (prop.type.ref) {
        case Boolean:
          metaArgs.render.type = 'boolean';
          break;
        case String:
          metaArgs.render.type = 'text';
          break;
        case Number:
          metaArgs.render.type = 'number';
          break;
        default:
          // TODO: throw an informative error
          throw new Error('Invalid form type or type not set.');
      }
    }
    this.props.set(prop.name as any, metaArgs);
  }

  getProp(propertyKey: string): FormPropMetadata | undefined {
    return this.props.get(propertyKey);
  }
}

declare module '@tdm/core/metadata/model-metadata' {
  interface ModelMetadataArgs {
    form?: FormModelMetadataArgs | undefined
  }
}
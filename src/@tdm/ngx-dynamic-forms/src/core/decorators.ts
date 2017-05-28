import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

import { tdm, Constructor } from '@tdm/core';

import { RenderDef } from '../interfaces';

import { MetaClassInstanceDetails } from '@tdm/core/tdm'; // leave for angular AOT compiler.

export interface FormModelMetadataArgs {
  validator?: ValidatorFn;
  asyncValidator?: AsyncValidatorFn;
}


export interface FormPropMetadataArgs {
  /**
   * Exclude this property from the form.
   * By default every class property decorated with @Prop or @FormProp is included in the output of
   * a serialization process. Setting Exclude will make sure it is not part of the form.
   *
   * > NOTE: A property decorated with @Prop and @Exclude and WITHOUT a @FormProp decorated is also
   * excluded.
   *
   */
  exclude?: boolean;

  /**
   * Transform the value
   * @param value
   */
  transform?: (value: any) => any;

  /**
   * Definition for element rendering.
   * Set this if you want your models to automatically render into forms.
   */
  render?: RenderDef;

  /**
   * Sugar for adding a required validator
   */
  required?: boolean;

  /**
   * Declares the property as a nested child form.
   * The property type must a complex object.
   * This is has no effect on UI rendering, only used by the mapper.
   */
  childForm?: boolean;

  /**
   * The default value
   */
  defaultValue?: any;

  validators?: ValidatorFn | Array<ValidatorFn>;
  asyncValidators?: AsyncValidatorFn | Array<AsyncValidatorFn>;
}

@tdm.MetaClass<FormModelMetadataArgs, FormModelMetadata>({
  single: true,
  allowOn: ['class']
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
      switch (prop.type) {
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

function extend(from: Map<PropertyKey, FormPropMetadata>, to: Map<PropertyKey, FormPropMetadata> | undefined): Map<PropertyKey, FormPropMetadata> {
  return to
    ? tdm.MapExt.mergeInto(new Map<PropertyKey, FormPropMetadata>(to.entries()), from)
    : new Map<PropertyKey, FormPropMetadata>(from.entries())
    ;
}

@tdm.MetaClass<FormPropMetadataArgs, FormPropMetadata>({
  allowOn: ['member'],
  extend
})
export class FormPropMetadata extends tdm.BaseMetadata {
  transform: (value: any) => any;
  exclude: boolean;
  required: boolean;
  defaultValue: any;
  render: RenderDef;
  validators: Array<ValidatorFn> | null;
  asyncValidators: Array<AsyncValidatorFn> | null;
  childForm: boolean;

  constructor(metaArgs: FormPropMetadataArgs, info: tdm.DecoratorInfo) {
    super(info);
    if (metaArgs) {
      this.transform = metaArgs.transform;
      this.exclude = metaArgs.exclude;
      this.defaultValue = metaArgs.defaultValue;
      this.validators = this.normValidators(metaArgs.validators);
      this.required = metaArgs.required;
      this.asyncValidators = this.normValidators(metaArgs.asyncValidators);
      this.render = !this.exclude && metaArgs.render ? metaArgs.render : {};
      this.childForm = metaArgs.childForm;
    } else {
      this.render = {};
    }
  }

  private normValidators(v: any): any[] | null {
    return !v ? null : Array.isArray(v) ? v : [v];
  }

  static EMPTY = new FormPropMetadata({} as any, { type: 'class'} );
}

/**
 * @propertyDecorator static
 * @param metaArgs
 */
export function FormModel(metaArgs?: FormModelMetadataArgs): (target: Function) => any {
  return formModel(metaArgs) as any;
}
export const formModel = tdm.MetaClass.get(FormModelMetadata).createDecorator(true);
// Split due to angular AOT

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const FormProp = tdm.MetaClass.get(FormPropMetadata).createDecorator(true);

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
        .forEach( ([k, v]) => {
          formModel.addProp(tMeta.getCreateProp(k as any), v);
        });
    }
});

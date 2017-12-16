import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { MetaClass, PropMetadata, BaseMetadata, DecoratorInfo } from '@tdm/core/tdm';
import { RenderDef } from '../../interfaces';

export interface FormPropMetadataArgs {
  /**
   * Exclude this property from the form.
   * By default every class property decorated with @Prop or @FormProp is included in the output of
   * a serialization process. Setting Exclude will make sure it is not part of the form.
   *
   * > NOTE: Setting exclude via `@Exclude` or `@Prop` with `exclude` does not exclude the `@FormProp`.
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
   * Instructions for flattening the object referenced on this property.
   * The property must reference a JS object.
   *
   * flatten properties does not require a render instructions.
   * When set, the property is treated as a plain object regardless of it's type so you can also send plain JS objects.
   *
   * NOTE that FormPropMetadataArgs definitions in a flatten instruction might not support all features.
   */
  flatten?: { [key: string]: FormPropMetadataArgs },

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

export const BASE_RENDERER: RenderDef = {
  ordinal: Number.MAX_SAFE_INTEGER
};

@MetaClass<FormPropMetadataArgs, FormPropMetadata>({
  allowOn: ['member'],
  extend: 'prop',
  proxy: {
    host: PropMetadata,
    containerKey: 'form'
  }
})
export class FormPropMetadata extends BaseMetadata {
  transform: (value: any) => any;
  exclude: boolean;
  required: boolean;
  defaultValue: any;
  render: RenderDef;
  validators: Array<ValidatorFn> | null;
  asyncValidators: Array<AsyncValidatorFn> | null;
  childForm: boolean;
  flatten?: { [key: string]: FormPropMetadata };

  constructor(metaArgs: FormPropMetadataArgs, info: DecoratorInfo) {
    super(info);
    this.render = Object.create(BASE_RENDERER);
    if (metaArgs) {
      this.transform = metaArgs.transform;
      this.exclude = metaArgs.exclude;
      if (metaArgs.hasOwnProperty('defaultValue')) {
        this.defaultValue = metaArgs.defaultValue;
      }
      this.validators = this.normValidators(metaArgs.validators);
      this.required = metaArgs.required;
      this.asyncValidators = this.normValidators(metaArgs.asyncValidators);
      if (!this.exclude && metaArgs.render) {
        Object.assign(this.render, metaArgs.render);
      }
      this.childForm = metaArgs.childForm;
      if (metaArgs.flatten) {
        this.flatten = {};
        for (let key of Object.keys(metaArgs.flatten)) {
          this.flatten[key] = new FormPropMetadata(metaArgs.flatten[key], { type: 'member', name: key });
        }
      }
    }
  }

  private normValidators(v: any): any[] | null {
    return !v ? null : Array.isArray(v) ? v : [v];
  }

  static EMPTY = new FormPropMetadata({} as any, { type: 'class'} );
}

declare module '@tdm/core/tdm/src/metadata/prop' {
  interface PropMetadataArgs {
    form?: FormPropMetadataArgs | undefined
  }
}

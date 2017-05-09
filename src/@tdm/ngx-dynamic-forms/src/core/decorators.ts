import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

import {
  Constructor,
  decoratorInfo,
  decoratorFactory,
  targetStore,
  metaFactoryFactory,
  registerFactory,
  registerEvent,
  MapExt,
  ClassMetadata,
  MetaFactoryInstance,
  TargetMetadata,
  DecoratorInfo,
  BaseMetadata,
  PropMetadata
} from '@tdm/transformation';
import '@tdm/core';

import { RenderDef } from '../interfaces';

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

export class FormModelMetadata {
  validator: ValidatorFn | null;
  asyncValidator: AsyncValidatorFn | null;
  props = new Map<string, FormPropMetadata>();

  constructor(metaArgs: FormModelMetadataArgs | undefined) {
    this.validator = metaArgs.validator || null;
    this.asyncValidator = metaArgs.asyncValidator || null;
  }

  addProp(prop: PropMetadata, metaArgs: FormPropMetadata) {
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

  static metaFactory(metaArgs: FormModelMetadataArgs, target: Function): MetaFactoryInstance<FormModelMetadata> {
    const info = decoratorInfo(target);
      return {
        info,
        target,
        metaClassKey: ClassMetadata,
        metaPropKey: 'formModel',
        metaValue: new FormModelMetadata(metaArgs || {})
      } as any
  }

  static register = registerFactory<FormModelMetadata>();
}

export class FormPropMetadata extends BaseMetadata {
  transform: (value: any) => any;
  exclude: boolean;
  defaultValue: any;
  render: RenderDef;
  validators: Array<ValidatorFn> | null;
  asyncValidators: Array<AsyncValidatorFn> | null;
  childForm: boolean;

  constructor(metaArgs: FormPropMetadataArgs, info: DecoratorInfo) {
    super(info);
    if (metaArgs) {
      this.transform = metaArgs.transform;
      this.exclude = metaArgs.exclude;
      this.defaultValue = metaArgs.defaultValue;
      this.validators = this.normValidators(metaArgs.validators);
      this.asyncValidators = this.normValidators(metaArgs.asyncValidators);
      this.render = !this.exclude && metaArgs.render ? metaArgs.render : {};
      this.childForm = metaArgs.childForm;
    }
  }

  private normValidators(v: any): any[] | null {
    return !v ? null : Array.isArray(v) ? v : [v];
  }

  static EMPTY = new FormPropMetadata({} as any, { type: 'class'} );

  static metaFactory = metaFactoryFactory(FormPropMetadata);

  static register = registerFactory<FormPropMetadata>();

  static extend(from: Map<PropertyKey, FormPropMetadata>, to: Map<PropertyKey, FormPropMetadata> | undefined): Map<PropertyKey, FormPropMetadata> {
    return to
      ? MapExt.mergeInto(new Map<PropertyKey, FormPropMetadata>(to.entries()), from)
      : new Map<PropertyKey, FormPropMetadata>(from.entries())
    ;
  }
}

/**
 * @propertyDecorator static
 * @param metaArgs
 */
export function FormModel(metaArgs?: FormModelMetadataArgs) {
  return (target: Function) => {
    const meta = FormModelMetadata.metaFactory(metaArgs || {}, target);
    FormModelMetadata.register(meta);
  }
}


/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const FormProp = decoratorFactory<FormPropMetadataArgs>(FormPropMetadata, true);

function onBuildMetadata(target: Constructor<any>) {
  const modelProps = targetStore.getMetaFor(target, FormPropMetadata);
  if (modelProps) {
    let formModel = targetStore.getClassProp(target, 'formModel');
    if (!formModel) {
      formModel = new FormModelMetadata(undefined);
      targetStore.setClassProp(target, 'formModel', formModel);
    }

    const meta = targetStore.getTargetMeta(target);
    MapExt.asKeyValArray(modelProps)
      .forEach( ([k, v]) => {
        formModel.addProp(meta.getCreateProp(k as any), v);
      });
  }
}
registerEvent('onBuildMetadata', onBuildMetadata);

declare module '@tdm/transformation/metadata/target-metadata' {
  interface TargetMetadata {
    formModel: FormModelMetadata;
  }
}

declare module '@tdm/transformation/metadata/class-metadata' {
  interface ClassMetadata {
    formModel: FormModelMetadata;
  }
}

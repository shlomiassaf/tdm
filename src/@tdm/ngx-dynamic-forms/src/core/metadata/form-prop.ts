import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import {
  stringify,
  MetaClass,
  PropMetadata,
  BaseMetadata,
  DecoratorInfo,
  TypeMetadataArgs,
  Constructor,
  TypeMetadata
} from '@tdm/core/tdm';
import { RenderDef, FormElementType } from '../../interfaces';

export interface FormPropMetadataArgs<T extends keyof FormElementType = keyof FormElementType> {
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
  render?: RenderDef<T>;

  /**
   * Sugar for adding a required validator
   */
  required?: boolean;

  /**
   * Flattens the rendering of an object or an array of objects into the root so they are rendered in the root level
   * with other properties on the instance.
   *
   * A flattening definitions is a key -> value map where key's are the properties of the type decorated and the values
   * are [[FormPropMetadataArgs]] for each property, it's sort of manual form control definition for a type.
   *
   * A flatten definition is defined on [[[[FormPropMetadataArgs]]]] and creates internal [[FormPropMetadataArgs]]
   * values so we can say that it is recursive, i.e. you can define a flatten definition with one or more of the
   * children having flatten definitions of their own and the same for the children of the children...
   *
   * Notice that flattening apply only on the rendering, it does not change the structure of the model and the generated
   * form structure is identical to the model structure.
   *
   * The library will manage the transformation to and from the UI.
   *
   * ## Arrays
   * When a flatten definition decorates an Array of T the array should be ignored and the definition should reflect the
   * type of T, the fact that the type is and Array of T should not make a difference and the library will take that
   * into account.
   *
   * NOTE: When decorating an Array of T, make sure to include the type, either in `@Prop` metadata or in the
   * `rtType` property in [[FormPropMetadataArgs]] or it will register as Array<Object>.
   *
   * > Must decorate an object or array of objects, primitives are not allowed.
   * Instructions for flattening the object referenced on this property.
   * The property must reference a JS object.
   *
   * flatten properties does not require a render instructions.
   * When set, the property is treated as a plain object regardless of it's type so you can also send plain JS objects.
   *
   * NOTE: [[FormPropMetadataArgs]] definitions in a flatten instruction might not support all features.
   *       If you want to maximize use make sure to manually define the run-time types.
   */
  flatten?: { [key: string]: FormPropMetadataArgs };

  /**
   * Declares the property as a nested child form.
   * The property type must a complex object.
   * This has no effect on UI rendering, only used by the mapper.
   */
  childForm?: boolean;

  /**
   * Type definition declaration to be used by the form builder.
   * Setting type definition overrides any existing type definition, explicit or implicit.
   *
   * ## When to use:
   * `@tdm` identify the type automatically (implicit) but you can also use the `@Prop` decorator and explicitly set the
   * type using a type getter or the type directly (see [[PropMetadataArgs.type]]).
   *
   * When `rtType` is not set the form builder will use the existing type information, this is the recommended approach.
   *
   * You would want to use `rtType` when:
   *   1. The existing type information is not enough AND
   *   2. The property is not decorated with `@Prop`
   *
   * (1) The existing type information is usually enough but in some cases it requires manual definition done in using
   * the `@Prop` decorator, these are the most common scenarios:
   *   - Circular module dependency
   *   SEE https://blog.angularindepth.com/what-is-forwardref-in-angular-and-why-we-need-it-6ecefb417d48
   *   - When using `this` or `any` type
   *   - When using Array of T (e.g. `string[]` or `Array<number>`)
   *   SEE https://github.com/Microsoft/TypeScript/issues/7169
   *
   * (2)
   * It is not mandatory to decorate a property with `@Prop` when decorating it with `@FormProp`, i.e. `@FormProp` can
   * be the only decorator for a property.
   * An example would be a property in a model/resource that is only required for the form and it is not part of the
   * resource.
   *
   * If both (1) and (2) exist you would need to define a the type information using `rtType`.
   * If only (1) exists use `@Prop` to define the type information, this will help with consistency.
   *
   * It might be that you will need `rtType` in other scenarios, if so remember that it will override all existing type
   * information for the form builder only.
   *
   * ## How to use:
   * The builder will auto-set missing or unset type information, if exists.
   * Set [[TypeDefinition.ref]] property to the type, or a type getter function.
   * Set [[TypeDefinition.forwardRef]] property to true, only then using type getter function in `ref`
   * Set [[TypeDefinition.isArray]] property when defining a property in a `flatten` definition or when the type
   * annotation for the property is not an array, otherwise this value is automatically set by the builder
   *
   * SEE [[TypeMetadataArgs]] for more information
   */
  rtType?: TypeMetadataArgs;

  /**
   * The default value
   */
  defaultValue?: any;

  validators?: ValidatorFn | ValidatorFn[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];
}

export const BASE_RENDERER: RenderDef = {
  vType: 'none',
  ordinal: Number.MAX_SAFE_INTEGER
};

@MetaClass<FormPropMetadataArgs, FormPropMetadata>({
  allowOn: [ 'member' ],
  extend: 'mergeMap',
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
  validators: ValidatorFn | ValidatorFn[] | null;
  asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null;
  childForm: boolean;
  flatten?: { [key: string]: FormPropMetadata };
  rtType?: TypeMetadata;

  constructor(metaArgs: FormPropMetadataArgs, info: DecoratorInfo, target?: Constructor<any>) {
    super(info);
    this.render = Object.create(BASE_RENDERER);
    if ( metaArgs ) {
      this.transform = metaArgs.transform;
      this.exclude = metaArgs.exclude;
      if ( metaArgs.hasOwnProperty('defaultValue') ) {
        this.defaultValue = metaArgs.defaultValue;
      }

      this.required = metaArgs.required;
      this.validators = metaArgs.validators || null;
      this.asyncValidators = metaArgs.asyncValidators || null;
      if ( !this.exclude && metaArgs.render ) {
        if (!metaArgs.render.vType) {
          throw new Error(`Invalid property type or type not set in ${stringify(target)}.${info.name}`);
        }
        Object.assign(this.render, metaArgs.render);
      }

      if ( metaArgs.childForm ) {
        // TODO: If childForm, check type and see type is a FormModel as well
        //       This requires some thinking because at this point the type might be undefined if it's a getter.
        if (!this.render.vType) {
          this.render.vType = 'form';
        }
        this.childForm = true;
      }

      if ( metaArgs.rtType ) {
        this.rtType = new TypeMetadata(metaArgs.rtType, info, target);
      }

      if ( metaArgs.flatten ) {
        this.flatten = {};
        for ( let key of Object.keys(metaArgs.flatten) ) {
          this.flatten[ key ] = new FormPropMetadata(metaArgs.flatten[ key ], { type: 'member', name: key });
        }
      }
    }
  }

  static EMPTY = new FormPropMetadata({} as any, { type: 'class' });
}

declare module '@tdm/core/tdm/src/metadata/prop' {
  interface PropMetadataArgs {
    form?: FormPropMetadataArgs | undefined;
  }
}

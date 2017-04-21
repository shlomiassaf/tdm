import { Injectable } from '@angular/core';
import { targetStore, PropMetadata, Constructor } from '@tdm/transformation';
import { TDMModelForm } from './tdm-model-form';

export interface FormElementType {
  /**
   * A generic text type.
   * This type is auto-assigned when no type is set and the property type is String
   */
  text: 'text';

  /**
   * A generic boolean type.
   * This type is auto-assigned when no type is set and the property type is Boolean
   */
  boolean: 'boolean';

  /**
   * A generic number type.
   * This type is auto-assigned when no type is set and the property type is Number
   */
  number: 'number';

  /**
   * A generic select type.
   */
  array: 'array';
}

/**
 * Represents render definitions for an element
 */
export interface RenderDef {
  /**
   * The order
   */
  ordinal?: number;

  /**
   * The label to display (i.e. placeholder)
   */
  label?: string;

  /**
   * The type of the element.
   * If none set the library will try to assign a primitive (string, number or boolean)
   */
  type?: keyof FormElementType;

  required?: boolean;
  min?: any;
  max?: any;
  selections?: any[];

}

export interface RenderInstruction extends RenderDef {
  name: string;
}

/**
 * A service for creating new instances of TDMModelForm
 */
@Injectable()
export class TDMModelFormService {

  getInstructions(type: any): RenderInstruction[] {
    // TODO: cache
    const props = targetStore.getTargetMeta(type).getValues(PropMetadata);
    const formMeta = targetStore.getClassProp(type, 'formModel');
    return props.map( p => {
      const formProp = formMeta.getProp(p.name as string);
      if (formProp && formProp.exclude) {
        return undefined;
      } else {
        return Object.assign( { name: p.name as string }, (formProp && formProp.render) || {} )
      }
    })
      .filter( v => !!v);
  }

  create<T>(instance: T, type?: Constructor<T>): TDMModelForm<T> {
    const tdmModelForm = new TDMModelForm<T>(this);
    tdmModelForm.setContext(instance, type);
    return tdmModelForm;
  }
}

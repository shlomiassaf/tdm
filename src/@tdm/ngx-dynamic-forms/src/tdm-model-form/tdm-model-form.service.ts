import { Injectable, Type } from '@angular/core';
import { targetStore, PropMetadata } from '@tdm/core/tdm';
import { TDMModelForm } from './tdm-model-form';

import { FormModelMetadata } from '../core/index';
import { RenderInstruction } from '../interfaces';

/**
 * A service for creating new instances of TDMModelForm
 */
@Injectable()
export class TDMModelFormService {
  private cache = new Map<Type<any>, RenderInstruction[]>();

  getMeta(type: Type<any>): FormModelMetadata {
    return type
      ? targetStore.getMetaFor(type, FormModelMetadata, true)
      : undefined
  }

  getInstructions(type: Type<any>): RenderInstruction[] {
    return this.cache.get(type) || this._getInstructions(type);
  }

  create<T>(instance: T, type?: Type<T>): TDMModelForm<T> {
    const tdmModelForm = new TDMModelForm<T>(this);
    tdmModelForm.setContext(instance, type);
    return tdmModelForm;
  }

  private _getInstructions(type: Type<any>): RenderInstruction[] {
    const props = targetStore.getTargetMeta(type).getValues(PropMetadata);
    const formMeta = this.getMeta(type);
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
}

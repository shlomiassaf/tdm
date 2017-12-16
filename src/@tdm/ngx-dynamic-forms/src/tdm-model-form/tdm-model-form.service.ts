import { Injectable, Type } from '@angular/core';
import { targetStore, PropMetadata } from '@tdm/core/tdm';
import { TDMModelForm } from './tdm-model-form';

import { BASE_RENDERER, FormModelMetadata, FormPropMetadata } from '../core/index';
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
    ;
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
    const instructions: RenderInstruction[] = [];
    props.forEach( p => {
      const formProp = formMeta.getProp(p.name as string);
      if (!formProp) {
        instructions.push(Object.create(BASE_RENDERER, { name: { value: p.name } }));
      } else if (!formProp.exclude) {
        if (formProp.flatten) {
          this.applyFlatten(formProp.flatten, [p.name as string], instructions);
        } else {
          instructions.push(Object.create(formProp.render, { name: { value: p.name } }));
        }
      }
    });
    return instructions;
  }

  private applyFlatten(props: { [keys: string]: FormPropMetadata },
                       path: Array<string | number>,
                       instructions: RenderInstruction[]): void {
    for (let key of Object.keys(props)) {
      const p = props[key];
      if (p.flatten) {
        this.applyFlatten(p.flatten, path.concat([key]), instructions);
      } else {
        instructions.push(Object.create(p.render, { name: { value: key }, flattened: { value: path } }));
      }
    }
  }
}

import { Injectable, Type } from '@angular/core';
import { targetStore, PropMetadata } from '@tdm/core/tdm';
import { TDMModelForm } from './tdm-model-form';
import { RenderInstruction } from './render-instruction';

import { BASE_RENDERER, FormModelMetadata, FormPropMetadata } from '../core/index';

function createRI(formProp: FormPropMetadata,
                  name: string,
                  assign: any,
                  parent?: RenderInstruction): RenderInstruction {
  const renderInstructions = new RenderInstruction(formProp.render, name, parent);
  if (formProp.required) {
    renderInstructions.required = true;
  }
  Object.assign(renderInstructions, assign);
  return renderInstructions;
}

function createVRI(formProp: FormPropMetadata,
                   name: string,
                   parent?: RenderInstruction): RenderInstruction {
  return createRI(formProp, name, { isPrimitive: false, isVirtual: true }, parent);
}

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
    for (let p of props) {
      const formProp = formMeta.getProp(p.name as string);
      if (!formProp) {
        instructions.push(new RenderInstruction(BASE_RENDERER, p.name as string));
      } else if (!formProp.exclude) {
        const typeMeta = formProp.rtType || p.type;

        let localInstructions: RenderInstruction[] = instructions;
        let name: PropertyKey  = p.name;
        let parent: RenderInstruction;
        const isPrimitive = !(formProp.flatten || formProp.childForm);
        if (typeMeta && typeMeta.isArray) {
          parent = createRI(formProp, name as string, { isArray: true, isPrimitive, children: localInstructions = [] });
          instructions.push(parent);
          // name = '[]';
        }

        if (formProp.flatten) {
          this.applyFlatten(
            formProp.flatten,
            [name as string],
            localInstructions,
            createVRI(formProp, name as string, parent)
          );
        } else {
          localInstructions.push(createRI(formProp, name as string, { isPrimitive }, parent));
        }
      }
    }
    return instructions;
  }

  private applyFlatten(props: { [keys: string]: FormPropMetadata },
                       path: Array<string | number>,
                       instructions: RenderInstruction[],
                       parent: RenderInstruction): void {
    for (let key of Object.keys(props)) {
      const p = props[key];
      if (p.flatten) {
        this.applyFlatten(p.flatten, path.concat([key]), instructions, createVRI(p, key, parent));
      } else {
        const isPrimitive = !p.childForm;
        instructions.push(createRI(p, key as string, { isPrimitive, flattened: path }, parent));
      }
    }
  }
}

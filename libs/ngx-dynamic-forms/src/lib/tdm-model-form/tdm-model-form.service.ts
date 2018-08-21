import { Injectable, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { targetStore, PropMetadata } from '@tdm/core/tdm';
import { TDMModelForm } from './tdm-model-form';
import { RenderInstruction } from './render-instruction';
import { PropNotifier, PropNotifyHandler } from '../prop-notify';

import { FormModelMetadata, FormPropMetadata } from '../core/index';

function createRI(
  formProp: FormPropMetadata,
  name: string,
  assign: any,
  parent?: RenderInstruction
): RenderInstruction {
  const renderInstructions = new RenderInstruction(name, formProp, parent);

  Object.assign(renderInstructions, assign);
  return renderInstructions;
}

function createVRI(
  formProp: FormPropMetadata,
  name: string,
  parent?: RenderInstruction
): RenderInstruction {
  return createRI(
    formProp,
    name,
    { isPrimitive: false, isVirtual: true, virtualChildren: [] },
    parent
  );
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
      : undefined;
  }

  getInstructions(type: Type<any>): RenderInstruction[] {
    return this.cache.get(type) || this._getInstructions(type);
  }

  create<T>(instance: T): TDMModelForm<T>;
  create<T>(instance: T, type: Type<T>): TDMModelForm<T>;
  create<T>(instance: T, formGroup: FormGroup): TDMModelForm<T>;
  create<T>(instance: T, type: Type<T>, formGroup: FormGroup): TDMModelForm<T>;
  create<T>(instance: T, type?: Type<T> | FormGroup, formGroup?: FormGroup): TDMModelForm<T> {
    const tdmModelForm = new TDMModelForm<T>(this);
    tdmModelForm.setContext(instance, <any>type, formGroup);
    return tdmModelForm;
  }

  /**
   * Returns a clone function for cloning [[RenderInstruction]] instances.
   * The clone function returned can be used to clone a single cycle of instructions returned from
   * [[TDMModelFormService.getInstructions]] so create a new clone function for each iteration cycle.
   *
   * We need to clone [[RenderInstruction]] because they represent metadata while a form represents a single instance
   * that re-occurs thus can not change the metadata and must use a copy.
   * Instead of recreating the metadata over and over we just use JS's prototype to create layers over the metadata that
   * act as instances while not duplicating the data.
   */
  createRICloneFactory<T extends RenderInstruction>(
    propChange?: PropNotifyHandler
  ): (ri: T) => T {
    // We clone a [[RenderInstruction]] by creating a new layer in the prototype chain so the current layer can not be
    // changed by assigning but can be used when retrieving, this saves space and time.
    // Usually Object.create() is the only thing we need but there are 2 special cases: Arrays and `flatten` expressions
    // Array's and `flatten` expressions (virtual rendering instruction) which requires special attention.
    //
    // Array's represent a [[RenderInstruction]] for a property of type Array<T> where the [[RenderInstruction]]
    // instance represents the array and the `children` property in it represents a list of [[RenderInstruction]]
    // instances representing T. The children are not part of the rendering instructions, only the array it self so when
    // cloning the children are not cloned so we need to handle them internally.
    //
    // Virtual's (flatten expressions) represent a form group which get's converted into a list of [[RenderInstruction]]
    // instances with the virtual as parent but the virtual itself is never a part of the instructions.
    // So, when cloning, we also need to clone the virtual but we need to make sure not to clone it multiple times as
    // next call's will be from another child of the same virtual. We do that by using a map to make sure we are
    // cloning a virtual one time only. This is why a clone function is good for one cycle.

    // map for storing used virtual's
    const parentMap = new Map<any, any>();
    const propNotifier: {
      [P in keyof PropNotifier]?: { value: PropNotifier[P] }
    } = propChange ? { onPropChange: { value: propChange } } : undefined;
    const riClone = <Z extends RenderInstruction>(renderInstruction: Z): Z => {
      const rd: Z = Object.create(renderInstruction, propNotifier);
      if (rd.isArray) {
        rd.children = rd.children.map(c => riClone(c));
        // we take 1 child and climb up till we get to the virtual that has this array as parent
        // we set this array as that parent, replaces the before-cloned value.
        // we only need one child as it is a reference.
        let c = rd.children[0];
        while (c) {
          if (c.parent === renderInstruction) {
            c.parent = rd;
            c = null;
          } else {
            c = c.parent;
          }
        }
      } else if (rd.parent && rd.parent.isVirtual) {
        let parent = parentMap.get(rd.parent);
        if (!parent) {
          parent = riClone(rd.parent);
          parent.virtualChildren = [];
          parentMap.set(rd.parent, parent);
        }
        rd.parent = parent;
        parent.virtualChildren.push(rd);
      }
      return rd;
    };
    return riClone;
  }

  private _getInstructions(type: Type<any>): RenderInstruction[] {
    // NOTE: The logic for creating instructions is tightly coupled with the logic for cloning the instructions.
    //       Make sure changes in the logic are reflected in `createRICloner()`
    const props = targetStore.getTargetMeta(type).getValues(PropMetadata);
    const formMeta = this.getMeta(type);
    const instructions: RenderInstruction[] = [];
    for (let p of props) {
      const formProp = formMeta.getProp(p.name as string);
      if (!formProp) {
        instructions.push(new RenderInstruction(p.name as string));
      } else if (!formProp.exclude) {
        const typeMeta = formProp.rtType || p.type;

        let localInstructions: RenderInstruction[] = instructions;
        let name: TdmPropertyKey = p.name;
        let parent: RenderInstruction;
        const isPrimitive = !(formProp.flatten || formProp.childForm);
        if (typeMeta && typeMeta.isArray) {
          parent = createRI(formProp, name as string, {
            isArray: true,
            isPrimitive,
            children: (localInstructions = [])
          });
          instructions.push(parent);
        }

        if (formProp.flatten) {
          this.applyFlatten(
            formProp.flatten,
            [name as string],
            localInstructions,
            createVRI(formProp, name as string, parent),
            parent && parent.isArray ? 0 : undefined
          );
        } else {
          localInstructions.push(
            createRI(formProp, name as string, { isPrimitive }, parent)
          );
        }
      }
    }
    this.cache.set(type, instructions);
    return instructions;
  }

  private applyFlatten(
    props: { [keys: string]: FormPropMetadata },
    path: Array<string | number>,
    instructions: RenderInstruction[],
    parent: RenderInstruction,
    // -1000 should be low enough :)
    depthFromArray: number = -1000
  ): void {
    /* The `depthFromArray` marks the nested object count from the last array up in the parent tree
       The depth 0 means the immediate child of the array and so on...
       When the depth is negative (or not set) it means that there is no array ancestor.
     */
    const arrayPath =
      depthFromArray > 0
        ? path.slice(path.length - depthFromArray).join('.') + '.'
        : '';

    for (let key of Object.keys(props)) {
      const p = props[key];
      const isPrimitive = !(p.flatten || p.childForm);
      const isArray = p.rtType && p.rtType.isArray;
      const localInstructions: RenderInstruction[] = isArray
        ? []
        : instructions;

      if (p.rtType && p.rtType.isArray) {
        parent = createRI(
          p,
          key as string,
          { isArray, isPrimitive, children: localInstructions },
          parent
        );
        instructions.push(parent);
        // we set to -1 so it will bump to 0 if `p.flatten`, making the first item in depth 0 since current item is
        // the array. If no `p.flatten` then it's a primitive and we don't want `_arrayPath` for primitive arrays.
        depthFromArray = -1;
      }

      if (p.flatten) {
        const len = localInstructions.length;
        this.applyFlatten(
          p.flatten,
          path.concat([key]),
          localInstructions,
          createVRI(p, key, parent),
          depthFromArray + 1
        );

        // if localInstructions added, get the parent of the last added, it's a virtual child
        if (localInstructions.length > len) {
          parent.virtualChildren.push(
            localInstructions[localInstructions.length - 1].parent
          );
        }
      } else {
        const renderInstruction = createRI(
          p,
          key as string,
          { isPrimitive, flattened: path },
          parent
        );
        parent.virtualChildren.push(renderInstruction);
        localInstructions.push(renderInstruction);
        if (depthFromArray >= 0) {
          renderInstruction._arrayPath = arrayPath + renderInstruction.name;
        }
      }
    }
  }
}

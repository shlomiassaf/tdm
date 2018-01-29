import { Type } from '@angular/core';
import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';

import { stringify, isNumber } from '@tdm/core/tdm';
import { FormModelMetadata, NgFormsBoundMapper } from '../core/index';
import { TDMModelFormService } from './tdm-model-form.service';
import { RenderInstruction } from './render-instruction';
import { createControl } from '../create-control';

export interface DynamicFormControlRenderer {
  item: RenderInstruction;
  tdmForm: TDMModelForm<any>;
  fArray: FormArray | undefined;
  fControl: FormControl | undefined;
  fGroup: FormGroup | undefined;

  tdmOnControlContextInit?(): void ;
}

function getFormIsNotArrayErrorMessage(value: AbstractControl | undefined): string {
  const got = value ? 'undefined' : stringify(value.constructor);
  return `A control can only be added to a form array instance, got ${ got }`;
}

/**
 * A container that binds a model instance and and a `FormGroup` instance.
 *
 * This class is a facade, it simplifies the logic and low level operations required to bind a model
 * and a form:
 *   - mapping between model and form (serialization and deserialization)
 *   - exposing rendering instructions for a model (the instructions are used to render form elements)
 */
export class TDMModelForm<T = any> {

  form: FormGroup;

  get model(): T {
    return this._model;
  }

  get type(): Type<T> {
    return this._type;
  }

  get ready(): boolean {
    return this._ready;
  }
  /**
   * The render instructions for the TDMModel type of this instance.
   * @returns
   */
  get renderData(): RenderInstruction[] {
    return this.modelFormService.getInstructions(this.type);
  }

  private mapper: NgFormsBoundMapper<any>;
  private formMeta: FormModelMetadata;
  private _type: Type<T>;
  private _model: T;
  private _ready: boolean;

  constructor(protected modelFormService: TDMModelFormService) { }

  /**
   * Returns the control for from the provided `path`.
   *
   * > This is method is just sugar for `tDMModelFormInstance.form.get(path)`
   *
   * @param path The path, relative to the root form. Accepts the same types as `AbstractControl.get`.
   * See {@link https://angular.io/api/forms/AbstractControl#get}
   */
  get(path: Array<string | number> | string): AbstractControl | null {
    return this.form.get(path);
  }

  /**
   * Gets's a value from the provided `path`.
   *
   * > This is method is just sugar for `tDMModelFormInstance.form.get(path).value`
   *
   * @param path The path, relative to the root form. Accepts the same types as `AbstractControl.get`.
   * See {@link https://angular.io/api/forms/AbstractControl#get}
   */
  getValue(path: Array<string | number> | string): any | null {
    const c = this.form.get(path);
    return c ? c.value : null;
  }

  /**
   * Set's the provided `value` in the provided `path`. The path is applied from the root form.
   *
   * > This is method is just sugar for `tDMModelFormInstance.form.get(path).setValue(value)`
   *
   * @param path The path, relative to the root form. Accepts the same types as `AbstractControl.get`.
   * See {@link https://angular.io/api/forms/AbstractControl#get}
   * @param value The value to apply on the control retrieved from path
   * @param options
   */
  setValue(path: Array<string | number> | string, value: any, options?: any): void {
    this.form.get(path).setValue(value, options);
  }

  hasError(errorCode: string, path: keyof T): boolean {
    return this.form.hasError(errorCode, path as any);
  }

  /**
   * Adds a new form control to a FormArray instance at the provided path.
   *
   * This is a utility method for easy add/remove operations on UI form's with a FormArray instance.
   *
   * @param path The path, relative to the root form. Accepts the same types as `AbstractControl.get`.
   * See {@link https://angular.io/api/forms/AbstractControl#get}
   * @param value An existing value that represents the value of the new form control, if not set the form control will
   * have no value (i.e. represents a new instance of the model).
   */
  appendControl(path: Array<string | number> | string, value?: any): FormGroup | FormControl {
    const formArray = this.form.get(path);
    if (formArray instanceof FormArray) {
      const isNumberRe = /^\d+$/;
      // we got the instance, now move to type metadata world where all array index references, if exist, must go out.
      const pathArr = Array.isArray(path)
        ? path.filter( n => !isNumber(n) )
        : path.split('.').filter( v => !isNumberRe.test(v) )
      ;
      const ctrl = createControl(this.type, [<any> pathArr.shift(), pathArr.join('.')], value);
      formArray.push(ctrl);
      return ctrl;
    } else {
      throw new Error(getFormIsNotArrayErrorMessage(formArray));
    }
  }

  /**
   * Removes a form control in the provided index from a FormArray instance at the provided path.
   *
   * This is a utility method for easy add/remove operations on UI form's with a FormArray instance.
   *
   * @param path The path, relative to the root form. Accepts the same types as `AbstractControl.get`.
   * See {@link https://angular.io/api/forms/AbstractControl#get}
   * @param query The index at the form array to remove at or a form control instance to remove from the form array.
   * @returns The removed control or undefined if nothing was removed.
   */
  removeControl(path: Array<string | number> | string, query: number | AbstractControl): AbstractControl | undefined {
    const formArray = this.form.get(path);
    if (formArray instanceof FormArray) {
      const idx = isNumber(query) ? query : formArray.controls.indexOf(query);
      const ctrl = formArray.controls[idx];
      if (ctrl) {
        formArray.removeAt(idx);
      }
      return ctrl;
    } else {
      throw new Error(getFormIsNotArrayErrorMessage(formArray));
    }
  }

  /**
   * Set the context for this the form.
   * @param instance The TDModel instance
   * @param type The TDModel class, if not set instance.constructor is the default.
   */
  setContext(instance: T, type?: Type<T>) {
    if (!type) {
      type = <any> instance.constructor;
    }

    if (this._model === instance && this._type === type) {
      return;
    }

    if (this._type !== type) {
      this.formMeta = this.modelFormService.getMeta(type);
      this._type = type;
    }

    if (this._model !== instance) {
      this._model = instance;
    }

    this.update();
  }

  /**
   * A helper function for an *ngFor "trackBy" handler.
   * > It is not recommended to change the trackBy logic when using `dynamic-form` component, the change detection logic
   * is based on it.
   * @param idx
   * @param item
   * @returns
   */
  trackBy(idx: number, item: RenderInstruction): any {
    return item.hash;
  }

  /**
   * Commit the form data into the model instance. (deserialize)
   *
   * Note that the response might be true even if the form was not dirty.
   * The response is always true when onlyIfDirty === false.
   * If onlyIfDirty is true and the form is NOT dirty, only then the response is false.
   *
   * @param onlyIfDirty if true will commit only if the form is dirty
   * @returns Did it commit (deserialize)
   */
  commitToModel(onlyIfDirty?: boolean): boolean {
    if (onlyIfDirty === true && !this.form.dirty) {
      return false;
    }
    this.mapper.deserialize();
    return true;
  }

  bindRenderingData(controlRenderer: DynamicFormControlRenderer,
                    renderData: RenderInstruction): void {
    controlRenderer.tdmForm = this;
    controlRenderer.fGroup = renderData.flattened
      ? this.form.get(renderData.flattened) as FormGroup
      : this.form
    ;
    if (renderData.isArray) {
      controlRenderer.fArray = <any> controlRenderer.fGroup.get(renderData.name);
    } else {
      controlRenderer.fControl = <any> controlRenderer.fGroup.get(renderData.name);
    }
    controlRenderer.item = renderData;
  }

  protected update(): void {
    if (this._type && this._model) {
      this.mapper = new NgFormsBoundMapper(this._type, this.model);
      this.form = this.mapper.serialize();
      this._ready = true;
    } else {
      this.mapper = this.form = undefined;
      this._ready = false;
    }
  }
}

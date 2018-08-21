import { Type } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormArray,
  FormControl
} from '@angular/forms';

import { stringify, isNumber } from '@tdm/core/tdm';
import {
  FormModelMetadata,
  FormPropMetadata,
  NgFormsBoundMapper,
  NgFormsSerializeMapper
} from '../core/index';
import { createControl } from '../create-control';
import { TDMModelFormService } from './tdm-model-form.service';
import { RenderInstruction } from './render-instruction';
import { PropNotifyHandler, PropChanges } from '../prop-notify';

export interface DynamicControlRenderContext {
  item: RenderInstruction;
  tdmForm: TDMModelForm<any>;
  fArray?: FormArray | undefined;
  fControl?: FormControl | undefined;
  fGroup?: FormGroup | undefined;

  tdmOnControlContextInit?(): void;
}

function getFormIsNotArrayErrorMessage(
  value: AbstractControl | undefined
): string {
  const got = value ? 'undefined' : stringify(value.constructor);
  return `A control can only be added to a form array instance, got ${got}`;
}

/**
 * Takes a path and removes all array references.
 * returns a tuple [immidiate prop name, rest of the path]
 */
function normalizeFormPath<T = any>(
  path: Array<string | number> | string
): [keyof T, string] {
  const isNumberRe = /^\d+$/;
  const pathArr = Array.isArray(path)
    ? path.filter(n => !isNumber(n))
    : path.split('.').filter(v => !isNumberRe.test(v));
  return [<any>pathArr.shift(), pathArr.join('.')];
}

/**
 * A container that binds a model instance and and a `FormGroup` instance.
 *
 * This class is a facade, it simplifies the logic and low level operations required to bind a model
 * and a form:
 *   - mapping between model and form (serialization and deserialization)
 *   - exposing rendering instructions for a model (the instructions are used to render form elements)
 */
export class TDMModelForm<T = any> implements PropNotifyHandler {
  form: FormGroup;

  /**
   * When set, will proxy all incoming property changes from RenderInstruction to this handler.
   */
  set propNotifyHandler(value: PropNotifyHandler) {
    this.onPropChange = value.onPropChange.bind(value);
  }

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
    if (!this._renderData) {
      const clone = this.modelFormService.createRICloneFactory<any>(this);
      this._renderData = this.modelFormService
        .getInstructions(this.type)
        .map(clone);
    }
    return this._renderData;
  }

  private _renderData: RenderInstruction[];
  private mapper: NgFormsBoundMapper<any>;
  private formMeta: FormModelMetadata;
  private _type: Type<T>;
  private _model: T;
  private _ready: boolean;

  constructor(protected modelFormService: TDMModelFormService) {}

  onPropChange(
    ri: RenderInstruction,
    changes: PropChanges<RenderInstruction>
  ): void {} // tslint:disable-line

  /**
   * Retrieves a child control given the control's name or path.
   *
   * > This is method is just sugar for `tDMModelFormInstance.form.get(path)`
   *
   * @param path The path (runtime), relative to the root form. Accepts the same types as `AbstractControl.get`.
   * See {@link https://angular.io/api/forms/AbstractControl#get}
   */
  get(path: Array<string | number> | string): AbstractControl | null {
    return this.form.get(path);
  }

  /**
   * Retrieves the value of a child control given the control's name or path.
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
   * Retrieves a value from the model given a name or path.
   * Paths can be passed in as an array or a string delimited by a dot.
   *
   * This method does the same thing `getValue` with one difference, the context the `path` is applied on.
   * This methods returns the resolved value using the model instance as the context.
   * `getValue` returns the resolved value using the root form control value as the context.
   */
  getValueModel(path: Array<string | number> | string): any | null;
  getValueModel(item: RenderInstruction, control: AbstractControl): any | null;
  getValueModel(
    path: Array<string | number> | string | RenderInstruction,
    control?: AbstractControl
  ): any | null {
    const pathArr =
      path instanceof RenderInstruction
        ? path.getRuntimePath(control).split('.')
        : Array.isArray(path) ? path : path.split('.');

    let m = this.model;
    for (let p of pathArr) {
      m = m[p];
      if (!m) {
        break;
      }
    }
    return m;
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
  setValue(
    path: Array<string | number> | string,
    value: any,
    options?: any
  ): void {
    this.form.get(path).setValue(value, options);
  }

  hasError(errorCode: string, path: keyof T): boolean {
    return this.form.hasError(errorCode, path as any);
  }

  /**
   * Sync's the model with the form.
   * When `patch` is true will perform a silent update without throwing when structure does not match.
   * Running this method is a identical to calling patchValue / setValue on the form with the model instance.
   */
  sync(
    patch: boolean = true,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void {
    if (patch) {
      this.form.patchValue(this.model, options);
    } else {
      this.form.setValue(this.model, options);
    }
  }

  /**
   * Reset's the form and sync's it with the model.
   *
   * This method has no effect when a hot bind is set between the model and the form, it will reset the form
   * and sync it with the model in it's current state.
   */
  reset(options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    for (let r of this.renderData) {
      if (r.isArray) {
        const formArray: FormArray = <any>this.get(r.fullName);
        if (
          this.resetFormArray(
            formArray,
            this.getValueModel(r, formArray),
            r.fullName
          )
        ) {
          r.markAsChanged();
        }
      }
      // TODO: move resetControl to here, with optional `path` param
      // TODO: handle standalone childForm in here
    }
    this.form.reset(this._model, options);
  }

  /**
   * Like reset but for a specific control.
   */
  resetControl(path: Array<string | number> | string): void {
    const pathArr = normalizeFormPath<T>(path);
    const value = this.getValueModel(path);
    const formProp = this.getFormProp(pathArr);
    const control = this.get(path);
    if (control instanceof FormArray) {
      this.resetFormArray(control, value, pathArr.join('.'));
    } else if (formProp.childForm && !(control.parent instanceof FormArray)) {
      // standalone child form will recreate itself, this will set the control to FormControl if it's null
      control.parent.setControl(
        <any>formProp.name,
        this.createControl(pathArr.join('.'), value, false)
      );
    } else {
      control.reset(value);
    }
  }

  createChildForm<Z = any>(path: Array<string | number> | string,  model?: Z, formGroup?: FormGroup): TDMModelForm<Z> {
    const pathArr = normalizeFormPath<T>(path);
    const formProp = this.getFormProp(pathArr);
    if (!formProp.childForm) {
      throw new Error(
        `Form property metadata ${pathArr.join('.')} for type ${stringify(
          this.type
        )} is not a "childForm"`
      );
    } else {
      if (!model) {
        model = new formProp.rtType.ref();
      }
      return this.modelFormService.create(
        model,
        formProp.rtType.ref,
        formGroup
      );
    }
  }

  /**
   * Create a new form control based on the type at `path`.
   * See `createControl` for details.
   *
   * @param path The path (static), relative to the root form.
   * Accepts the same types as `AbstractControl.get`. See {@link https://angular.io/api/forms/AbstractControl#get}
   *
   * @param value An existing value that represents the value of the new form control, if not set the form control will
   * have no value  (i.e. represents a new instance of the model).
   *
   * @param tryCreateNew When true and value is undefined or null, will try to create new value with the new keyword
   * using the type at the path.
   */
  createControl(path: string[] | string, value?: any, tryCreateNew?: boolean): FormGroup | FormControl {
    return createControl(this.type, normalizeFormPath<T>(path), value, tryCreateNew);
  }

  /**
   * Adds a new form control to a FormArray instance at the provided path.
   * See `createControl` for details.
   *
   * This is a utility method for easy add/remove operations on UI form's with a FormArray instance.
   *
   * @param path The path (static), relative to the root form.
   * Accepts the same types as `AbstractControl.get`. See {@link https://angular.io/api/forms/AbstractControl#get}
   *
   * @param value An existing value that represents the value of the new form control, if not set the form control will
   * have no value (i.e. represents a new instance of the model).
   *
   * @param tryCreateNew When true and value is undefined or null, will try to create new value with the new keyword
   * using the type at the path.
   */
  appendControl(
    path: Array<string | number> | string,
    value?: any,
    tryCreateNew?: boolean
  ): FormGroup | FormControl {
    const formArray = this.form.get(path);
    if (formArray instanceof FormArray) {
      // we got the instance, now move to type metadata world where all array index references, if exist, must go out.
      const pathArr = normalizeFormPath(path);
      const ctrl = createControl(this.type, <any>pathArr, value, tryCreateNew);
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
  removeControl(
    path: Array<string | number> | string,
    query: number | AbstractControl
  ): AbstractControl | undefined {
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
   * @param formGroup An optional [[FormGroup]] instance, if set it will be used instead of serializing a new one
   */
  setContext(instance: T): void;
  setContext(instance: T, type: Type<T>): void;
  setContext(instance: T, formGroup: FormGroup): void;
  setContext(instance: T, type: Type<T>, formGroup: FormGroup): void;
  setContext(
    instance: T,
    type?: Type<T> | FormGroup,
    formGroup?: FormGroup
  ): void {
    if (type instanceof FormGroup) {
      formGroup = type;
      type = undefined;
    }

    if (!type) {
      type = <any>instance.constructor;
    }

    if (this._model === instance && this._type === type) {
      return;
    }

    if (this._type !== type) {
      this._type = type as Type<T>;
      this.formMeta = this.modelFormService.getMeta(this._type);
    }

    if (this._model !== instance) {
      this._model = instance;
    }

    this.update(formGroup);
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

  /**
   * @internal
   */
  bindRenderingData(
    controlRenderer: DynamicControlRenderContext,
    renderData: RenderInstruction
  ): void {
    controlRenderer.tdmForm = this;
    controlRenderer.fGroup = renderData.flattened
      ? (this.form.get(renderData.flattened) as FormGroup)
      : this.form;
    if (renderData.isArray) {
      controlRenderer.fArray = <any>controlRenderer.fGroup.get(renderData.name);
    } else {
      controlRenderer.fControl = <any>controlRenderer.fGroup.get(
        renderData.name
      );
    }
    controlRenderer.item = renderData;
  }

  protected getFormProp(path: [keyof T, string]): FormPropMetadata {
    const formProp = NgFormsSerializeMapper.getFormProp(this.type, path);
    if (!formProp) {
      throw new Error(
        `Could not find form property metadata for type ${stringify(
          this.type
        )} using path ${path.join('.')}`
      );
    }
    return formProp;
  }

  protected update(formGroup?: FormGroup): void {
    if (this._type && this._model) {
      this.mapper = new NgFormsBoundMapper(this._type, this.model, formGroup);
      this.form = formGroup || this.mapper.serialize();
      this._ready = true;
    } else {
      this.mapper = this.form = undefined;
      this._ready = false;
    }
  }

  /**
   * FormArray's require specific reset because `@angular/forms` logic does not match the array but the content only.
   */
  private resetFormArray(
    formArray: FormArray,
    value: any,
    staticPath: string
  ): boolean {
    if (formArray.dirty || formArray.length !== (value ? value.length : 0)) {
      formArray.controls.splice(0, formArray.controls.length);
      if (value) {
        for (let m of value) {
          formArray.push(this.createControl(staticPath, m));
        }
      }
      return true;
    }
    return false;
  }
}

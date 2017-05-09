import { Type } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormModelMetadata, NgFormsBoundMapper } from '../core';
import { TDMModelFormService } from './tdm-model-form.service';
import { RenderInstruction } from '../interfaces';

/**
 * A container that binds a model instance and and a `FormGroup` instance.
 *
 * This class is a facade, it simplifies the logic and low level operations required to bind a model
 * and a form:
 *   - mapping between model and form (serialization and deserialization)
 *   - exposing rendering instructions for a model (the instructions are used to render form elements)
 */
export class TDMModelForm<T> {

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
   * @returns {RenderInstruction[]}
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
   * Set the context for this the form.
   * @param instance The TDModel instance
   * @param type The TDModel class, if not set instance.constructor is the default.
   */
  setContext(instance: T, type?: Type<T>) {
    if (!type) {
      type = <any>instance.constructor;
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
   * @param idx
   * @param item
   * @returns {string}
   */
  trackBy(idx: number, item: RenderInstruction): any {
    return item.name;
  }

  /**
   * Commit the form data into the model instance. (deserialize)
   *
   * Note that the response might be true even if the form was not dirty.
   * The response is always true when onlyIfDirty === false.
   * If onlyIfDirty is true and the form is NOT dirty, only then the response is false.
   *
   * @param onlyIfDirty if true will commit only if the form is dirty
   * @returns {boolean} Did it commit (deserialize)
   */
  commitToModel(onlyIfDirty?: boolean): boolean {
    if (onlyIfDirty === true && !this.form.dirty) {
      return false;
    }
    this.mapper.deserialize();
    return true;
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
import { FormGroup } from '@angular/forms';

import { Constructor, targetStore } from '@tdm/transformation';

import { NgFormsBoundMapper } from '../ng-forms-bound-mapper';
import { FormModelMetadata } from '../decorators';
import { TDMModelFormService, RenderInstruction } from './tdm-model-form.service';

/**
 * Represents form metadata for a model.
 * Use instances of this class to dynamically render models as forms.
 */
export class TDMModelForm<T> {

  form: FormGroup;

  get model(): T {
    return this._model;
  }

  get type(): Constructor<T> {
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
  private _type: Constructor<T>;
  private _model: T;
  private _ready: boolean;

  constructor(protected modelFormService: TDMModelFormService) { }

  /**
   * Set the context for this the form.
   * @param instance The TDModel instance
   * @param type The TDModel class, if not set instance.constructor is the default.
   */
  setContext(instance: T, type?: Constructor<T>) {
    if (!type) {
      type = <any>instance.constructor;
    }

    if (this._model === instance && this._type === type) {
      return;
    }

    if (this._type !== type) {
      this.formMeta = type
        ? targetStore.getClassProp(type, 'formModel')
        : undefined
      ;
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
   * @param onlyIfDirty if true will commit only if the form is dirty
   */
  commitToModel(onlyIfDirty?: boolean): void {
    if (onlyIfDirty === true && !this.form.dirty) {
      return;
    }
    this.mapper.deserialize();
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
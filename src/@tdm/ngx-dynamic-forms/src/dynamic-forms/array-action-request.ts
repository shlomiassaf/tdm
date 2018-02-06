import { FormArray } from '@angular/forms';
import { TDMModelForm } from '../tdm-model-form/tdm-model-form';
import { RenderInstruction } from '../tdm-model-form/render-instruction';

export interface ArrayActionRequest {
  renderInstruction: RenderInstruction;

  /**
   * The [[FormArray]] instance that is the target for this action.
   */
  formArray: FormArray;

  /**
   * The full name of the control, a.k.a the static path.
   */
  fullName: string;

  /**
   * The runtime path, with this path you can query the angular form instance to retrieve the control.
   * [[AbstractControl.get(runtimePath)
   */
  runtimePath: string;

  /**
   * The [[TDMModelForm]] instance.
   */
  tdmForm: TDMModelForm;

  /**
   * Optional data object to pass to the receiver.
   */
  data?: any;
}

export interface ArrayActionMoveRequestEvent extends ArrayActionRequest {
  action: 'move';
  /**
   * The index where the item is currently at
   */
  fromIdx: number;
  /**
   * The index where to move the item.
   */
  toIdx: number;
}

export interface ArrayActionAddRequestEvent extends ArrayActionRequest {
  action: 'add';
  /**
   * Location to add to, optional.
   * When not set will be added last.
   */
  atIdx?: number;
}

export interface ArrayActionRemoveRequestEvent extends ArrayActionRequest {
  action: 'remove';
  /**
   * The index where to remove the item from.
   */
  atIdx: number;
}

export interface ArrayActionEditRequestEvent extends ArrayActionRequest {
  action: 'edit';
  /**
   * The index where of the item to edit
   */
  atIdx: number;
}

export type ArrayActionRequestEvent =
  | ArrayActionMoveRequestEvent
  | ArrayActionAddRequestEvent
  | ArrayActionRemoveRequestEvent
  | ArrayActionEditRequestEvent;

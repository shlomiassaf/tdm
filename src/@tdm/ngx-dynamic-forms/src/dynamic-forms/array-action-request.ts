import { FormArray } from '@angular/forms';
import { TDMModelForm } from '../tdm-model-form/tdm-model-form';
export interface ArrayActionRequest {
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
  type: 'move';
  fromIdx: number;
  toIdx: number;
}

export interface ArrayActionAddRequestEvent extends ArrayActionRequest {
  type: 'add';
  atIdx?: number;
}

export interface ArrayActionRemoveRequestEvent extends ArrayActionRequest {
  type: 'remove';
  atIdx: number;
}

export type ArrayActionRequestEvent =
  | ArrayActionMoveRequestEvent
  | ArrayActionAddRequestEvent
  | ArrayActionRemoveRequestEvent;

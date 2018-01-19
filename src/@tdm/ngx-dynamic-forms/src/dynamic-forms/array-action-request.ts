import { FormArray } from '@angular/forms';
import { TDMModelForm } from '../tdm-model-form/tdm-model-form';
export interface ArrayActionRequest {
  formArray: FormArray;
  staticPath: string;
  runtimePath: string;
  tdmForm: TDMModelForm;
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

import { AbstractControl, FormArray, FormGroup, FormControl } from '@angular/forms';
import { isJsObject, isPrimitive, PlainObjectMapper } from '@tdm/core/tdm';

/**
 * Performs a FormArray deep clone.
 * Does not clone state.
 * Does not clone values but can assign if a value is supplied.
 * Does clone sync and async validators.
 */
export function clone(control: FormArray, value?: any[]): FormArray;
/**
 * Performs a FormGroup deep clone.
 * Does not clone state.
 * Does not clone values but can assign if a value is supplied.
 * Does clone sync and async validators.
 */
export function clone(control: FormGroup, value?: any): FormGroup;
export function clone(control: FormArray | FormGroup | FormControl,
                      value?: any | any[]): FormArray | FormGroup | FormControl {
  let result: FormArray | FormGroup | FormControl;
  if (control instanceof FormControl) {
    result = new FormControl(value);
  } else if (control instanceof FormArray) {
    value = Array.isArray(value) ? value : [];
    result = new FormArray(control.controls.map( (c, i) => clone(control, value[i])));
  } else if (control instanceof FormGroup) {
    value = isJsObject(value) ? value : {};
    const keys = Object.keys(control.controls);
    result = new FormGroup(keys.reduce( (controls, key) => {
      controls[key] = clone(<any> control.controls[key], value[key]);
      return controls;
    }, {} as { [key: string]: AbstractControl }));
  }
  if (control.validator) {
    result.setValidators(control.validator);
  }
  if (control.asyncValidator) {
    result.setAsyncValidators(control.asyncValidator);
  }
  return result;
}

/**
 * Converts a plain object (POJO) to a FormGroup or an array of plain object to FormArray
 */
export function objectToForm(obj: any, plainMapper?: PlainObjectMapper): FormGroup | FormArray {
  if (!plainMapper) {
    plainMapper = new PlainObjectMapper();
  }

  let data: FormGroup | FormArray;
  if (Array.isArray(obj)) {
    data = new FormArray(obj.map(o => objectToForm(o)));
  } else {
    data = new FormGroup({});
    const serialized = plainMapper.serialize(obj);

    Object.keys(serialized)
      .forEach(key => {
        const value = serialized[key];
        let ctrl = isPrimitive(value)
          ? new FormControl(value)
          : this.serializePlain(value)
        ;
        (data as FormGroup).addControl(key, ctrl);
      });
  }
  return data;
}

// Taken from https://github.com/angular/material2/blob/master/src/cdk/coercion/boolean-property.ts
/** Coerces a data-bound value (typically a string) to a boolean. */
export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

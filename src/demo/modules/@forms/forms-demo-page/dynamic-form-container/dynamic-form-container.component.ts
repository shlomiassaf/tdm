import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Constructor } from '@tdm/core';

export class DynamicFormContainerData<T> {
  instance: T;
  type?: Constructor<T>;
}

@Component({
  selector: 'dynamic-form-container',
  template: '<dynamic-form [model]="model"></dynamic-form>',
  styleUrls: [ './dynamic-form-container.component.scss' ]
})
export class DynamicFormContainerComponent<T> {

  model: T | [T, Constructor<T>];

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: DynamicFormContainerData<any>) {
    this.model = data.type
      ? [data.instance, data.type]
      : data.instance
    ;
  }
}

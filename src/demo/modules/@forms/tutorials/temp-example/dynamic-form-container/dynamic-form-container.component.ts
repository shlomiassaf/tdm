import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { Constructor } from '@tdm/core';
import { DynamicFormComponent, TdmFormChanges, ArrayActionRequestEvent } from '@tdm/ngx-dynamic-forms';

export class DynamicFormContainerData<T> {
  instance: T;
  type?: Constructor<T>;
}

@Component({
  selector: 'dynamic-form-container',
  templateUrl: './dynamic-form-container.component.html',
  styleUrls: [ './dynamic-form-container.component.scss' ]
})
export class DynamicFormContainerComponent<T> {

  model: T | [T, Constructor<T>];

  @ViewChild('dynForm') dynForm: DynamicFormComponent<T>;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: DynamicFormContainerData<any>) {
    this.model = data.type
      ? [data.instance, data.type]
      : data.instance
    ;
  }

  onClick() {
    this.dynForm.tdmForm.commitToModel();
    this.dialogRef.close(true);
  }

  onArrayActionRequest(event: ArrayActionRequestEvent): void {
    const o: any = Object.assign({}, event);
    delete o.tdmForm;
    delete o.formArray;
    if (event.type === 'add') {
      // we need to create a form control instance, it can be FormControl but can also be FormGroup or FormArray
      // we need to the serializer for that, so we use the helper function on [[TDMModelForm]]
      event.tdmForm.appendControl(event.fullName);
      event.formArray.markAsDirty();
    } else if (event.type === 'remove') {
      o.value = event.formArray.controls[event.atIdx].value;
      event.formArray.removeAt(event.atIdx);
      event.formArray.markAsDirty();
    }
    this.snackBar.open(JSON.stringify(o, null, 2), '', {
      duration: 2000,
    });
  }

  valueChanges(event: TdmFormChanges): void {
    const message = event.map( change => `Key "${change.key}" changed`).join('\n');
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}

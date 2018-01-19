import { Component, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption } from '@angular/material';

import {
  RenderInstruction,
  TDMModelForm,
  DynamicFormControlRenderer,
  DynamicFormComponent
} from '@tdm/ngx-dynamic-forms';
import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';


/**
 * Allow rendering a form element using @tdm/ngx-dynamic-forms
 *
 * <div #tdmForm="tdmModelForm" [tdmModelForm]="user">
 *   <form [formGroup]="tdmForm.form" novalidate>
 *     <div *ngFor="let item of tdmForm.props; trackBy: tdmForm.trackBy" class="row">
 *       <dynamic-form-element [tdmForm]="tdmForm" [item]="item"></dynamic-form-element>
 *      </div>
 *   </form>
 * </div>
 */
@Component({
  selector: 'dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html',
  styleUrls: [ './dynamic-form-element.component.scss' ]
})
export class DynamicFormElementComponent implements DynamicFormControlRenderer {
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;

  @Input() fArray: FormArray | undefined;
  @Input() fControl: FormControl | undefined;
  @Input() fGroup: FormGroup | undefined;

  constructor(private dynForm: DynamicFormComponent) {

  }

  hasError(errorName: string): boolean {
    if ( this.fControl ) {
      return this.fControl.hasError(errorName);
    } else if ( this.fArray ) {
      return this.fArray.hasError(errorName);
    } else if ( this.fGroup ) {
      return this.fGroup.hasError(errorName);
    }
    return false;
  }

  arrayRemove(selection: SelectionModel<MatListOption>): void {
    const { item, fArray } = this;
    selection.selected.forEach(ctrl => {
      this.dynForm.emitArrayActionRequest(
        item,
        { type: 'remove', formArray: fArray, atIdx: fArray.controls.indexOf(ctrl.value) }
        );
    });
    selection.clear();
  }
}

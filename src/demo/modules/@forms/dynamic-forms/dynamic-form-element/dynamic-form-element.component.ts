import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import {
  RenderInstruction,
  TDMModelForm,
  DynamicFormControlRenderer,
  DynamicFormComponent
} from '@tdm/ngx-dynamic-forms';
import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

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
export class DynamicFormElementComponent implements DynamicFormControlRenderer, OnChanges {
  /**
   * Optional, set if the provider tree where you render this template is not an ancestor of [[DynamicFormComponent]].
   * This is usually the case when using an override template with a template defined out of scope.
   */
  @Input() get dynForm(): DynamicFormComponent { return this._dynForm; }
  set dynForm(value: DynamicFormComponent) {
    if (value) {
      this._dynForm = value;
    }
  }
  @Input() showLabels: boolean;
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;

  @Input() fArray: FormArray | undefined;
  @Input() fControl: FormControl | undefined;
  @Input() fGroup: FormGroup | undefined;

  private _dynForm: DynamicFormComponent;

  constructor(dynForm: DynamicFormComponent) {
    if (dynForm) {
      this.dynForm = dynForm;
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    if ('showLabels' in change) {
      this.showLabels = coerceBooleanProperty(this.showLabels);
    }
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

  arrayRemove(ctrl: AbstractControl): void {
    const { item, fArray } = this;
    this.dynForm.emitArrayActionRequest(
      item,
      { type: 'remove', formArray: fArray, atIdx: fArray.controls.indexOf(ctrl) }
    );
  }
}

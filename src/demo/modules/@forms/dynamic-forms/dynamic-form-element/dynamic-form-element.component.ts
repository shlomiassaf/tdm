import { Component, Input } from '@angular/core';
import { RenderInstruction, TDMModelForm, DynamicFormControlRenderer } from '@tdm/ngx-dynamic-forms';
import { FormGroup } from '@angular/forms';

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
  templateUrl: './dynamic-form-element.component.html'
})
export class DynamicFormElementComponent implements DynamicFormControlRenderer {
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;
  @Input() formGroup: FormGroup;

  hasError(errorName: string): boolean {
    return this.item.flattened
      ? this.tdmForm.form.get(this.item.flattened.concat([this.item.name])).hasError(errorName)
      : this.tdmForm.hasError(errorName, this.item.name)
    ;
  }
}

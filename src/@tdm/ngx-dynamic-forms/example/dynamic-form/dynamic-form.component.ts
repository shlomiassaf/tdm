import { Component, Input } from '@angular/core';
import { Constructor } from '@tdm/transformation';
import { TDMModelForm, TDMModelFormService } from '@tdm/ngx-dynamic-forms';


/**
 * Allow rendering a form using @tdm/ngx-dynamic-forms and DynamicFormElementComponent
 *
 * <form [formGroup]="tdmForm.form" novalidate>
 *   <div *ngFor="let item of tdmForm.props; trackBy: tdmForm.trackBy" class="row">
 *     <dynamic-form-element [parent]="tdmForm.form" [item]="item"></dynamic-form-element>
 *    </div>
 * </form>
 */
@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent<T> {
  tdmForm: TDMModelForm<any>;

  @Input() set model(value: T | [T, Constructor<T>]) {
    const [instance, type] = Array.isArray(value) ? value : [value, <any>value.constructor];
    if (!this.tdmForm) {
      this.tdmForm = this.tdmModelFormService.create(instance, type);
    } else {
      this.tdmForm.setContext(instance, type);
    }
  }

  constructor(private tdmModelFormService: TDMModelFormService) {

  }
}
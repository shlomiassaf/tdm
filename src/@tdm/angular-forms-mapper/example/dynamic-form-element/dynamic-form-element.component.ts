import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RenderInstruction } from '@tdm/angular-forms-mapper';


/**
 * Allow rendering a form element using @tdm/angular-forms-mapper
 *
 * <div #tdmForm="tdmModelForm" [tdmModelForm]="user">
 *   <form [formGroup]="tdmForm.form" novalidate>
 *     <div *ngFor="let item of tdmForm.props; trackBy: tdmForm.trackBy" class="row">
 *       <dynamic-form-element [parent]="tdmForm.form" [item]="item"></dynamic-form-element>
 *      </div>
 *   </form>
 * </div>
 */
@Component({
  selector: 'dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html'
})
export class DynamicFormElementComponent {
  @Input() item: RenderInstruction;
  @Input() parent: FormGroup;
}
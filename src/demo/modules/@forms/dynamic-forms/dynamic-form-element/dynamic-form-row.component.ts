import { ChangeDetectionStrategy, ViewEncapsulation, Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { RenderInstruction, TDMModelForm, DynamicFormControlRenderer } from '@tdm/ngx-dynamic-forms';

/**
 * This component implements the interface for rendering a form component in the `@tdm/ngx-dynamic-forms` package.
 * When defined as the default rendering component it wil be used to render form controls when using the `<dynamic-form>`
 * component.
 *
 * You can also use it manually within a template, without the `<dynamic-form>` component:
 * ```html
 * <div #tdmForm="tdmModelForm" [tdmModelForm]="user">
 *   <form [formGroup]="tdmForm.form" novalidate>
 *     <div *ngFor="let item of tdmForm.renderData; trackBy: tdmForm.trackBy" class="row">
 *       <dynamic-form-row [tdmForm]="tdmForm" [item]="item"></dynamic-form-row>
 *      </div>
 *   </form>
 * </div>
 * ```
 *
 * Actual form control rendering is done in the `dynamic-form-element` compoent (also in this folder and also implements the interface)
 * to render a row and an element.
 *
 * This compomnent is in charge of the container of an element and the label.
 *
 * You can use this component manually to render custom elements using the override feature in a consistent manner.
 * When doing so, make sure to set the `custom` property to true.
 */
@Component({
  selector: 'dynamic-form-row',
  templateUrl: './dynamic-form-row.component.html',
  styleUrls: [ './dynamic-form-row.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormRowComponent implements DynamicFormControlRenderer {
  @Input() custom: boolean;
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;

  @Input() fArray: FormArray | undefined;
  @Input() fControl: FormControl | undefined;
  @Input() fGroup: FormGroup | undefined;
}

import { Type, Input, Directive } from '@angular/core';

import { TDMModelFormService } from './tdm-model-form.service';
import { TDMModelForm } from './tdm-model-form';

/**
 * A helper Directive to expose TDMModelForm within a template.
 *
 * This is an alternate method for create forms on a template. Instead of using an injected
 * TDMModelFormService instance to create instances of TDMModelForm you can use this directive.
 *
 * @example
 * ```ts
 * <div #tdmForm="tdmModelForm" [tdmModelForm]="user">
 *   <form [formGroup]="tdmForm.form" novalidate>
 *     <div *ngFor="let item of tdmForm.renderData; trackBy: tdmForm.trackBy" class="row">
 *       <div [ngSwitch]="item.vType" class="row">
 *         <input *ngSwitchCase="'boolean'" type='checkbox' [formControlName]="item.name">{{ item.label }} />
 *         <input *ngSwitchCase="'text'" type='text' [formControlName]="item.name">{{ item.label }} />
 *         <input *ngSwitchCase="'number'" type='number' [formControlName]="item.name">{{ item.label }} />
 *      </div>
 *   </form>
 * </div>
 * ```
 */
@Directive({
  selector: '[tdmModelForm]',
  exportAs: 'tdmModelForm'
})
export class TDMModelFormDirective<T> extends TDMModelForm<T> {
  @Input()
  set tdmModelForm(value: T | [T, Type<T>]) {
    const [instance, type] = Array.isArray(value)
      ? value
      : [value, <any>value.constructor];
    this.setContext(instance, type);
  }

  constructor(modelFormService: TDMModelFormService) {
    super(modelFormService);
  }
}

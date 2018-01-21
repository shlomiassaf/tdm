import { Directive, Input, Inject, forwardRef, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RenderInstruction } from '../tdm-model-form/render-instruction';
import { DynamicFormControlRenderer } from '../tdm-model-form/tdm-model-form';
import { DynamicFormComponent } from './dynamic-form.component';

export interface DynamicFormOverrideContext {
  $implicit: DynamicFormControlRenderer;
}

/**
 * A directive that allows override the default renderer for a form control name.
 *
 * @example
 *
 * ```html
 * <dynamic-form #df [model]="data.user" [exclude]="['remotePassword']">
 *   <md-input-container *dynamicFormOverride="'localUser'; let ctx" [formGroup]="ctx.fGroup" >
 *     <input type="password" [formControl]="ctx.fControl" mdInput [placeholder]="ctx.item.label">
 *   </md-input-container>
 * </dynamic-form>
 * ```
 *
 */
@Directive({
  selector: '[dynamicFormOverride]',
  exportAs: 'dynamicFormOverride'
})
export class DynamicFormOverrideDirective {

  get dynamicFormOverride(): string { return this.key; };
  @Input() set dynamicFormOverride(value: string) {
    this.key = value;
    if (this.key && this.key !== '*') {
      this.meta = this.dynForm.tdmForm.renderData.find( rd => rd.name === value);
    } else {
      this.meta = undefined;
    }
  };

  /**
   * A Shortcut for the parent's DynamicFormComponent#.tdmForm.form
   * @returns
   */
  get formGroup(): FormGroup {
    return this.dynForm.tdmForm.form;
  }

  /**
   * Render instruction exposed as an API for templates
   */
  meta: RenderInstruction;

  private key: string;

  constructor(
    public template: TemplateRef<DynamicFormOverrideContext>,
    @Inject(forwardRef(() => DynamicFormComponent))  private dynForm: DynamicFormComponent<any>
  ) {}
}

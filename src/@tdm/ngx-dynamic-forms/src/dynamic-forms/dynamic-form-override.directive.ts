import { Directive, Input, Inject, forwardRef, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RenderInstruction } from '../interfaces';
import { DynamicFormComponent } from './dynamic-form.component';

export interface DynamicFormOverrideContext {
  $implicit: DynamicFormOverrideDirective;
  dynamicFormOverride: DynamicFormOverrideDirective;
  meta: RenderInstruction;
}

/**
 * A directive that allows override the default renderer for a form control name.
 *
 * @example
 *
 * ```html
 * <dynamic-form #df [model]="data.user" [exclude]="['remotePassword']">
 *
 *   <!-- Using the DynamicFormOverrideDirective instance:  -->
 *   <md-input-container #d="dynamicFormOverride" *dynamicFormOverride="'localUser'" [formGroup]="d.formGroup" >
 *     <input type="password" [formControlName]="d.meta.name" mdInput [placeholder]="d.meta.label">
 *   </md-input-container>
 *
 *   <md-input-container *dynamicFormOverride="'localUser'; let d" [formGroup]="d.formGroup" >
 *     <input type="password" [formControlName]="d.meta.name" mdInput [placeholder]="d.meta.label">
 *   </md-input-container>
 *
 *   <!--  Using the a local template variable:  -->
 *   <md-input-container *dynamicFormOverride="'localUser'; let meta=meta" [formGroup]="df.tdmForm.form" >
 *     <input type="password" [formControlName]="meta.name" mdInput [placeholder]="meta.label">
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

  get dynamicFormOverride(): string { return this.key };
  @Input() set dynamicFormOverride(value: string) {
    this.key = value;
    this.meta = this.dynForm.tdmForm.renderData.find( rd => rd.name === value);
  };

  /**
   * A Shortcut for the parent's DynamicFormComponent#.tdmForm.form
   * @returns {any}
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
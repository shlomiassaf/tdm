import { ANALYZE_FOR_ENTRY_COMPONENTS, Type, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Constructor } from '@tdm/core/tdm';
import { DynamicFormControlRenderer, TDMModelFormService, TDMModelFormDirective } from './tdm-model-form/index';
import {
  DynamicFormOverrideDirective,
  DynamicFormControlDirective,
  DynamicFormArrayComponent,
  DynamicFormArrayDirective,
  ForFormArrayDirective,
  DynamicFormComponent,
  FORM_CONTROL_COMPONENT
} from './dynamic-forms/index';

@NgModule({
  declarations: [
    TDMModelFormDirective,
    DynamicFormOverrideDirective,
    DynamicFormControlDirective,
    DynamicFormArrayComponent,
    DynamicFormArrayDirective,
    ForFormArrayDirective,
    DynamicFormComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    TDMModelFormDirective,
    DynamicFormOverrideDirective,
    DynamicFormControlDirective,
    DynamicFormArrayComponent,
    DynamicFormArrayDirective,
    ForFormArrayDirective,
    DynamicFormComponent
  ]
})
export class DynamicFormsModule {
  /**
   * Registers the module with and required services and with the default form control renderer.
   */
  static forRoot(formComponent: Type<DynamicFormControlRenderer>): ModuleWithProviders {
    return {
      ngModule: DynamicFormsModule,
      providers: [
        TDMModelFormService,
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          multi: true,
          useValue: [{component: formComponent}]
        },
        {provide: FORM_CONTROL_COMPONENT, useValue: formComponent}
      ]
    };
  }

  /**
   * Registers the module with the default form control renderer.
   * Use this when adding to child modules which requires a different renderer.
   */
  static forChild(formComponent: Type<DynamicFormControlRenderer>): ModuleWithProviders {
    return {
      ngModule: DynamicFormsModule,
      providers: [
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          multi: true,
          useValue: [{component: formComponent}]
        },
        {provide: FORM_CONTROL_COMPONENT, useValue: formComponent}
      ]
    };
  }
}

/**
 * @deprecated Object renamed, use DynamicFormsModule instead
 */
export const TDMFormsModule = DynamicFormsModule;
/**
 * @deprecated Object renamed, use DynamicFormsModule instead
 */
export type TDMFormsModule = Constructor<DynamicFormsModule> & DynamicFormsModule;

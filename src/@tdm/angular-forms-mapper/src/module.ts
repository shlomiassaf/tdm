import { ANALYZE_FOR_ENTRY_COMPONENTS, Type, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TDMModelFormService, TDMModelFormDirective } from './tdm-model-form';
import { DynamicFormControlRenderer, DynamicFormOverrideDirective, DynamicFormControlDirective, DynamicFormComponent, FORM_CONTROL_COMPONENT } from './dynamic-forms';

@NgModule({
  declarations: [
    TDMModelFormDirective,
    DynamicFormOverrideDirective, DynamicFormControlDirective, DynamicFormComponent
  ],
  imports: [ CommonModule, ReactiveFormsModule ],
  exports: [
    TDMModelFormDirective,
    DynamicFormOverrideDirective, DynamicFormControlDirective, DynamicFormComponent
  ]
})
export class TDMFormsModule {

  static forRoot(formComponent: Type<DynamicFormControlRenderer>): ModuleWithProviders {
    return {
      ngModule: TDMFormsModule,
      providers: [
        TDMModelFormService,
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          multi: true,
          useValue: [{component: formComponent}]
        },
        {provide: FORM_CONTROL_COMPONENT, useValue: formComponent }
      ]
    }
  }

  static withRenderer(formComponent: Type<DynamicFormControlRenderer>): ModuleWithProviders {
    return {
      ngModule: TDMFormsModule,
      providers: [
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          multi: true,
          useValue: [{component: formComponent}]
        },
        {provide: FORM_CONTROL_COMPONENT, useValue: formComponent }
      ]
    }
  }
}

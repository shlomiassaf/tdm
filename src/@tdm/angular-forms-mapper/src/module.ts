import { NgModule, ModuleWithProviders } from '@angular/core';

import { TDMModelFormService, TDMModelFormDirective } from './tdm-model-form';


@NgModule({
  declarations: [ TDMModelFormDirective ],
  exports: [ TDMModelFormDirective ]
})
export class TDMFormsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TDMFormsModule,
      providers: [ TDMModelFormService ]
    }
  }
}

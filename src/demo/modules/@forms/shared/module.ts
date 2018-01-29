import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';

import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';

/**
 * An example for @tdm/ngx-dynamic-forms
 *
 * @demo core: Identity, ExtendAction, transformNameStrategy, skip
 * @demo angular-http: HttpResource, UrlParam
 */
@NgModule({
  declarations: [ FormWrapperComponent ],
  imports: [
    SharedModule
  ],
  exports: [ FormWrapperComponent ]
})
export class FormsSharedModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: FormsSharedModule,
  //     providers: [ TutorialService ]
  //   };
  // }
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TDMFormsModule, FORM_CONTROL_COMPONENT } from '@tdm/angular-forms-mapper';
import { SharedModule } from '@shared';
import { DynamicFormElementComponent } from './dynamic-forms';
import { FormsDemoPageComponent, DynamicFormContainerComponent } from './forms-demo-page';
import { ROUTES } from './routes';

/**
 * An example for @tdm/angular-forms-mapper
 *
 * @demo core: Identity, ExtendAction, transformNameStrategy, noBuild
 * @demo angular-http: HttpResource, UrlParam
 */
@NgModule({
  declarations: [ DynamicFormContainerComponent, FormsDemoPageComponent, DynamicFormElementComponent ],
  imports: [
    SharedModule,
    TDMFormsModule.forRoot(DynamicFormElementComponent),
    RouterModule.forChild(ROUTES)
  ],
  entryComponents: [ DynamicFormContainerComponent ]
})
export class FormsDemoModule {
}

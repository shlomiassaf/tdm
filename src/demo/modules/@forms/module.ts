import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared';

import { FormsExampleModule } from './examples';
import { FormsDemoPageComponent } from './forms-demo-page';
import { ROUTES } from './routes';

/**
 * An example for @tdm/ngx-dynamic-forms
 *
 * @demo core: Identity, ExtendAction, transformNameStrategy, skip
 * @demo angular-http: HttpResource, UrlParam
 */
@NgModule({
  declarations: [ FormsDemoPageComponent ],
  imports: [
    SharedModule,
    FormsExampleModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FormsDemoModule { }

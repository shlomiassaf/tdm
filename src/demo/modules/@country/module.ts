import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { CountryPageComponent } from './country-page';
import { ROUTES } from './routes';

/**
 * An example of handling non-resource oriented REST API's.
 *
 * @demo core: Identity, ExtendAction, transformNameStrategy, skip
 * @demo angular-http: HttpResource, UrlParam
 */
@NgModule({
  declarations: [
    CountryPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class CountryModule {
}

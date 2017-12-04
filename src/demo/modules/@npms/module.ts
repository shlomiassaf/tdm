import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared';
import { NpmsPageComponent } from './npms-page';
import { ROUTES } from './routes';

/**
 * An example of handling non-resource oriented REST API's.
 *
 * @demo core: Identity, ExtendAction, transformNameStrategy, skip
 * @demo angular-http: HttpResource, UrlParam
 */
@NgModule({
  declarations: [
    NpmsPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class NpmsModule {
}

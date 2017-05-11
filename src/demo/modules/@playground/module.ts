import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared';
import { PlaygroundPageComponent } from './playground-page';
import { ROUTES } from './routes';

/**
 * An example of handling non-resource oriented REST API's.
 *
 * @demo core: Identity, ExtendAction, transformNameStrategy, noBuild
 * @demo angular-http: HttpResource, UrlParam
 */
@NgModule({
  declarations: [
    PlaygroundPageComponent
  ],
  imports: [
    SharedModule,

    RouterModule.forChild(ROUTES)
  ],
})
export class PlaygroundModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,  PreloadAllModules } from '@angular/router';

import { SharedModule } from '@shared';
/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from '../../environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

// we first include material-core then styles because styles has @imports that needs to come after material core
// but material core is not an import but a sass @include so we can control the order

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    SharedModule.forRoot()
  ]
})
export class AppModule { }

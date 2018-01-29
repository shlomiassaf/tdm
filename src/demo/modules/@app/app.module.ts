import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,  PreloadAllModules } from '@angular/router';

import { SharedModule } from '@shared';
/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { AppState } from './app.service';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

// we first include material-core then styles because styles has @imports that needs to come after material core
// but material core is not an import but a sass @include so we can control the order
import '../../styles/material-core.scss';
import '../../styles/styles.scss';

// Application wide providers
const APP_PROVIDERS = [ AppState ];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
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
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ...environment.ENV_PROVIDERS,
    ...APP_PROVIDERS
  ]
})
export class AppModule { }

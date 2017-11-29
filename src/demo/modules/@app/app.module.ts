import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
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

import '../../styles/styles.scss';
import '../../styles/headings.css';

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

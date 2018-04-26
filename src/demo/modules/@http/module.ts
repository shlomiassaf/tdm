import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule, TopNavService } from '@shared';

import { NgxHttpExamplesModule } from './examples';
import { NgxHttpAppComponent } from './ngx-http-app';
import { ExamplePageComponent } from './example-page';
import { NgxHttpTutorialsModule } from './tutorial';
import { ROUTES } from './routes';

@NgModule({
  declarations: [ NgxHttpAppComponent, ExamplePageComponent ],
  imports: [
    SharedModule,
    // NgxHttpExamplesModule,
    NgxHttpTutorialsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class NgxHttpAppModule {
  constructor(topNavService: TopNavService) {
    topNavService.addNavItem({
      title: 'HTTP Resource',
      imgIconSrc: 'https://material.angular.io/assets/img/homepage/angular-white-transparent.svg',
      routerLink: {
        routerLink: ['./ngx-http']
      }
    });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule, TopNavService } from '@shared';

import { DynamicFormsModule } from '@tdm/ngx-dynamic-forms';
import { FormsSharedModule } from './shared';
import { FormsTutorialsModule } from './tutorials';
import { FormsAppComponent } from './forms-app';
import { ROUTES } from './routes';

@NgModule({
  declarations: [ FormsAppComponent ],
  imports: [
    SharedModule,
    DynamicFormsModule,
    FormsSharedModule,
    FormsTutorialsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FormsAppModule {
  constructor(topNavService: TopNavService) {
    topNavService.addNavItem({
      title: 'Dynamic Forms',
      imgIconSrc: 'https://material.angular.io/assets/img/homepage/angular-white-transparent.svg',
      routerLink: {
        routerLink: ['./forms']
      }
    });
  }
}

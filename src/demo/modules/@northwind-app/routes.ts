import { Component, OnDestroy } from '@angular/core';
import { Routes } from '@angular/router';

import { TopNavService } from '@shared';
import { NorthwindAppComponent } from './components';

@Component({
  selector: 'northwind-app-domain',
  template: '<router-outlet></router-outlet>'
})
export class NorthwindAppDomainComponent implements OnDestroy {
  constructor(private topNavService: TopNavService) {
    topNavService.pushDomain('northwind');
  }

  ngOnDestroy(): void {
    this.topNavService.popDomain();
  }
}

export const ROUTES: Routes = [
  {
    path: '',
    component: NorthwindAppDomainComponent,
    children: [
      { path: '', pathMatch: 'full', component: NorthwindAppComponent },
      { path: ':listType', component: NorthwindAppComponent }
    ]
  }
];

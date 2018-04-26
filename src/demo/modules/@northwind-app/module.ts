import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule, TopNavService } from '@shared';

import { NorthwindAppComponent } from './components';
import { ROUTES, NorthwindAppDomainComponent } from './routes';

@NgModule({
  declarations: [ NorthwindAppComponent, NorthwindAppDomainComponent ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class NorthwindAppModule {
  constructor(topNavService: TopNavService) {
    topNavService.addNavItem({
      title: 'Orders',
      domain: 'northwind',
      routerLink: {
        routerLink: ['./northwind-app/orders']
      }
    });
    topNavService.addNavItem({
      title: 'Customers',
      domain: 'northwind',
      routerLink: {
        routerLink: ['./northwind-app/customers']
      }
    });
    topNavService.addNavItem({
      title: 'Employees',
      domain: 'northwind',
      routerLink: {
        routerLink: ['./northwind-app/employees']
      }
    });
  }
}

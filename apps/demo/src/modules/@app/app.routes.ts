import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'forms', loadChildren: '@forms#FormsAppModule' },
  // { path: 'playground', loadChildren: '@playground#PlaygroundModule' },
  { path: 'ngx-http', loadChildren: '@http#NgxHttpAppModule' },
  { path: 'northwind-app', loadChildren: '@northwind-app#NorthwindAppModule' },
  { path: '**',    component: NoContentComponent },
];

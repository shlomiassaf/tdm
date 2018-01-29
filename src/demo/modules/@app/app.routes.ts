import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'playground', loadChildren: '@playground#PlaygroundModule' },
  { path: 'ngx-http', loadChildren: '@http#NgxHttpAppModule' },
  { path: 'forms', loadChildren: '@forms#FormsAppModule' },
  { path: '**',    component: NoContentComponent },
];

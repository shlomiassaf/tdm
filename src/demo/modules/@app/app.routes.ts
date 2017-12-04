import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'playground', loadChildren: '@playground#PlaygroundModule' },
  { path: 'country', loadChildren: '@country#CountryModule' },
  { path: 'vehicles', loadChildren: '@vehicle#VehicleModule' },
  { path: 'npms', loadChildren: '@npms#NpmsModule' },
  { path: 'forms', loadChildren: '@forms#FormsDemoModule' },
  { path: '**',    component: NoContentComponent },
];

import { Routes } from '@angular/router';

import { TutorialPageComponent } from '@shared';
import { NgxHttpAppComponent } from './ngx-http-app';
import { ExamplePageComponent } from './example-page';


export const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: NgxHttpAppComponent },
      { path: 'tutorial/:name', component: TutorialPageComponent },
      // { path: 'examples/:name', component: ExamplePageComponent }
    ]
  }
];

import { Routes } from '@angular/router';

import { FormsAppComponent } from './forms-app';
import { TempExampleComponent } from './tutorials/temp-example/temp-example.component';
import { TutorialPageComponent } from './tutorial-page';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: FormsAppComponent },
      { path: 'tempExample', component: TempExampleComponent },
      { path: 'tutorial/:name', component: TutorialPageComponent }
    ]
  }
];

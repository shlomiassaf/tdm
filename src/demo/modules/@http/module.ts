import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared';

import { NgxHttpExamplesModule } from './examples';
import { NgxHttpAppComponent } from './ngx-http-app';
import { ExamplePageComponent } from './example-page';
import { ROUTES } from './routes';

@NgModule({
  declarations: [ NgxHttpAppComponent, ExamplePageComponent ],
  imports: [
    SharedModule,
    NgxHttpExamplesModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class NgxHttpAppModule { }
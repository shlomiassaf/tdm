import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from './model';

@Component({
  selector: 'form-validation',
  templateUrl: './validation.component.html',
  styleUrls: [ './validation.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class ValidationComponent {

  model = new Hero();
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "ValidationComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'validation',
    name: 'Validation'
  };
  /* @tdm-ignore:* */
}

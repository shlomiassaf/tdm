import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from './model';

@Component({
  selector: 'form-flattening',
  templateUrl: './flattening.component.html',
  styleUrls: [ './flattening.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class FlatteningComponent {
  model = new Hero();
  code: any = System.import(/* webpackChunkName: "FormsFlatteningComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'flattening',
    name: 'Flattening Nested Objects'
  };
  /* @tdm-ignore:* */
}

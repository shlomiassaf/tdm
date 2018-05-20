import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from '../4-element-metadata';

@Component({
  selector: 'form-hot-bind',
  templateUrl: './hot-bind.component.html',
  styleUrls: [ './hot-bind.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class HotBindComponent {
  hotBind: boolean = true;
  model = new Hero();
  code: any = import(/* webpackChunkName: "FormsHotBindComponent" */ './__tdm-code__'); /* @tdm-ignore-line */ // tslint:disable-line
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'hot-bind',
    name: 'Hot Bind'
  };
  /* @tdm-ignore:* */
}

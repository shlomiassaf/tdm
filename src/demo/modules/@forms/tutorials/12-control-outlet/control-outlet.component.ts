import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from '../4-element-metadata';

@Component({
  selector: 'form-control-outlet',
  templateUrl: './control-outlet.component.html',
  styleUrls: [ './control-outlet.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class ControlOutletComponent {
  model = new Hero();
  code: any = System.import(/* webpackChunkName: "ControlOutletComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'control-outlet',
    name: 'Control Outlet'
  };
  /* @tdm-ignore:* */
}

import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from '../4-element-metadata';

@Component({
  selector: 'form-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: [ './control-panel.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class ControlPanelComponent {
  model = new Hero();
  code: any = import(/* webpackChunkName: "FormsControlPanelComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'control-panel',
    name: 'Control Panel'
  };
  /* @tdm-ignore:* */
}

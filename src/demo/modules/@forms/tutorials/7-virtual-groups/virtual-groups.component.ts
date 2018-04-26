import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from '../4-element-metadata';

@Component({
  selector: 'form-virtual-groups',
  templateUrl: './virtual-groups.component.html',
  styleUrls: [ './virtual-groups.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class VirtualGroupsComponent {

  model = new Hero();
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "FormsVirtualGroupsComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'virtual-groups',
    name: 'Virtual Groups'
  };
  /* @tdm-ignore:* */
}

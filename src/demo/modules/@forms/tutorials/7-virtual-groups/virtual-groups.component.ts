import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms';
import { Hero, TutorialRendererV2Component } from '../6-a-better-renderer';

@Component({
  selector: 'form-virtual-groups',
  templateUrl: './virtual-groups.component.html',
  styleUrls: [ './virtual-groups.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: TutorialRendererV2Component }
  ]
  /* @tdm-ignore:* */
})
export class VirtualGroupsComponent {

  model = new Hero();
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "VirtualGroupsComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'virtual-groups',
    name: 'Virtual Groups'
  };
  /* @tdm-ignore:* */
}

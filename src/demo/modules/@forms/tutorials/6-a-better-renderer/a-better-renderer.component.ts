import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms';
import { TutorialRendererV2Component } from './renderer/renderer-v2.component';

import { Hero } from './model';

@Component({
  selector: 'form-a-better-renderer',
  templateUrl: './a-better-renderer.component.html',
  styleUrls: [ './a-better-renderer.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: TutorialRendererV2Component }
  ]
  /* @tdm-ignore:* */
})
export class ABetterRendererComponent {
  model = new Hero();

  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "ABetterRendererComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'a-better-renderer',
    name: 'A Better Renderer'
  };
  /* @tdm-ignore:* */
}

import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms';
import { RendererV1Component } from './renderer/renderer.component';

import { Hero } from './model';

@Component({
  selector: 'form-the-renderer',
  templateUrl: './the-renderer.component.html',
  styleUrls: [ './the-renderer.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: RendererV1Component }
  ]
  /* @tdm-ignore:* */
})
export class TheRendererComponent {
  model = new Hero();

  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "FormsTheRendererComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'the-renderer',
    name: 'The Renderer',
    subHeader: 'Renderer'
  };
  /* @tdm-ignore:* */
}

import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms';
import { RendererV2Component } from './renderer/renderer-v2.component';

import { Hero } from './model';

@Component({
  selector: 'form-extending-the-renderer',
  templateUrl: './extending-the-renderer.component.html',
  styleUrls: [ './extending-the-renderer.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: RendererV2Component }
  ]
  /* @tdm-ignore:* */
})
export class ExtendingTheRendererComponent {
  model = new Hero();

  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "FormsExtendingTheRendererComponent" */ './__tdm-code__'); // tslint:disable-line
  static tutorial = {
    id: 'extending-the-renderer',
    name: 'Extending the Renderer'
  };
  /* @tdm-ignore:* */
}

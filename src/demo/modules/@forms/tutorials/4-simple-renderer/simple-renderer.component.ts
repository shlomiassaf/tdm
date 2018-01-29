import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms';
import { TutorialSimpleRendererComponent } from './renderer/renderer.component';

import { Hero } from './model';

@Component({
  selector: 'form-simple-renderer',
  templateUrl: './simple-renderer.component.html',
  styleUrls: [ './simple-renderer.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: TutorialSimpleRendererComponent }
  ]
  /* @tdm-ignore:* */
})
export class SimpleRendererComponent {
  model = new Hero();

  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "SimpleRendererComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'simple-renderer',
    name: 'Simple Renderer'
  };
  /* @tdm-ignore:* */
}

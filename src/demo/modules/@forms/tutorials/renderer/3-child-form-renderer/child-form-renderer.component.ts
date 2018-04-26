import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { RendererV3Component } from './renderer/renderer-v3.component'; /* @tdm-ignore-line */
import { Hero } from './model';

@Component({
  selector: 'form-child-form-renderer',
  templateUrl: './child-form-renderer.component.html',
  styleUrls: [ './child-form-renderer.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: RendererV3Component }
  ]
  /* @tdm-ignore:* */
})
export class ChildFormRendererComponent {
  model = new Hero();
  code: any = System.import(/* webpackChunkName: "FormsChildFormRendererComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'child-form-renderer',
    name: 'Child Form Renderer'
  };
  /* @tdm-ignore:* */
}

import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { RendererV4Component } from './renderer/renderer-v4.component'; /* @tdm-ignore-line */
import { Hero } from './model';

@Component({
  selector: 'form-array-renderer',
  templateUrl: './array-renderer.component.html',
  styleUrls: [ './array-renderer.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: RendererV4Component }
  ]
  /* @tdm-ignore:* */
})
export class ArrayRendererComponent {
  model: Hero;
  code: any = System.import(/* webpackChunkName: "ArrayRendererComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line

  constructor() {
    this.model = new Hero();
    this.model.allies = ['Thor', 'Captain America'];
    this.model.basesDestroyed = [
      {
        name: 'Bat Cave',
        coordinates: {
          lng: 10,
          lat: -10
        }
      },
      {
        name: 'Themyscira',
        coordinates: {
          lng: 99,
          lat: -99
        }
      }
    ];
  }
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'array-renderer',
    name: 'Arrays Renderer'
  };
  /* @tdm-ignore:* */
}

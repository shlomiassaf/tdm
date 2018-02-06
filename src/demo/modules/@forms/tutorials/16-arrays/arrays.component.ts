import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { RendererV3Component } from '../renderer'; /* @tdm-ignore-line */
import { Hero } from './model';

@Component({
  selector: 'form-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: [ './arrays.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: RendererV3Component }
  ]
  /* @tdm-ignore:* */
})
export class ArraysComponent {
  model: Hero;
  code: any = System.import(/* webpackChunkName: "ArraysComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line

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
    id: 'arrays',
    name: 'Arrays'
  };
  /* @tdm-ignore:* */
}

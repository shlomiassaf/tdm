import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms';
import { Hero } from '../4-element-metadata';
import { DynamicFormRowComponent } from './renderer/dynamic-form-row.component';


@Component({
  selector: 'form-render-container',
  templateUrl: './render-container.component.html',
  styleUrls: [ './render-container.component.scss' ],
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
})
export class RenderContainerComponent {

  model = new Hero();
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "RenderContainerComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'render-container',
    name: 'Render Container'
  };
  /* @tdm-ignore:* */
}

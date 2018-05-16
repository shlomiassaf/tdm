import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../../5-renderer-container'; /* @tdm-ignore-line */
import { BeforeRenderEventComponent } from '../before-render-event';

@Component({
  selector: 'form-render-state-event',
  templateUrl: './render-state-event.component.html',
  styleUrls: [ './render-state-event.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class RenderStateEventComponent extends BeforeRenderEventComponent {
  code: any = import(/* webpackChunkName: "FormsFieldSyncRedrawComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line

  /* @tdm-ignore:* */
  static tutorial = <any> {
    id: 'render-state-event',
    name: 'Event: (renderState)'
  };
  /* @tdm-ignore:* */
}

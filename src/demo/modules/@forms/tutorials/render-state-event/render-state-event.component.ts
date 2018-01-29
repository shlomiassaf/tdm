import { Component } from '@angular/core';
import { BeforeRenderEventHandler } from '@tdm/ngx-dynamic-forms';

import { STATES } from '../before-render-event';
import { User } from '../models';

@Component({
  selector: 'form-render-state-event',
  templateUrl: './render-state-event.component.html',
  styleUrls: [ './render-state-event.component.scss' ]
})
export class RenderStateEventComponent {
  model = new User();
  code: any = System.import(/* webpackChunkName: "FieldSyncRedrawComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line

  beforeRender($event: BeforeRenderEventHandler): void {
    const addressState = $event.instructions['address.state'];
    if (addressState) {
      // ASYNC CALLS THAT BLOCK THE WHOLE FORM FROM RENDERING, GOOD FOR GETTING DATA FROM REMOTE SERVER.
      // E.G.: GETTING GROUPS LISTED UNDER A USER, ETC...
      const p = new Promise( r => setTimeout(r, 1000 ))
        .then( () => {
          addressState.mergeData({
            options: STATES
          });
        });
      // mark this field as async, no render until promise completes.
      $event.async(p);

      addressState.type = 'radio';
      addressState.mergeData({ vertical: true });
    }
  }
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'render-state-event',
    name: 'Event: (renderState)'
  };
  /* @tdm-ignore:* */
}

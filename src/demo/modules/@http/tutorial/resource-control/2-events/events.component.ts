import { Component } from '@angular/core';
import { ResourceControl, isResourceEvent } from '@tdm/data';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from '../../../client';

@Component({
  selector: 'ngx-http-events',
  templateUrl: './events.component.html',
  styleUrls: [ './events.component.scss' ],
})
export class EventsComponent {
  run: () => any;

  /* @tdm-example: code */
  constructor(private ngDao: NgDAO) {

    this.run = () => { /* @tdm-ignore-line */
      const promise = ngDao.get(Customer).findById('ALFKI');
      const rc = ResourceControl.get(promise);
      const unsub = rc.events$
        .subscribe(event => {
          if (isResourceEvent('ActionError', event)) {
            console.error(event.error);
            unsub.unsubscribe();
          } else {
            console.log(event.type);
          }
      });
    }; /* @tdm-ignore-line */
  }
  /* @tdm-example: code */

  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "NgxHttpEventsComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'resource-events',
    name: 'Resource Events'
  };
  /* @tdm-ignore:* */
}

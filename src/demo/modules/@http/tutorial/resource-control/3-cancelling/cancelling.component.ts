import { Component } from '@angular/core';
import { ResourceControl } from '@tdm/data';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from '@shared/client';

@Component({
  selector: 'ngx-http-cancelling',
  templateUrl: './cancelling.component.html',
  styleUrls: [ './cancelling.component.scss' ],
})
export class CancellingComponent {
  run: () => any;

  /* @tdm-example: code */
  constructor(private ngDao: NgDAO) {

    this.run = () => { /* @tdm-ignore-line */
      const promise = ngDao.get(Customer).findById('ALFKI');
      const rc = ResourceControl.get(promise);
      setTimeout(() => rc.cancel(), 500);
    }; /* @tdm-ignore-line */
  }
  /* @tdm-example: code */

  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "NgxHttpCancellingComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'resource-cancelling',
    name: 'Request Cancelling'
  };
  /* @tdm-ignore:* */
}

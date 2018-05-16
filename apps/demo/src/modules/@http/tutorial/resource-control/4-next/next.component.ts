import { Component } from '@angular/core';
import { ResourceControl } from '@tdm/data';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from '@shared/client';

@Component({
  selector: 'ngx-http-cancelling',
  templateUrl: './next.component.html',
  styleUrls: [ './next.component.scss' ],
})
export class NextComponent {
  run: () => any;

  /* @tdm-example: code */
  errorMessage: string;

  constructor(private ngDao: NgDAO) {

    this.run = () => { /* @tdm-ignore-line */
      const promise = ngDao.get(Customer).findById('ALFKI');
      const rc = ResourceControl.get(promise);
      rc.next().then( s => {
        rc.next()
          .catch( err => {
            this.errorMessage = err.toString();
          });
      });
    }; /* @tdm-ignore-line */
  }
  /* @tdm-example: code */

  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "NgxHttpNextComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'next',
    name: 'Next()'
  };
  /* @tdm-ignore:* */
}

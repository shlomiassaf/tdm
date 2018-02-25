import { Component } from '@angular/core';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from '../../client';

@Component({
  selector: 'ngx-http-options',
  templateUrl: './options.component.html',
  styleUrls: [ './options.component.scss' ],
})
export class OptionsComponent {
  constructor(private ngDao: NgDAO) { }

  click() {
    this.ngDao.get(Customer).findById('ALFKI', { /* SPECIFIC OPTIONS */
      urlParams: {
        someQueryKey: 'someQueryValue'
      }
    })
      .then( c => {
        console.log(c);
      });
  }

  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "NgxHttpOptionsComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'options',
    name: 'Options'
  };
  /* @tdm-ignore:* */
}

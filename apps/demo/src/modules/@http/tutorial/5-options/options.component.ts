import { Component } from '@angular/core';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from '@shared/client';

@Component({
  selector: 'ngx-http-options',
  templateUrl: './options.component.html',
  styleUrls: [ './options.component.scss' ],
})
export class OptionsComponent {
  code: any = import(/* webpackChunkName: "NgxHttpOptionsComponent" */ './__tdm-code__'); // tslint:disable-line
  run: () => any;

  /* @tdm-example: code */
  constructor(private ngDao: NgDAO) {

    this.run = () => /* @tdm-ignore-line */
      ngDao.get(Customer).findById('ALFKI', {
        urlParams: {
          someQueryKey: 'someQueryValue'
        }
      });

  }
  /* @tdm-example: code */

  static tutorial = {
    id: 'options',
    name: 'Options'
  };
}

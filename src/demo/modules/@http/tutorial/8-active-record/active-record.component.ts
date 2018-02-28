import { Component } from '@angular/core';

import { Customer } from '../../client';

@Component({
  selector: 'ngx-http-active-record',
  templateUrl: './active-record.component.html',
  styleUrls: [ './active-record.component.scss' ],
})
export class ActiveRecordComponent {
  code: any = System.import(/* webpackChunkName: "NgxHttpActiveRecordComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  run: () => any;

  /* @tdm-example: code */
  constructor() {

    this.run = async () => { /* @tdm-ignore-line */
      let customer = await Customer.findById('ALFKI').$rc.next();

      customer.CompanyName = 'Microsoft';
      customer.City = 'San Francisco';
      await customer.$replace().next();

      const customers = await Customer.query().$rc.next();

      customer = customers.find(c => c.CustomerID === 'ALFKI');
      if ( !customer || customer.CompanyName !== 'Microsoft' || customer.City !== 'San Francisco' ) {
        throw new Error('Invalid demo!!!');
      }

    }; /* @tdm-ignore-line */
  }
  /* @tdm-example: code */

  static tutorial = {
    id: 'active-record',
    name: 'Active Record'
  };
}

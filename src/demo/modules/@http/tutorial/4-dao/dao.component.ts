import { Component } from '@angular/core';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from '../../client';

@Component({
  selector: 'ngx-http-dao',
  templateUrl: './dao.component.html',
  styleUrls: [ './dao.component.scss' ],
})
export class DaoComponent {
  code: any = System.import(/* webpackChunkName: "NgxHttpDaoComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  run: () => any;

  /* @tdm-example: code */
  constructor(private ngDao: NgDAO) {

    this.run = async () => { /* @tdm-ignore-line */
      const customerDao = ngDao.get(Customer);
      let customer = await customerDao.findById('ALFKI');

      customer.CompanyName = 'Microsoft';
      customer.City = 'San Francisco';
      await customerDao.replace(customer);

      const customers = await customerDao.query();

      customer = customers.find(c => c.CustomerID === 'ALFKI');
      if ( !customer || customer.CompanyName !== 'Microsoft' || customer.City !== 'San Francisco' ) {
        throw new Error('Invalid demo!!!');
      }

    }; /* @tdm-ignore-line */
  }
  /* @tdm-example: code */

  static tutorial = {
    id: 'dao',
    name: 'DAO'
  };
}

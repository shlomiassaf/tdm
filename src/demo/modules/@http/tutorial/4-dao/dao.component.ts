import { Component } from '@angular/core';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from '../../client';

@Component({
  selector: 'ngx-http-dao',
  templateUrl: './dao.component.html',
  styleUrls: [ './dao.component.scss' ],
})
export class DaoComponent {
  constructor(private ngDao: NgDAO) { }

  click() {
    this.ngDao.get(Customer).findById('ALFKI')
      .then( c => {
        console.log(c);
      });
  }

  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "NgxHttpDaoComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'dao',
    name: 'DAO'
  };
  /* @tdm-ignore:* */
}

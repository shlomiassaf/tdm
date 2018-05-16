import { Component } from '@angular/core';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from './customer';

@Component({
  selector: 'ngx-http-static-options',
  templateUrl: './static-options.component.html',
  styleUrls: [ './static-options.component.scss' ],
})
export class StaticOptionsComponent {
  code: any = import(/* webpackChunkName: "NgxHttpStaticOptionsComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  run: () => any;

  /* @tdm-example: code */
  constructor(private ngDao: NgDAO) {

    this.run = () => /* @tdm-ignore-line */
      ngDao.get(Customer).findById('ALFKI', {
        urlParams: {
          thisWillBe: 'aMergedParameter'
        },
        headers: {
          'my-ad-hoc-header': 'ad-hoc-header',
          'my-public-header': 'public-header-hacked-by-merging'
        }
      });

  }
  /* @tdm-example: code */

  static tutorial = {
    id: 'static-options',
    name: 'Static Options'
  };
}

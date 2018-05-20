import { Component } from '@angular/core';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from '@shared/client';

@Component({
  selector: 'ngx-http-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: [ './introduction.component.scss' ]
})
export class IntroductionComponent {
  code: any = import(/* webpackChunkName: "NgxHttpIntroductionComponent" */ './__tdm-code__'); // tslint:disable-line
  run = () =>
    /* @tdm-example: code */
    /* Dependency Injection - ngDao: NgDAO */
    this.ngDao.get(Customer).findById('ALFKI');
    /* @tdm-example: code */

  constructor(private ngDao: NgDAO) { }

  static tutorial = {
    id: 'introduction',
    name: 'Introduction'
  };
}

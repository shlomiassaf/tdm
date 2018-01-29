import { Component } from '@angular/core';

import { User } from '../models';

@Component({
  selector: 'form-hot-bind',
  templateUrl: './hot-bind.component.html',
  styleUrls: [ './hot-bind.component.scss' ]
})
export class HotBindComponent {
  hotBind: boolean = true;
  model = new User();
  code: any = System.import(/* webpackChunkName: "HotBindComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'hot-bind',
    name: 'Hot Bind'
  };
  /* @tdm-ignore:* */
}

import { Component } from '@angular/core';

import { UIDeveloper } from './model';

@Component({
  selector: 'form-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: [ './introduction.component.scss' ]
})
export class IntroductionComponent {
  model = new UIDeveloper();
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "IntroductionComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'introduction',
    name: 'Introduction'
  };
  /* @tdm-ignore:* */
}

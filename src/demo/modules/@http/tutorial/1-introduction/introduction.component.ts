import { Component } from '@angular/core';
import { UIDeveloper } from './model';

@Component({
  selector: 'ngx-http-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: [ './introduction.component.scss' ]
})
export class IntroductionComponent {
  model = new UIDeveloper();
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "NgxHttpIntroductionComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'introduction',
    name: 'Introduction'
  };
  /* @tdm-ignore:* */
}

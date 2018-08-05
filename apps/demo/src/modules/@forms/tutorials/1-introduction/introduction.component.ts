import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { UIDeveloper } from './model';

@Component({
  selector: 'form-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: [ './introduction.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class IntroductionComponent {
  model = new UIDeveloper();
  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "FormsIntroductionComponent" */ './__tdm-code__'); // tslint:disable-line
  static tutorial = {
    id: 'introduction',
    name: 'Introduction'
  };
  /* @tdm-ignore:* */
}

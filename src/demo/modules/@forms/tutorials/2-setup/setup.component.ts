import { Component } from '@angular/core';

@Component({
  selector: 'form-setup',
  templateUrl: './setup.component.html',
  styleUrls: [ './setup.component.scss' ]
})
export class SetupComponent {
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "FormsSetupComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'setup',
    name: 'Setup'
  };
  /* @tdm-ignore:* */
}

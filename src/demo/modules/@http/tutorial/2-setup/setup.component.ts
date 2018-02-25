import { Component } from '@angular/core';

@Component({
  selector: 'ngx-http-setup',
  templateUrl: './setup.component.html',
  styleUrls: [ './setup.component.scss' ]
})
export class SetupComponent {
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "NgxHttpSetupComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'setup',
    name: 'Setup'
  };
  /* @tdm-ignore:* */
}

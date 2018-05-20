import { Component } from '@angular/core';

@Component({
  selector: 'form-setup',
  templateUrl: './setup.component.html',
  styleUrls: [ './setup.component.scss' ]
})
export class SetupComponent {
  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "FormsSetupComponent" */ './__tdm-code__'); // tslint:disable-line
  static tutorial = {
    id: 'setup',
    name: 'Setup'
  };
  /* @tdm-ignore:* */
}

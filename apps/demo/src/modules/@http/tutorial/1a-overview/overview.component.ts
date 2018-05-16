import { Component } from '@angular/core';

@Component({
  selector: 'ngx-http-overview',
  templateUrl: './overview.component.html',
  styleUrls: [ './overview.component.scss' ]
})
export class OverviewComponent {
  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "NgxHttpOverviewComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'overview',
    name: 'Overview'
  };
  /* @tdm-ignore:* */
}

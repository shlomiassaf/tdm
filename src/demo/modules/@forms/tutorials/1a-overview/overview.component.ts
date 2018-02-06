import { Component } from '@angular/core';

@Component({
  selector: 'form-overview',
  templateUrl: './overview.component.html',
  styleUrls: [ './overview.component.scss' ]
})
export class OverviewComponent {
  code: any = System.import(/* webpackChunkName: "OverviewComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'overview',
    name: 'Overview'
  };
}

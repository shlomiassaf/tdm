import { Component } from '@angular/core';

@Component({
  selector: 'form-overview',
  templateUrl: './overview.component.html',
  styleUrls: [ './overview.component.scss' ]
})
export class OverviewComponent {
  code: any = import(/* webpackChunkName: "FormsOverviewComponent" */ './__tdm-code__'); // tslint:disable-line
  static tutorial = {
    id: 'overview',
    name: 'Overview'
  };
}

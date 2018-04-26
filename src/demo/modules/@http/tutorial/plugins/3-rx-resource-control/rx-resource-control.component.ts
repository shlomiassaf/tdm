import { Observable } from 'rxjs/Observable';
import { map, skip } from 'rxjs/operators';
import { Component } from '@angular/core';

import { ResourceControl } from '@tdm/data';
import { Customer } from '@shared/client';

@Component({
  selector: 'ngx-http-rx-resource-control',
  templateUrl: './rx-resource-control.component.html',
  styleUrls: [ './rx-resource-control.component.scss' ],
})
export class RxResourceControlComponent {
  code: any = System.import(/* webpackChunkName: "NgxHttpRxResourceControlComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  run: () => any;

  /* @tdm-example: code */
  resourceControl: ResourceControl<Customer>;
  count$: Observable<number>;
  private count: number = 0;

  constructor() {
    this.run = async () => { /* @tdm-ignore-line */
      if (!this.resourceControl) {
        this.resourceControl = Customer.findById('ALFKI').$rc;
        this.count$ = this.resourceControl.self$.pipe(skip(1), map(s => ++this.count));
      } else {
        this.resourceControl.parent.$get();
      }
      return this.resourceControl.next();
    }; /* @tdm-ignore-line */
  }
  /* @tdm-example: code */

  static tutorial = {
    id: 'rx-resource-control',
    name: 'Rx ResourceControl'
  };
}

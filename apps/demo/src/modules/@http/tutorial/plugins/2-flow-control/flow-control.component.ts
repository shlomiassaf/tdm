import { Component } from '@angular/core';

import { ResourceControl } from '@tdm/data';
import { NgDAO, ActiveRecord } from '@tdm/ngx-http-client';
import { Customer } from '@shared/client';

@Component({
  selector: 'ngx-http-flow-control',
  templateUrl: './flow-control.component.html',
  styleUrls: [ './flow-control.component.scss' ],
})
export class FlowControlComponent {
  code: any = import(/* webpackChunkName: "NgxHttpFlowControlComponentComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  run: () => any;

  /* @tdm-example: code */
  resourceControl: ResourceControl<Customer>;
  count: number = 0;

  constructor(private ngDao: NgDAO) {
    this.run = async () => { /* @tdm-ignore-line */
        const promise = ngDao.get(Customer).findById('ALFKI');
        this.resourceControl = ResourceControl.get(<any> promise);
        return new Promise( (resolve, reject) => {
          const replay = () => {
            this.count++;
            if (this.count > 3) {
              resolve();
            } else {
              this.resourceControl = this.resourceControl.replay();
              this.resourceControl.next().then(replay);
            }
          };
          promise.then(replay);
        });
    }; /* @tdm-ignore-line */
  }
  /* @tdm-example: code */

  static tutorial = {
    id: 'flow-control',
    name: 'Flow Control'
  };
}

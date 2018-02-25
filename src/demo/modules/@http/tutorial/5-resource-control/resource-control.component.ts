import { Component } from '@angular/core';
import { ResourceControl, isResourceEvent } from '@tdm/data';
import { NgDAO } from '@tdm/ngx-http-client';

import { Customer } from '../../client';

@Component({
  selector: 'ngx-http-resource-control',
  templateUrl: './resource-control.component.html',
  styleUrls: [ './resource-control.component.scss' ],
})
export class ResourceControlComponent {
  constructor(private ngDao: NgDAO) { }

  click() {
    const promise = this.ngDao.get(Customer).findById('ALFKI');
    promise.then( c => console.log(c) );

    const rc = ResourceControl.get(promise);
    rc.events$.subscribe(event => {
      if (isResourceEvent('ActionError', event)) {
        console.error(event.error);
      } else {
        console.log(event.type);
      }
    });
  }

  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "NgxHttpDaoComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'resource-control',
    name: 'Resource Control'
  };
  /* @tdm-ignore:* */
}

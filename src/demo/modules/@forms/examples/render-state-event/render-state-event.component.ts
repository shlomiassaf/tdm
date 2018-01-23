import { Component } from '@angular/core';
import { BeforeRenderEventHandler } from '@tdm/ngx-dynamic-forms';

import { BeforeRenderEventComponent } from '../before-render-event';
import { User } from '../models';

@Component({
  selector: 'form-render-state-event',
  templateUrl: './render-state-event.component.html',
  styleUrls: [ './render-state-event.component.scss' ]
})
export class RenderStateEventComponent extends BeforeRenderEventComponent {
  model = new User();

  beforeRender($event: BeforeRenderEventHandler): void {
    super.beforeRender($event);
    const ri = $event.instructions['address.state'];
    if (ri) {
      ri.type = 'radio';
      ri.mergeData({ vertical: true });
    }
  }
}

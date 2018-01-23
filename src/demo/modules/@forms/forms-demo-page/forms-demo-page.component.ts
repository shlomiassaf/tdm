import { Component } from '@angular/core';

@Component({
  selector: 'forms-demo-page',
  styleUrls: [ './forms-demo-page.component.scss' ],
  templateUrl: './forms-demo-page.component.html'
})
export class FormsDemoPageComponent {
  selectedExample: any;
  examples = [
    {
      id: 'tempExample',
      name: 'Temp Example'
    },
    {
      id: 'disableHiddenState',
      name: 'Exclude / Disabled / Hidden state'
    },
    {
      id: 'sections',
      name: 'Sections'
    },
    {
      id: 'override',
      name: 'Override'
    },
    {
      id: 'hotBind',
      name: 'Hot Bind'
    },
    {
      id: 'beforeRenderEvent',
      name: 'Event: (beforeRender)'
    },
    {
      id: 'renderStateEvent',
      name: 'Event: (renderState)'
    },
    {
      id: 'fieldSyncRedraw',
      name: 'Field Sync / Redraw'
    }
  ];
}

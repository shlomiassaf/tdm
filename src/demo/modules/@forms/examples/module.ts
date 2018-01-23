import { NgModule } from '@angular/core';

import { TDMFormsModule } from '@tdm/ngx-dynamic-forms';
import { SharedModule } from '@shared';
import { DynamicFormElementComponent, DynamicFormRowComponent } from '../dynamic-forms';

import { TempExampleComponent, DynamicFormContainerComponent } from './temp-example';
import { SectionsComponent } from './sections';
import { OverrideComponent } from './override';
import { ExcludeDisableHiddenStateComponent } from './exclude-disable-hidden-state';
import { HotBindComponent } from './hot-bind';
import { BeforeRenderEventComponent } from './before-render-event';
import { RenderStateEventComponent } from './render-state-event';
import { FieldSyncRedrawComponent } from './field-sync-redraw';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';

const COMPONENTS = [
  TempExampleComponent,
  SectionsComponent,
  OverrideComponent,
  ExcludeDisableHiddenStateComponent,
  HotBindComponent,
  BeforeRenderEventComponent,
  RenderStateEventComponent,
  FieldSyncRedrawComponent,
  FormWrapperComponent
];

@NgModule({
  declarations: [ DynamicFormContainerComponent, DynamicFormElementComponent, DynamicFormRowComponent, COMPONENTS ],
  imports: [
    SharedModule,
    TDMFormsModule.forRoot(DynamicFormRowComponent),
  ],
  exports: [ COMPONENTS ],
  entryComponents: [ DynamicFormContainerComponent ]

})
export class FormsExampleModule {

}

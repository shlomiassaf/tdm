import { NgModule } from '@angular/core';

import { MaterialDynamicFormsModule, } from '@tdm/ngx-dynamic-forms/plugin/material';
import { SharedModule, TutorialService, TutoriableComponent } from '@shared';

import { IntroductionComponent } from './1-introduction';
import { OverviewComponent } from './1a-overview';
import { SetupComponent } from './2-setup';
import { CreatingAModelComponent } from './3-creating-a-model';
import { ElementMetadataComponent } from './4-element-metadata';
import { RenderContainerComponent, DynamicFormRowComponent } from './5-renderer-container';
import { ValidationComponent } from './6-validation';
import { VirtualGroupsComponent } from './7-virtual-groups';
import { LocalOverrideComponent } from './8-local-override';
import { FilterDisableHiddenStateComponent } from './9-filter-disable-hidden-state';
import { HotBindComponent } from './10-hot-bind';
import { DisableFormComponent } from './10a-disable-form';
import { CommitComponent } from './11-commit';
import { ControlOutletComponent } from './12-control-outlet';
import { ControlPanelComponent } from './12-control-panel';
import { ComplexDataStructuresComponent } from './13-complex-data-structure';
import { ChildFormComponent } from './14-child-form';
import { FlatteningComponent } from './15-flattening';
import { ArraysComponent } from './16-arrays';

import {
  BeforeRenderEventComponent,
  RenderStateEventComponent,
  FieldSyncRedrawComponent,
  ValueChangesEventComponent
} from './events';

import {
  TheRendererComponent,
  ExtendingTheRendererComponent,
  ChildFormRendererComponent,
  ArrayRendererComponent,

  RendererV1Component,
  RendererV2Component,
  RendererV3Component,
  RendererV4Component
} from './renderer';

import { FormsSharedModule } from '../shared';

const TUTORIALS: Array<TutoriableComponent<any>> = [
  IntroductionComponent,
  OverviewComponent,
  SetupComponent,
  CreatingAModelComponent,
  ElementMetadataComponent,
  RenderContainerComponent,
  ValidationComponent,
  VirtualGroupsComponent,
  LocalOverrideComponent,
  FilterDisableHiddenStateComponent,
  HotBindComponent,
  DisableFormComponent,
  CommitComponent,
  ControlOutletComponent,
  ControlPanelComponent,

  BeforeRenderEventComponent,
  RenderStateEventComponent,
  FieldSyncRedrawComponent,
  ValueChangesEventComponent,

  ComplexDataStructuresComponent,
  ChildFormComponent,
  FlatteningComponent,
  ArraysComponent,

  TheRendererComponent,
  ExtendingTheRendererComponent,
  ChildFormRendererComponent,
  ArrayRendererComponent
];

const COMPONENTS = [
  TUTORIALS,
  DynamicFormRowComponent,
  RendererV1Component,
  RendererV2Component,
  RendererV3Component,
  RendererV4Component
];

function isTutorial(value: any): value is TutoriableComponent<any> {
  return !!(value.tutorial && value.tutorial.name && value.tutorial.id);
}

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    SharedModule,
    FormsSharedModule,
    MaterialDynamicFormsModule.forRoot(),
  ],
  providers: [ TutorialService ],
  exports: [ COMPONENTS ],
  entryComponents: [
    TUTORIALS,
    DynamicFormRowComponent,
    RendererV1Component,
    RendererV2Component,
    RendererV3Component,
    RendererV4Component
  ]

})
export class FormsTutorialsModule {
  constructor(tutorialService: TutorialService) {
    for ( let c of TUTORIALS ) {
      if ( isTutorial(c) ) {
        tutorialService.addTutorial(c);
      }
    }
  }
}

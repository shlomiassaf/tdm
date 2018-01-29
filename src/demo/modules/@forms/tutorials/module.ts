import { NgModule } from '@angular/core';

import { DynamicFormsModule } from '@tdm/ngx-dynamic-forms';
import { SharedModule, TutorialService, TutoriableComponent } from '@shared';
import { DynamicFormElementComponent, DynamicFormRowComponent } from '../dynamic-forms';

import { TempExampleComponent, DynamicFormContainerComponent } from './temp-example';
import { IntroductionComponent } from './1-introduction';
import { ArchitectureComponent } from './1a-architecture';
import { SetupComponent } from './2-setup';
import { CreatingAModelComponent } from './3-creating-a-model';
import { SimpleRendererComponent, TutorialSimpleRendererComponent } from './4-simple-renderer';
import { CheckpointComponent } from './5-checkpoint';
import { TutorialRendererV2Component, ABetterRendererComponent } from './6-a-better-renderer';
import { VirtualGroupsComponent } from './7-virtual-groups';
import { OverrideComponent } from './override';
import { ExcludeDisableHiddenStateComponent } from './exclude-disable-hidden-state';
import { HotBindComponent } from './hot-bind';
import { BeforeRenderEventComponent } from './before-render-event';
import { RenderStateEventComponent } from './render-state-event';
import { FieldSyncRedrawComponent } from './field-sync-redraw';
import { FormsSharedModule } from '../shared';

const TUTORIALS: Array<TutoriableComponent<any>> = [
  IntroductionComponent,
  ArchitectureComponent,
  SetupComponent,
  CreatingAModelComponent,
  SimpleRendererComponent,
  CheckpointComponent,
  ABetterRendererComponent,
  VirtualGroupsComponent,

  OverrideComponent,
  ExcludeDisableHiddenStateComponent,
  HotBindComponent,
  BeforeRenderEventComponent,
  RenderStateEventComponent,
  FieldSyncRedrawComponent
];

const COMPONENTS = [
  TempExampleComponent,
  TUTORIALS,
  TutorialSimpleRendererComponent,
  TutorialRendererV2Component
];

function isTutorial(value: any): value is TutoriableComponent<any> {
  return !! (value.tutorial && value.tutorial.name && value.tutorial.id);
}

@NgModule({
  declarations: [ DynamicFormContainerComponent, DynamicFormElementComponent, DynamicFormRowComponent, COMPONENTS ],
  imports: [
    SharedModule,
    FormsSharedModule,
    DynamicFormsModule.forRoot(DynamicFormRowComponent),
  ],
  providers: [ TutorialService ],
  exports: [ COMPONENTS ],
  entryComponents: [
    DynamicFormContainerComponent,
    TUTORIALS,
    TutorialSimpleRendererComponent,
    TutorialRendererV2Component
  ]

})
export class FormsTutorialsModule {
  constructor(tutorialService: TutorialService) {
    for (let c of TUTORIALS) {
      if (isTutorial(c)) {
        tutorialService.addTutorial(c);
      }
    }
  }
}

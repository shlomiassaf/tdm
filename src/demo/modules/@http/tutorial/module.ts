import { NgModule } from '@angular/core';

import { SharedModule, TutorialService, TutoriableComponent } from '@shared';
import { HttpResourceSharedModule } from '@http/shared';
import { IntroductionComponent } from './1-introduction';
import { OverviewComponent } from './1a-overview';
import { SetupComponent } from './2-setup';
import { CreatingAModelComponent } from './3-creating-a-model';
import { DaoComponent } from './4-dao';
import { OptionsComponent } from './5-options';
import { StaticOptionsComponent } from './6-static-options';
import { ResourceControlComponent } from './7-resource-control';
import { ActiveRecordComponent } from './8-active-record';
import {
  EventsComponent,
  CancellingComponent
} from './resource-control';

const TUTORIALS: Array<TutoriableComponent<any>> = [
  IntroductionComponent,
  OverviewComponent,
  SetupComponent,
  CreatingAModelComponent,
  DaoComponent,
  OptionsComponent,
  StaticOptionsComponent,
  ResourceControlComponent,
  ActiveRecordComponent,
  EventsComponent,
  CancellingComponent
];

const COMPONENTS = [
  TUTORIALS
];

function isTutorial(value: any): value is TutoriableComponent<any> {
  return !!(value.tutorial && value.tutorial.name && value.tutorial.id);
}

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    SharedModule,
    HttpResourceSharedModule
  ],
  providers: [ TutorialService ],
  exports: [ COMPONENTS ],
  entryComponents: [
    TUTORIALS
  ]
})
export class NgxHttpTutorialsModule {
  constructor(tutorialService: TutorialService) {
    for ( let c of TUTORIALS ) {
      if ( isTutorial(c) ) {
        tutorialService.addTutorial(c);
      }
    }
  }
}

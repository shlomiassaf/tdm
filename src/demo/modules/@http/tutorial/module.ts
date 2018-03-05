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

import { TodoComponent } from './todo';

import {
  ActiveRecordComponent,
  FlowControlComponent,
  RxResourceControlComponent
} from './plugins';
import {
  ResourceControlComponent,
  EventsComponent,
  CancellingComponent,
  NextComponent
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
  EventsComponent,
  CancellingComponent,
  NextComponent,
  ActiveRecordComponent,
  FlowControlComponent,
  RxResourceControlComponent,
  TodoComponent
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

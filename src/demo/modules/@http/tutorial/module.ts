import { NgModule } from '@angular/core';

import { SharedModule, TutorialService, TutoriableComponent } from '@shared';

import { IntroductionComponent } from './1-introduction';
import { SetupComponent } from './2-setup';
import { CreatingAModelComponent } from './3-creating-a-model';
import { DaoComponent } from './4-dao';
import { OptionsComponent } from './5-options';
import { ResourceControlComponent } from './5-resource-control';

const TUTORIALS: Array<TutoriableComponent<any>> = [
  IntroductionComponent,
  SetupComponent,
  CreatingAModelComponent,
  DaoComponent,
  OptionsComponent,
  ResourceControlComponent
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
    SharedModule
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

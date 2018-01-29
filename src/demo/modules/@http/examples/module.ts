import { NgModule } from '@angular/core';

import { SharedModule, TutorialService, TutoriableComponent } from '@shared';

import { CountryPageComponent } from './country';
import { VehiclePageComponent } from './vehicle';
import { NpmsPageComponent   } from './npms';

const EXAMPLES: Array<TutoriableComponent<any>> = [
  CountryPageComponent,
  VehiclePageComponent,
  NpmsPageComponent
];

const COMPONENTS = [
  EXAMPLES
];

function isTutorial(value: any): value is TutoriableComponent<any> {
  return !! (value.tutorial && value.tutorial.name && value.tutorial.id);
}

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    SharedModule
  ],
  providers: [ TutorialService ],
  exports: [ COMPONENTS ],
  entryComponents: [EXAMPLES ]

})
export class NgxHttpExamplesModule {
  constructor(tutorialService: TutorialService) {
    for (let c of EXAMPLES) {
      if (isTutorial(c)) {
        tutorialService.addTutorial(c);
      }
    }
  }
}

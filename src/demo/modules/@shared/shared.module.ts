import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpDefaultConfig } from '@tdm/ngx-http-client';

import { MODULES, ROOT_MODULES } from './modules';
import { UiBlockService } from './services/ui-block';
import { LocationService } from './services/location.service';
import {
  UiBlock,
  TdmCodeViewComponent,
  TdmMarkdownViewComponent,
  TdmPackageWelcomeComponent,
  TdmFeatureListComponent,
  TdmLedComponent,
  TutorialPageComponent
} from './components';
import { CdkDetailRowDirective } from './cdk-detail-row.directive';
import { AnchorTrapDirective } from './directives/anchor-trap.directive';
import { DataSourceDirective } from './data-source';
import { TdmCodeExtractPipe } from './pipes';

const DECLARATIONS = [
  TdmCodeViewComponent,
  TdmMarkdownViewComponent,
  TdmPackageWelcomeComponent,
  TdmFeatureListComponent,
  TdmLedComponent,
  TutorialPageComponent,
  UiBlock,
  CdkDetailRowDirective,
  AnchorTrapDirective,
  DataSourceDirective,
  TdmCodeExtractPipe
];

@NgModule({
  declarations: DECLARATIONS,
  imports: MODULES,
  entryComponents: [ UiBlock ],
  exports: DECLARATIONS
})
export class DeclarationSharedModule {
}

// tslint:disable-next-line
@NgModule({
  imports: ROOT_MODULES,
  exports: [
    ...MODULES,
    DeclarationSharedModule
  ],
  providers: [
    UiBlockService,
    LocationService,
    { provide: HttpDefaultConfig, useValue: HttpDefaultConfig.create({baseUrl: '/api'} ) }
  ]
})
export class SharedModuleRoot { }

// tslint:disable-next-line
@NgModule({
  imports: MODULES,
  exports: [
    ...MODULES,
    DeclarationSharedModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModuleRoot };
  }
}

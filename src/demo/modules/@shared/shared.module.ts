import { NgModule, ModuleWithProviders } from '@angular/core';

import { MODULES, ROOT_MODULES } from './modules';
import { UiBlockService } from './services/ui-block';
import {
  UiBlock,
  TdmCodeViewComponent,
  TdmMarkdownViewComponent,
  TdmPackageWelcomeComponent,
  TdmFeatureListComponent,
  TdmLedComponent
} from './components';
import { CdkDetailRowDirective } from './cdk-detail-row.directive';
import { DataSourceDirective } from './data-source';
import { TdmCodeExtractPipe } from './pipes';

const DECLARATIONS = [
  TdmCodeViewComponent,
  TdmMarkdownViewComponent,
  TdmPackageWelcomeComponent,
  TdmFeatureListComponent,
  TdmLedComponent,
  UiBlock,
  CdkDetailRowDirective,
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
  providers: [ UiBlockService ]
})
export class SharedModuleRoot {
}

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

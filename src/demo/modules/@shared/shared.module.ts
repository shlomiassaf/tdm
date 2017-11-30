import { NgModule, ModuleWithProviders } from '@angular/core';

import { MODULES, ROOT_MODULES } from './modules';
import { UiBlockService } from './services/ui-block';
import { UiBlock } from './components/ui-block.component';
import { CdkDetailRowDirective } from './cdk-detail-row.directive';

@NgModule({
  declarations: [ UiBlock, CdkDetailRowDirective ],
  imports: MODULES,
  entryComponents: [ UiBlock ],
  exports: [ UiBlock, CdkDetailRowDirective ]
})
export class DeclarationSharedModule {
}

const exportModules = MODULES.concat( [DeclarationSharedModule] );


@NgModule({
  imports: ROOT_MODULES,
  exports: exportModules,
  providers: [ UiBlockService ]
})
export class SharedModuleRoot {}

@NgModule({
  imports: MODULES,
  exports: exportModules
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModuleRoot };
  }
}

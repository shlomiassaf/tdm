import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { runAfterBootstrap } from './providers';

import { NgDAO } from './register';

@NgModule({
  imports: [ HttpModule ]
})
export class HttpResourceModuleForRoot {
  constructor(http: Http) {
    runAfterBootstrap(http);
  }
}


@NgModule({ })
export class HttpResourceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpResourceModuleForRoot,
      providers: [{ provide: NgDAO, useValue: new NgDAO() }]
    }
  }
}

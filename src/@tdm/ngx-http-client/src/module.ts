import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { runAfterBootstrap } from './providers';

import { NgDAO } from './register';

@NgModule({
  imports: [ HttpClientModule ]
})
export class HttpClientResourceModuleForRoot {
  constructor(http: HttpClient) {
    runAfterBootstrap(http);
  }
}


@NgModule()
export class HttpClientResourceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpClientResourceModuleForRoot,
      providers: [ NgDAO ]
    };
  }
}

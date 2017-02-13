import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { runAfterBootstrap } from './providers';

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
      providers: []
    }
  }
}

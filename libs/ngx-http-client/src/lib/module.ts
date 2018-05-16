import { NgModule, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { setDefaultFactoryArgs } from './core/http-adapter';
import { NgDAO } from './register';
import { HttpDefaultConfig } from './http-default-config';

@NgModule({
  providers: [NgDAO]
})
export class HttpClientResourceModule {
  constructor(
    @Optional() httpClient: HttpClient,
    @Optional() defaultConfig?: HttpDefaultConfig
  ) {
    if (!httpClient) {
      throw new Error(
        'HttpClientResourceModule could not access HttpClient, did you import HttpClientModule?'
      );
    }
    // every module, we set the last http client.
    setDefaultFactoryArgs({
      httpClient,
      defaultConfig: defaultConfig || new HttpDefaultConfig()
    });
  }
}

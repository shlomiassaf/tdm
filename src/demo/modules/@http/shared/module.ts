import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';

import { HttpResourceWrapperComponent } from './http-resource-wrapper/http-resource-wrapper.component';

@NgModule({
  declarations: [ HttpResourceWrapperComponent ],
  imports: [
    SharedModule
  ],
  exports: [ HttpResourceWrapperComponent ]
})
export class HttpResourceSharedModule {

}

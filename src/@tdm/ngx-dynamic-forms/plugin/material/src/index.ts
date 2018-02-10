import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { isFunction } from '@tdm/core/tdm';
import { DynamicFormsModule, DefaultRenderer } from '@tdm/ngx-dynamic-forms';
import { MaterialModule } from './material';
import { MaterialFormControlRenderer } from './dynamic-forms';

export { MaterialFormControlRenderer } from './dynamic-forms';

@NgModule({
  declarations: [ MaterialFormControlRenderer ],
  imports: [ CommonModule, ReactiveFormsModule, MaterialModule, DynamicFormsModule ],
  exports: [ MaterialFormControlRenderer, DynamicFormsModule ],
  entryComponents: [ MaterialFormControlRenderer ]
})
export class MaterialDynamicFormsModule {
  static forRoot(defaultRenderer?: DefaultRenderer): ModuleWithProviders {
    if (defaultRenderer && !isFunction(defaultRenderer)) {
      if ( !('*' in defaultRenderer) ) {
        defaultRenderer['*'] = MaterialFormControlRenderer;
      }
    }
    return {
      ngModule: MaterialDynamicFormsModule,
      providers: [
        ...DynamicFormsModule.forRoot(defaultRenderer || MaterialFormControlRenderer).providers
      ]
    };
  }
}

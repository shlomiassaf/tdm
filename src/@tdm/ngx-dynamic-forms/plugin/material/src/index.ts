import { ComponentFactoryResolver, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { isFunction } from '@tdm/core/tdm';
import { DynamicFormsModule, DefaultRenderer } from '@tdm/ngx-dynamic-forms';
import { MaterialModule } from './material';
import { MaterialTemplateStoreComponent, MaterialFormControlRenderer, storeContainer } from './dynamic-forms';

export { MaterialFormControlRenderer } from './dynamic-forms';

@NgModule({
  declarations: [ MaterialTemplateStoreComponent, MaterialFormControlRenderer ],
  imports: [ CommonModule, ReactiveFormsModule, MaterialModule, DynamicFormsModule ],
  exports: [ MaterialFormControlRenderer, DynamicFormsModule ],
  entryComponents: [ MaterialTemplateStoreComponent, MaterialFormControlRenderer ]
})
export class MaterialDynamicFormsModule {
  constructor(injector: Injector, cfr: ComponentFactoryResolver) {
    if (!storeContainer.store) {
      // we use a static store, there is no point of using DI if it's always the same store.
      const factory = cfr.resolveComponentFactory(MaterialTemplateStoreComponent);
      storeContainer.store = factory.create(injector).instance;
    }
  }

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

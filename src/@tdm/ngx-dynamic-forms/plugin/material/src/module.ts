import { ComponentFactoryResolver, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormsModule, DefaultRenderer } from '@tdm/ngx-dynamic-forms';
import { MaterialModule } from './material';
import {
  GlobalMaterialFormControlDirective,
  MaterialTemplateStoreComponent,
  MaterialFormControlRenderer,
  storeContainer
} from './renderer/index';

@NgModule({
  declarations: [ GlobalMaterialFormControlDirective, MaterialTemplateStoreComponent, MaterialFormControlRenderer ],
  imports: [ CommonModule, ReactiveFormsModule, MaterialModule, DynamicFormsModule ],
  exports: [ GlobalMaterialFormControlDirective, MaterialFormControlRenderer, DynamicFormsModule ],
  entryComponents: [MaterialTemplateStoreComponent, MaterialFormControlRenderer]
})
export class MaterialDynamicFormsModule {
  constructor(injector: Injector, cfr: ComponentFactoryResolver) {
    if (!storeContainer.store) {
      // we use a static store, there is no point of using DI if it's always the same store.
      const factory = cfr.resolveComponentFactory(MaterialTemplateStoreComponent);
      const cmpRef = factory.create(injector);
      cmpRef.changeDetectorRef.detectChanges();
      storeContainer.store = cmpRef.instance;
    }
  }

  static forRoot(defaultRenderer?: DefaultRenderer): ModuleWithProviders {
    // if (defaultRenderer && !isFunction(defaultRenderer)) {
    //   if ( !('*' in defaultRenderer) ) {
    //     defaultRenderer['*'] = MaterialFormControlRenderer;
    //   }
    // }
    return {
      ngModule: MaterialDynamicFormsModule,
      providers: [...DynamicFormsModule.forRoot(defaultRenderer || MaterialFormControlRenderer).providers]
    };
  }
}

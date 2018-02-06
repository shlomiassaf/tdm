import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormsModule } from '@tdm/ngx-dynamic-forms';
import { MaterialModule } from './material';
import { DynamicFormElementComponent } from './dynamic-forms';

export { DynamicFormElementComponent } from './dynamic-forms';

@NgModule({
  declarations: [ DynamicFormElementComponent ],
  imports: [ CommonModule, ReactiveFormsModule, MaterialModule, DynamicFormsModule ],
  exports: [ DynamicFormElementComponent, DynamicFormsModule ],
  entryComponents: [ DynamicFormElementComponent ]
})
export class MaterialDynamicFormsModule {
  static forRoot(component?: Type<any>): ModuleWithProviders {
    return {
      ngModule: MaterialDynamicFormsModule,
      providers: [
        ...DynamicFormsModule.forRoot(component || DynamicFormElementComponent).providers
      ]
    };
  }
}

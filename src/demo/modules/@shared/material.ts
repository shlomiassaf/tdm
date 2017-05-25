import { NgModule } from '@angular/core';

import {
  MdRippleModule,
  RtlModule,
  ObserveContentModule,
  PortalModule,
  OverlayModule,
  A11yModule,
  CompatibilityModule,

  MdButtonToggleModule,
  MdButtonModule,
  MdCheckboxModule,
  MdRadioModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdSliderModule,
  MdSidenavModule,
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdChipsModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdInputModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdMenuModule,
  MdDialogModule,
  PlatformModule,
  MdAutocompleteModule,
  StyleModule,

} from '@angular/material';


const MATERIAL_MODULES = [
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdChipsModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  RtlModule,
  StyleModule,
  A11yModule,
  PlatformModule,
  CompatibilityModule,
  ObserveContentModule,
];


@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {
}
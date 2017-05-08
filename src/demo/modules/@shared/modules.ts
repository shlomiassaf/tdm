import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { HttpResourceModule } from '@tdm/angular-http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

export const ROOT_MODULES: any = [
  CommonModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  HttpModule,
  MaterialModule,
  NgxDatatableModule,
  HttpResourceModule.forRoot()
];

export const MODULES: any = [
  CommonModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  HttpModule,
  MaterialModule,
  NgxDatatableModule,
  HttpResourceModule
];

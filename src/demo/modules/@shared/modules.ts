import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpResourceModule } from '@tdm/ngx-http';
import { MaterialModule } from './material';

export const ROOT_MODULES: any = [
  CommonModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  HttpModule,
  MaterialModule,
  HttpResourceModule.forRoot()
];

export const MODULES: any = [
  CommonModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  HttpModule,
  MaterialModule,
  HttpResourceModule
];

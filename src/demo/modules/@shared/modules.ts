import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientResourceModule } from '@tdm/ngx-http-client';

import { MaterialModule } from './material';
import { TocModule } from './toc';

export const ROOT_MODULES: any = [
  CommonModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  HttpClientModule,
  MaterialModule,
  HttpClientResourceModule.forRoot(),
  TocModule
];

export const MODULES: any = [
  CommonModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule,
  MaterialModule,
  HttpClientResourceModule,
  TocModule
];

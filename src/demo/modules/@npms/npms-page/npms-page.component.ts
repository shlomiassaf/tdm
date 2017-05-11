import { Observable } from "rxjs/Observable";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TDMCollection } from "@tdm/data";

import { UiBlockService, UiBlock } from '@shared';
import { Package } from '../models';

@Component({
  selector: 'npms-page',
  styleUrls: [ './npms-page.component.css' ],
  templateUrl: './npms-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NpmsPageComponent {
  package: Package;
  packages: TDMCollection<Package>;

  columns: any;

  form: FormGroup;

  @ViewChild('table') table: any;
  @ViewChild('rowExpendTpl') rowExpendTpl: any;


  get obs$(): Observable<any> {
    if (this.packages) {
      return this.packages.$ar.self$;
    } else if (this.package) {
      return this.package.$ar.self$.map( v => [v]);
    }
  }
  constructor(fb: FormBuilder, public uiBlock: UiBlockService) {
    this.form = fb.group({
      searchValue: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.columns = [
      { prop: 'name', cellTemplate: this.rowExpendTpl },
      { prop: 'analyzedAt' }
    ];
  }

  toggleExpandRow(row: any) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  search(): void {
    const value = this.form.get('searchValue').value.split(', ').map( v => v.trim()).filter( v => !!v);

    if (value.length === 0) {
      return;
    }

    if (value.length === 1) {
      this.packages = undefined;
      this.package = <any>Package.find(value[0]);
      this.uiBlock.closeWithPromise(this.package.$ar.next()).open(UiBlock);
      this.package.$ar.next().then( self => self.name = value[0] );
    } else {
      this.packages = <any>Package.query(value);
      this.uiBlock.closeWithPromise(this.packages.$ar.next()).open(UiBlock);
    }
  }
}

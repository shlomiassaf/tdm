import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { TDMCollection } from '@tdm/data';

import { UiBlockService, UiBlock, DataSourceContainer } from '@shared';
import { Package } from '../models';

@Component({
  selector: 'npms-page',
  styleUrls: [ './npms-page.component.css' ],
  templateUrl: './npms-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('void', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('*', style({height: '*', visibility: 'visible'})),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class NpmsPageComponent {
  package: Package;
  packages: TDMCollection<Package>;
  dataSource = new DataSourceContainer([]);

  columns = [
    'name',
    'analyzedAt'
  ];

  form: FormGroup;

  get obs$(): Observable<any> {
    if (this.packages) {
      return this.packages.$rc.self$;
    } else if (this.package) {
      return this.package.$rc.self$.map( v => [v]);
    }
  }
  constructor(fb: FormBuilder, public uiBlock: UiBlockService) {
    this.form = fb.group({
      searchValue: ['', Validators.required]
    });
  }

  search(): void {
    const value = this.form.get('searchValue').value.split(', ').map( v => v.trim()).filter( v => !!v);

    if (value.length === 0) {
      return;
    }

    if (value.length === 1) {
      this.packages = undefined;
      this.package = <any>Package.findById(value[0]);
      this.uiBlock.closeWithPromise(this.package.$rc.next()).open(UiBlock);
      this.package.$rc.next().then( self => {
        self.name = value[0];
        this.dataSource.updateSource(this.obs$);
      });
    } else {
      this.packages = <any>Package.query(value);
      this.packages.$rc.next().then( () => this.dataSource.updateSource(this.obs$) );
      this.uiBlock.closeWithPromise(this.packages.$rc.next()).open(UiBlock);
    }
  }

  static tutorial = {
    id: 'npms',
    name: 'NPMS'
  };
}

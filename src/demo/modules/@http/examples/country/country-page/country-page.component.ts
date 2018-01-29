import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { UiBlockService, UiBlock, DataSourceContainer } from '@shared';
import { Country, CountryCollection } from '../models';

@Component({
  selector: 'country-page',
  styleUrls: [ './country-page.component.css' ],
  templateUrl: './country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('void', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('*', style({height: '*', visibility: 'visible'})),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class CountryPageComponent {
  countries: Country | CountryCollection;

  dataSource = new DataSourceContainer([]);
  displayedColumns = [
    'flag',
    'name',
    'nativeName',
    'region',
    'map'
  ];

  form: FormGroup;

  constructor(fb: FormBuilder, public uiBlock: UiBlockService) {
    this.form = fb.group({
      searchValue: ['', Validators.required],
      searchType: ['name', Validators.required]
    });
  }

  search(): void {
    const value = this.form.get('searchValue').value;
    const type = this.form.get('searchType').value;

    switch (type) {
      case 'name':
        const coll = this.countries = Country.query(type, value);
        coll.$rc.next().then( () => this.dataSource.updateSource(coll.$rc.self$) );
        break;
      case 'countryCode':
        const country = this.countries = Country.findCountryCode(value);
        country.$rc.next().then( () => this.dataSource.updateSource(country.$rc.self$.map( c => [c] )) );
        break;
      default:
        return;
    }

    this.uiBlock.closeWithPromise(this.countries.$rc.next()).open(UiBlock);
  }

  static tutorial = {
    id: 'countryAPI',
    name: 'Country API'
  };
}

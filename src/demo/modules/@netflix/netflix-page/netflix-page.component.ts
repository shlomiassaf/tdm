import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { UiBlockService, UiBlock, DataSourceContainer } from '@shared';
import { Title, TitleCollection } from '../models';

@Component({
  selector: 'netflix-page',
  styleUrls: [ './netflix-page.component.css' ],
  templateUrl: './netflix-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetflixPageComponent {
  title: Title;
  titles: TitleCollection;
  dataSource = new DataSourceContainer([]);
  displayedColumns = [
    'unit',
    'showId',
    'showTitle',
    'releaseYear',
    'rating',
    'category',
    'showCast',
    'director',
    'summary',
    'poster',
    'mediatype',
    'runtime'
  ];

  form: FormGroup;

  @ViewChild('linkedTpl') linkedTpl: any;
  @ViewChild('imgTpl') imgTpl: any;

  get obs$(): Observable<any> {
    if (this.titles) {
      return this.titles.$rc.self$;
    } else if (this.title) {
      return this.title.$rc.self$.map( v => [v]);
    }
  }
  constructor(fb: FormBuilder, public uiBlock: UiBlockService) {
    this.form = fb.group({
      searchValue: ['', Validators.required],
      searchType: ['title', Validators.required]
    });
  }

  goTo(value: string, col: any) {
    switch (col) {
      case 'director':
        this.form.get('searchType').setValue('director');
        break;
      case 'showCast':
        this.form.get('searchType').setValue('actor');
        break;
      default:
        return;
    }
    this.form.get('searchValue').setValue(value);
    this.search();
  }

  split(value: string): string[] {
    return value.split(',').map( v => v.trim() );
  }

  search(): void {
    const value = this.form.get('searchValue').value;
    const type = this.form.get('searchType').value;

    if (type === 'title') {
      this.titles = undefined;
      this.title = Title.findById(value);
      this.title.$rc.next().then( () => this.dataSource.updateSource(this.obs$) );
      this.uiBlock.closeWithPromise(this.title.$rc.next()).open(UiBlock);
    } else {
      if (!this.titles) {
        this.titles = Title.query(type, value);
        this.titles.$rc.next().then( () => this.dataSource.updateSource(this.obs$) );
      } else {
        this.titles.query(type, value);
      }

      this.uiBlock.closeWithPromise(this.titles.$rc.next()).open(UiBlock);
    }
  }
}

import { Observable } from "rxjs/Observable";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActiveRecordCollection } from "@tdm/core";

import { UiBlockService, UiBlock } from '@shared';
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

  columns: any;


  form: FormGroup;

  @ViewChild('linkedTpl') linkedTpl: any;
  @ViewChild('imgTpl') imgTpl: any;

  get obs$(): Observable<any> {
    if (this.titles) {
      return this.titles.$ar.self$;
    } else if (this.title) {
      return this.title.$ar.self$.map( v => [v]);
    }
  }
  constructor(fb: FormBuilder, public uiBlock: UiBlockService) {
    this.form = fb.group({
      searchValue: ['', Validators.required],
      searchType: ['title', Validators.required]
    });
  }

  ngOnInit() {
    this.columns = [
      { prop: 'unit' },
      { prop: 'showId' },
      { prop: 'showTitle' },
      { prop: 'releaseYear' },
      { prop: 'rating' },
      { prop: 'category' },
      { prop: 'showCast', cellTemplate: this.linkedTpl },
      { prop: 'director', cellTemplate: this.linkedTpl },
      { prop: 'summary' },
      { prop: 'poster', cellTemplate: this.imgTpl },
      { prop: 'mediatype' },
      { prop: 'runtime' }
    ];
  }

  goTo(value: string, col: any) {
    switch (col.prop) {
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
      this.title = Title.find(value);
      this.uiBlock.closeWithPromise(this.title.$ar.next()).open(UiBlock);
    } else {
      if (!this.titles) {
        this.titles = Title.query(type, value);
      } else {
        this.titles.query(type, value);
      }

      this.uiBlock.closeWithPromise(this.titles.$ar.next()).open(UiBlock);
    }
  }
}

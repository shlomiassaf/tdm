import { Component, Input, ChangeDetectionStrategy, SimpleChanges, OnChanges } from '@angular/core';

export interface CodeViewItem {
  file?: string;
  title?: string;
  code: string;
  lang: 'ts' | 'html' | 'css' | 'scss';
}

@Component({
  selector: 'tdm-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: [ './code-view.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdmCodeViewComponent implements OnChanges {

  @Input() code: CodeViewItem | CodeViewItem[];
  multi: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.code) {
      this.multi = Array.isArray(this.code);
    }
  }
}

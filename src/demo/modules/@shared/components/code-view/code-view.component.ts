import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { highlightAuto } from 'highlight.js';

export interface CodeViewItem {
  file?: string;
  title?: string;
  code: string;
  lang: 'ts' | 'html' | 'css' | 'scss';
}

const LANG_MAP = {
  ts: 'typescript'
};

@Component({
  selector: 'tdm-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: [ './code-view.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdmCodeViewComponent {
  @Input() code: CodeViewItem[];

  parseCode(c: CodeViewItem): string {
    return highlightAuto(c.code, [LANG_MAP[c.lang] || c.lang]).value;
  }
}

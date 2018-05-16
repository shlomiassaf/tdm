import { Component, Input, ChangeDetectionStrategy, SimpleChanges, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'tdm-markdown-view',
  templateUrl: './markdown-view.component.html',
  styleUrls: [ './markdown-view.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdmMarkdownViewComponent implements OnChanges {
  @Input() overflowContainer: boolean;
  @Input() markdown: string;
  @Input() code: {
    lang: string;
    code: string;
  };

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('overflowContainer' in changes) {
      this.overflowContainer = coerceBooleanProperty(this.overflowContainer);
    }
    if ('markdown' in changes) {
      this.markdown = <any> this.sanitizer.bypassSecurityTrustHtml(this.markdown);
    }
  }
}

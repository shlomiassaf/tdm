import { Component, Input, ChangeDetectionStrategy, SimpleChanges, OnChanges } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'tdm-led',
  templateUrl: './led.component.html',
  styleUrls: [ './led.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdmLedComponent implements OnChanges {
  @Input() color: 'red' | 'blue' | 'yellow' | 'green';
  @Input() disabled: boolean;
  @Input() blink: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if ('disabled' in changes) {
      this.disabled = coerceBooleanProperty(this.disabled);
    }
    if ('blink' in changes) {
      this.blink = coerceBooleanProperty(this.blink);
    }
  }
}

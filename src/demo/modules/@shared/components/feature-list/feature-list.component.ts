import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export interface TdmFeatureListItem {
  title: string;
  description: string;
  /**
   * When true, the description is markdown html.
   */
  md?: boolean;
}

@Component({
  selector: 'tdm-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: [ './feature-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdmFeatureListComponent {
  @Input() features: TdmFeatureListItem[];
}

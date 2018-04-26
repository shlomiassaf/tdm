import { Component, ViewEncapsulation } from '@angular/core';
import { TopNavService } from '@shared';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  constructor(public topNavService: TopNavService) { }
}

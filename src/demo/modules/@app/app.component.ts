/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] " routerLinkActive="active">Home</a>
      <a [routerLink]=" ['./netflix'] " routerLinkActive="active">Netflix Roulette</a>
      <a [routerLink]=" ['./vehicles'] " routerLinkActive="active">Vehicles</a>
      <a [routerLink]=" ['./npms'] " routerLinkActive="active">Npms</a>
      <a [routerLink]=" ['./forms'] " routerLinkActive="active">@forms</a>
        <a [routerLink]=" ['./playground'] " routerLinkActive="active">Playground</a>
    </nav>

    <main>
      <div class="main-view">
        <router-outlet></router-outlet>
      </div>      
    </main>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy, TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { TocAreaDirective } from './toc-area.directive';
import { TocHeadDirective, TocLink } from './toc-head.directive';

export interface TocLinkTemplateContext {
  $implicit: {
    rootUrl: string;
    link: TocLink;
  }
}

@Component({
  selector: 'tdm-toc',
  templateUrl: './toc.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TocComponent implements OnDestroy {
  rootUrl: string;

  /**
   * Use an internal subject to proxy all incoming data from the TocAreaDirective.linksChanged stream
   * The proxy is in-place to prevent redundant rendering of items in the link detection phase
   * where link's register one by one
   * @internal
   */
  linksChanged = new Subject<TocHeadDirective[]>();

  /**
   * @internal
   */
  activeLink: TocHeadDirective;

  @Input()
  get tocArea(): TocAreaDirective {
    return this._tocArea;
  }
  set tocArea(value: TocAreaDirective) {
    if (this._tocArea !== value) {
      this._tocArea = value;
      this.destroyLocal();
      if (value) {
        this._linksChangedSubscription = value.linksChanged.debounceTime(10).subscribe(this.linksChanged);

        this._activeLinkSubscription = value.activeLinkChanged
          .filter(activeLink => activeLink !== this.activeLink)
          .subscribe(al => {
            this.activeLink = al;
            this.cdr.detectChanges();
          });
      }
    }
  }

  linkTemplate?: TemplateRef<TocLinkTemplateContext>;

  private _tocArea: TocAreaDirective;
  private _routeSubscription: Subscription;
  private _linksChangedSubscription: Subscription;
  private _activeLinkSubscription: Subscription;

  constructor(router: Router, private cdr: ChangeDetectorRef) {
    this._routeSubscription = router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => (this.rootUrl = router.url.split('#')[0]));
  }

  setLinkTemplate(template: TemplateRef<TocLinkTemplateContext>): void {
    this.linkTemplate = template;
  }

  ngOnDestroy(): void {
    this._routeSubscription.unsubscribe();
    this.destroyLocal();
  }

  private destroyLocal(): void {
    if (this._linksChangedSubscription) {
      this._linksChangedSubscription.unsubscribe();
      this._linksChangedSubscription = undefined;
    }
    if (this._activeLinkSubscription) {
      this._activeLinkSubscription.unsubscribe();
      this._activeLinkSubscription = undefined;
    }
  }
}

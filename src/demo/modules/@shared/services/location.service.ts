/**
 * Based on https://github.com/angular/angular/blob/master/aio/src/app/shared/location.service.ts
 */
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Location, PlatformLocation } from '@angular/common';
import { NavigationExtras, Router, UrlSegment } from '@angular/router';

@Injectable()
export class LocationService {
  currentUrl: Observable<string>;
  currentPath: Observable<string>;
  private urlSubject: ReplaySubject<string>;

  constructor(private router: Router,
              private location: Location,
              private platformLocation: PlatformLocation) {
    this.urlSubject = new ReplaySubject<string>(1);
    this.currentUrl = this.urlSubject.pipe( map(url => this.stripSlashes(url)) );
    this.currentPath = this.currentUrl.pipe( map(url => url.match(/[^?#]*/)[0]) );
    this.urlSubject.next(location.path(true));
    this.location.subscribe(state => this.urlSubject.next(state.url) );
  }

  // TODO?: ignore if url-without-hash-or-search matches current location?
  go(url: string) {
    if (!url) {
      return;
    }
    url = this.stripSlashes(url);
    if (/^http/.test(url)) {
      // Has http protocol so leave the site
      // (or do a "full page navigation" if a ServiceWorker update has been activated)
      this.goExternal(url);
    } else {
      this.location.go(url);
      this.urlSubject.next(url);
    }
  }

  goExternal(url: string) {
    window.location.assign(url);
  }

  replace(url: string) {
    window.location.replace(url);
  }

  private stripSlashes(url: string) {
    return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
  }

  tryNavigateToAnchor(anchor: HTMLAnchorElement): void {
    const extras: NavigationExtras = {};

    if (anchor.hash) {
      extras.fragment = anchor.hash.substr(1);
    }
    let href = anchor.getAttribute('href') || '.';
    href = href.split('#')[0];

    if (href[0] === '.') {
      const path = href.split('/').filter( s => !!s);
      const urlTree = this.router.parseUrl(this.location.path(true));
      const primary = urlTree.root.children.primary;
      urlTree.fragment = extras.fragment;
      for ( let p of path) {
        if (p === '..') {
          primary.segments.pop();
        } else if (p !== '.') {
          primary.segments.push(new UrlSegment(p, {}));
        }
      }
      this.router.navigateByUrl(urlTree, extras);
    } else {
      this.router.navigate(href.split('/').filter(s => !!s ), extras);
    }
  }
}

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface TopNavLink {
  title: string;
  imgIconSrc?: string;
  // tslint:disable-next-line:max-line-length
  routerLink: Partial<Pick<RouterLink, 'queryParams' | 'fragment' | 'queryParamsHandling' | 'preserveFragment' | 'skipLocationChange' | 'replaceUrl' | 'routerLink' | 'preserveQueryParams'>>;
  routerLinkActiveOptions?: {
    exact: boolean;
  };
  domain?: string;
}

@Injectable()
export class TopNavService {
  navItems$ = new BehaviorSubject<TopNavLink[]>([]);

  private currDomain: string;
  private domainStack: string[] = [];
  private domains: { [key: string]: TopNavLink[] } = {};
  private rootDomain: TopNavLink[] = this.navItems$.getValue();

  pushDomain(domain: string): void {
    if (this.currDomain) {
      this.domainStack.push(this.currDomain);
    }
    this.currDomain = domain;
    this.emit(domain);
  }

  popDomain(): string | undefined {
    this.currDomain = this.domainStack.pop();
    this.emit(this.currDomain);
    return this.currDomain;
  }

  addNavItem(nav: TopNavLink): void {
    if (nav.domain) {
      if (!this.domains[nav.domain]) {
        this.domains[nav.domain] = [];
      }
      this.domains[nav.domain].push(nav);
    } else {
      this.rootDomain.push(nav);
    }
    this.emit(nav.domain);
  }

  removeNavItem(nav: TopNavLink): boolean {
    const items: TopNavLink[] = nav.domain ? this.domains[nav.domain] : this.rootDomain;

    const idx = items ? items.indexOf(nav) : -1;
    if (idx > -1) {
      items.splice(idx, 1);
      this.emit(nav.domain);
      return true;
    }
    return false;
  }

  private emit(domain?: string): void {
    if (!domain && !this.currDomain) {
      this.navItems$.next(this.rootDomain.slice());
    } else if (domain === this.currDomain) {
      this.navItems$.next(this.domains[domain].slice());
    }
  }
}

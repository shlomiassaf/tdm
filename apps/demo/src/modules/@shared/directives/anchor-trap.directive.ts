import { Directive, HostListener, Input } from '@angular/core';
import { LocationService } from '../services/location.service';

const DEFAULT_OPTIONS = { cssTrap: 'tdm-anchor-trap', maxBubble: 3 };

@Directive({
  selector: '[tdmAnchorTrap]'
})
export class AnchorTrapDirective {
  @Input('ngdAnchorTrap') options?: { cssTrap?: string; maxBubble?: number };

  constructor(private location: LocationService) { }

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent): any {
    let anchor: HTMLAnchorElement = <any> $event.target;
    const cssTrap = (this.options && this.options.cssTrap) || DEFAULT_OPTIONS.cssTrap;
    const maxBubble = (this.options && this.options.maxBubble) || DEFAULT_OPTIONS.maxBubble;
    for (let i = 0; i < maxBubble && anchor; i++) {
      if (anchor.classList.contains(cssTrap)) {
        this.location.tryNavigateToAnchor(anchor);
        $event.stopPropagation();
        $event.preventDefault();
      }
      anchor = <any> anchor.parentElement;
    }
  }
}

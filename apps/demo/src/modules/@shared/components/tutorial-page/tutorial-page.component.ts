import { Subscription, Observable } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { TutoriableComponent, TutorialService } from '../../services/tutorial.service';
import { TocAreaDirective } from '../../toc';

@Component({
  selector: 'tutorial-page',
  styleUrls: [ './tutorial-page.component.scss' ],
  templateUrl: './tutorial-page.component.html'
})
export class TutorialPageComponent implements OnInit, AfterViewInit, OnDestroy {
  autoSize: boolean = false;
  tutorialsChanged: Observable<Array<TutoriableComponent<any>>>;
  @ViewChild('tutorialView', { read: ViewContainerRef }) tutVcRef: ViewContainerRef;
  @ViewChild('tocArea') tocArea: TocAreaDirective;

  private _subs: Subscription;

  constructor(@Inject(DOCUMENT) private document: Document,
              private tutorialService: TutorialService,
              private resolver: ComponentFactoryResolver,
              private route: ActivatedRoute,
              private router: Router) {
    this.tutorialsChanged = tutorialService.tutorialsChanged
      .pipe(
        debounceTime(100),
        tap(() => {
          this.autoSize = true;
          setTimeout(() => this.autoSize = false, 1);
        })
      );
  }

  ngOnInit(): void {
    this._subs = this.route.paramMap.subscribe(params => {
      const id = params.get('name');
      const tutorial = this.tutorialService.get(id);
      if ( !tutorial ) {
        this.router.navigate([ '/page-404' ]);
      } else {
        this.renderTutorial(tutorial);
      }
    });
  }

  ngAfterViewInit(): void {
    // On init, the sidenav content element doesn't yet exist, so it's not possible
    // to subscribe to its scroll event until next tick (when it does exist).
    Promise.resolve().then(() => {
      this.tocArea.scrollContainer = this.document.querySelector('.mat-drawer-content');
    });
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  private renderTutorial(tutorial: TutoriableComponent<any>): void {
    this.tutVcRef.clear();
    const componentFactory = this.resolver.resolveComponentFactory(tutorial);
    const cmpRef = this.tutVcRef.createComponent<any>(
      componentFactory,
      this.tutVcRef.length
    );
    this.tocArea.reinitQueryLinks(Promise.resolve(cmpRef.instance.code));
  }
}

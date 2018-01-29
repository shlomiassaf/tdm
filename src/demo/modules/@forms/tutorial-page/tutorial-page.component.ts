import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { debounceTime, tap } from 'rxjs/operators';
import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TutoriableComponent, TutorialService } from '@shared';

@Component({
  selector: 'tutorial-page',
  styleUrls: [ './tutorial-page.component.scss' ],
  templateUrl: './tutorial-page.component.html'
})
export class TutorialPageComponent implements OnInit, OnDestroy {
  autoSize: boolean = false;
  tutorialsChanged: Observable<Array<TutoriableComponent<any>>>;
  @ViewChild('tutorialView', { read: ViewContainerRef }) tutVcRef: ViewContainerRef;

  private _subs: Subscription;

  constructor (private tutorialService: TutorialService,
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
    this._subs = this.route.paramMap.subscribe( params => {
      const id = params.get('name');
      const tutorial = this.tutorialService.get(id);
      if (!tutorial) {
        this.router.navigate(['/page-404']);
      } else {
        this.renderTutorial(tutorial);
      }
    });
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  private renderTutorial(tutorial: TutoriableComponent<any>): void {
    this.tutVcRef.clear();
    const componentFactory = this.resolver.resolveComponentFactory(tutorial);
    this.tutVcRef.createComponent<any>(
      componentFactory,
      this.tutVcRef.length
    );
  }
}

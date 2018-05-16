import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { debounceTime, tap } from 'rxjs/operators';
import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TutoriableComponent, TutorialService } from '@shared';

@Component({
  selector: 'example-page',
  styleUrls: [ './example-page.component.scss' ],
  templateUrl: './example-page.component.html'
})
export class ExamplePageComponent implements OnInit, OnDestroy {
  is404: boolean;
  autoSize: boolean = false;
  examplesChanged: Observable<Array<TutoriableComponent<any>>>;
  @ViewChild('exampleView', { read: ViewContainerRef }) tutVcRef: ViewContainerRef;

  private _subs: Subscription;

  constructor (private exampleService: TutorialService,
               private resolver: ComponentFactoryResolver,
               private route: ActivatedRoute,
               private router: Router) {
    this.examplesChanged = exampleService.tutorialsChanged
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
      this.is404 = false;
      const id = params.get('name');
      const example = this.exampleService.get(id);
      if (!example) {
        this.is404 = true;
      } else {
        this.renderExample(example);
      }
    });
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  private renderExample(example: TutoriableComponent<any>): void {
    this.tutVcRef.clear();
    const componentFactory = this.resolver.resolveComponentFactory(example);
    this.tutVcRef.createComponent<any>(
      componentFactory,
      this.tutVcRef.length
    );
  }
}

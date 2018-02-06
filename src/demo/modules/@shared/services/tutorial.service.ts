import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export interface Tutorial {
  id: string;
  name: string;
  subHeader?: string;
}

export interface TutoriableComponent<T> extends Function {
  new (...args: any[]): T;
  tutorial: Tutorial;
}

@Injectable()
export class TutorialService {
  tutorialsChanged: Observable<Array<TutoriableComponent<any>>>;
  private tuts = new Map<string, TutoriableComponent<any>>();
  private tuts$ = new BehaviorSubject<Array<TutoriableComponent<any>>>([]);

  constructor() {
    this.tutorialsChanged = this.tuts$.pipe(shareReplay());
  }

  addTutorial<T>(tutorial: TutoriableComponent<T>): void {
    this.tuts.set(tutorial.tutorial.id, tutorial);
    this.tuts$.next(Array.from(this.tuts.values()));
  }

  get(id: string): TutoriableComponent<any> | undefined {
    return this.tuts.get(id);
  }
}

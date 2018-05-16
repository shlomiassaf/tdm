import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { combineLatest as CombineLatest } from 'rxjs/observable/combineLatest';
import { map, tap, combineLatest } from 'rxjs/operators';

import { SelectionModel, CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { MatTableSortData } from './types';
import { createFilter, filter, DataSourceFilter, DataSourceFilterToken } from './filtering';
import { sortData } from './sorting';
import { Paginator, PaginatorChangeEvent } from './pagination';

const emptySort: MatTableSortData = {column: null, order: 'asc'};

export class DataSourceContainer<T = any> extends DataSource<T> {

  /**
   * If true, pagination is used.
   *
   * @see DataSourceDirective#pagination
   *
   * @default false
   * @type {boolean}
   */
  usePagination: boolean = false;

  /**
   * The buffer for virtual lists.
   *
   * @default 10
   */
  buffer: number = 10;

  /**
   * Notification stream for source changes.
   */
  readonly onSourceChanged: Observable<void>;

  /**
   * Notification stream for data changes.
   * Data change is different from source change.
   * A Source change will trigger a data change but a data change might also trigger from different
   * actions, e.g. filtering
   */
  readonly onDataChanged: Observable<void>;

  /**
   * When set to True will not disconnect upon table disconnection, otherwise unsubscribe from the
   * datatsource when the table disconnects.
   */
  readonly keepAlive: boolean;

  get sort(): MatTableSortData {
    return this._sort$.value;
  }
  set sort(sort: MatTableSortData) {
    this._sort$.next(sort);
  }

  get filteredData(): T[] {
    return this._filteredData;
  }

  get filter(): DataSourceFilter {
    return this._filter$.value;
  }

  get length(): number {
    return this._rawData$.value.length;
  }

  get source(): T[] {
    return this._rawData$.value;
  }

  get pagination(): Paginator {
    return this._pagination;
  }

  /**
   * Represents selected items on the data source.
   * @returns {SelectionModel<T>}
   */
  get selection(): SelectionModel<T> {
    return this._selection;
  }

  protected _pagination = new Paginator();
  protected _selection = new SelectionModel<T>(true, []);
  protected _renderedData: T[] = [];
  protected _rawData$ = new BehaviorSubject<T[]>([]);
  protected _filteredData$: Observable<T[]>;
  protected _filter$ = new BehaviorSubject<DataSourceFilter>(undefined);
  protected _sort$ = new BehaviorSubject<MatTableSortData>({column: null, order: 'asc'});

  protected gc: Subscription;

  private _sourceChanged$: Subject<void> = new Subject<void>();
  private _filteredData: T[];

  constructor(initialData: T[] | Observable<T[]> | boolean, keepAlive: boolean)
  constructor(initialData: T[] | Observable<T[]>)
  constructor(keepAlive: boolean)
  constructor()
  /**
   *
   * @param initialData
   * @param keepAlive When set to True will not disconnect upon table disconnection, otherwise does.
   */
  constructor(initialData?: T[] | Observable<T[]> | boolean, keepAlive?: boolean) {
    super();

    if (typeof initialData === 'boolean') {
      keepAlive = initialData;
    } else if (initialData) {
      this.updateSource(initialData);
    }
    this.keepAlive = keepAlive;

    this.onSourceChanged = this._sourceChanged$.asObservable();

    this._filteredData$ = CombineLatest([this._rawData$, this._filter$])
      .pipe(
        map( () => filter(this._rawData$.value, this.filter) ),
        tap( filteredData => {
          if (this.usePagination) {
            this.pagination.total = filteredData.length;
            this.pagination.page = filteredData.length > 0 ? 1 : 0;
          }
        }),
        combineLatest(this._sort$, (filteredData, sort) => {
          if (!sort || sort.order === '') {
            return this._filteredData = filteredData;
          }

          const sortFn = typeof sort.sortFn === 'function'
            ? sort.sortFn
            : sortData
          ;
          return this._filteredData =  sortFn(sort, filteredData);
        })
      );
    this.onDataChanged = this._filteredData$.pipe(map( f => { return undefined; } ));
  }

  // workaround to refresh the page since row header and row can't communicate
  refresh(): void {
    this._rawData$.next(this._rawData$.value);
  }

  setFilter(value: DataSourceFilterToken, ...properties: string[]): void {
    this._filter$.next(createFilter(value, properties));
  }

  /**
   * Updates the source.
   * If a an array is supplied, it is a one time value set as the source.
   * If an array is supplied while an observable is already set, the array value will be set but and subsequent streams
   * will override the values.
   * To disconnect an observable source invoke the dispose() method
   * @param data
   * @param aggregateMode {boolean} [false] when true, the data is added to the previous data-set (async pagination)
   */
  updateSource(data: T[] | Observable<T[]>, aggregateMode: boolean = false): void {

    if (!Array.isArray(data) && typeof (data as Observable<any>).subscribe !== 'function') {
      data = [];
    }

    this.dispose(true);

    if (Array.isArray(data)) {
      this.updateRawData(data, aggregateMode);
    } else {
      this.gc = data.subscribe( d =>  this.updateRawData(d, aggregateMode) );
    }
  }

  dispose(local?: boolean): void {
    if (this.gc) {
      this.gc.unsubscribe();
      this.gc = undefined;
    }
    if (!local) {
      this._sourceChanged$.unsubscribe();
    }
  }

  disconnect(cv: CollectionViewer): void {
    if (this.keepAlive === false) {
      this.dispose();
    }
  }

  connect(cv: CollectionViewer): Observable<T[]> {
    return CombineLatest(cv.viewChange, this._filteredData$, this._pagination.onChange)
      .pipe(
        map((result: [{start: number, end: number}, T[], PaginatorChangeEvent]) => {
          let [view, displayData, pageChange] = result;

          if (this.usePagination && this._pagination.total !== displayData.length) {
            this._pagination.total = displayData.length;
            return this._renderedData;
          }

          // Set the rendered rows length to the virtual page size. Fill in the data provided
          // from the index start until the end index or pagination size, whichever is smaller.
          if (this.usePagination) {
            const range = this.pagination.range;
            displayData = displayData.slice(range[0], range[1]);
          }

          this._renderedData.length = displayData.length;

          const rangeStart = Math.max(0, view.start - this.buffer);
          const rangeEnd = Math.min(displayData.length, view.end + this.buffer);

          for (let i = rangeStart; i < rangeEnd; i++) {
            this._renderedData[i] = displayData[i];
          }

          return this._renderedData; // Currently ignoring the view
        })
      );
  }

  protected updateRawData(data: T[], aggregateMode: boolean): void {
    this.selection.clear();
    this.sort = emptySort;

    const coll: T[] = aggregateMode === true &&  Array.isArray(this._rawData$.value)
      ? [ ...this._rawData$.value, ...data ] // TODO: check performance
      : data.slice()
    ;

    this._rawData$.next(coll);
    this._sourceChanged$.next();
  }
}

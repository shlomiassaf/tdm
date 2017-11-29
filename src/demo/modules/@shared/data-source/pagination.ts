import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface PaginatorChangeEvent {
  page?: [number, number];
  perPage?: [number, number];
  total?: [number, number];
}

export class Paginator {

  get perPage(): number { return this._perPage; }
  set perPage(value: number) {
    if (value < 1) {
      throw new Error(`Invalid total size value ${value}`);
    }

    if (this._perPage !== value) {
      const changes: PaginatorChangeEvent = { perPage: [this._perPage, this._perPage = value] };

      const prev = this._page;
      this.calcPages();
      if (prev !== this._page) {
        changes.page = [prev, this._page];
      }

      this.onChange$.next(changes);
    }

  }

  /**
   * Get / Set the current page
   * @returns {number}
   */
  get page(): number { return this._page; }
  set page(value: number) {
    if (value < 0 || value > this._totalPages) {
      throw new Error(`Invalid page index ${value}`);
    }

    if (this._page !== value) {
      this.setPage(value, true);
    }
  }

  get total(): number { return this._total; }
  set total(value: number) {
    if (value < 0) {
      throw new Error(`Invalid total size value ${value}`);
    }

    if (this._total !== value) {
      const changes: PaginatorChangeEvent = { total: [this._total, this._total = value] };

      const prev = this._page;
      this.calcPages();
      if (prev !== this._page) {
        changes.page = [prev, this._page];
      }

      this.onChange$.next(changes);
    }
  }

  /**
   * The amount of pages in this paginator
   * @returns {number}
   */
  get totalPages(): number {
    return this._totalPages;
  }

  get range(): [number, number] {
    const start = (this.page - 1) * this.perPage;
    return [start, Math.min(this._total, start + this.perPage)];
  }

  readonly onChange: Observable<PaginatorChangeEvent>;
  protected onChange$: BehaviorSubject<PaginatorChangeEvent>;

  private _total: number = 0;
  private _perPage: number = 10;
  private _page: number = 1;
  private _totalPages: number = 0;

  constructor() {
    this.onChange$ = new BehaviorSubject<PaginatorChangeEvent>({page: [null, 1]});
    this.onChange = this.onChange$.asObservable();
  }

  canMove(value: number): boolean {
    const p = this._page + value;
    return p >= 1 && p <= this.totalPages;
  }
  hasNext(): boolean { return this.canMove(1); }
  hasPrev(): boolean { return this.canMove(-1); }

  move(value: number): void { this.page = this._page + value; }
  nextPage(): void { this.move(1); }
  prevPage(): void { this.move(-1); }


  reset(): void {
    this.page = 1;
  }

  protected setPage(value: number, emitOnChange: boolean): void {
    const prev = this._page;
    this._page = value;
    if (emitOnChange) {
      this.onChange$.next({page: [prev, value]});
    }
  }

  /**
   * Calculate the number of pages.
   * returns true if the current page has changed due to calculation. (current page > new pages value)
   * @returns {boolean}
   */
  protected calcPages(): void {
    this._totalPages = Math.ceil(this._total / this.perPage);
    if (this._totalPages > 0 && this._page > this._totalPages) {
      this.setPage(this._totalPages, false);
    }
  }
}

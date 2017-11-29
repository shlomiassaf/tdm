import { Directive, Input } from '@angular/core';

import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { DataSourceContainer } from './data-source-container';

@Directive({
  selector: 'cdk-table[dataSource], mat-table[dataSource]',
  exportAs: 'dataSource'
})
export class DataSourceDirective<T> {


  get dataSource(): DataSourceContainer<T> { return this._dataSource; }
  @Input() set dataSource(value: DataSourceContainer<T>) {
    this._dataSource = value;
    this.sync();
  }

  get buffer(): number { return this.ghost.buffer; }
  @Input() set buffer(value: number) {
    this.ghost.buffer = coerceNumberProperty(value);
    this.sync();
  }

  /**
   * Proxy to the usePagination property in DataSourceContainer.
   * @returns {boolean}
   */
  get pagination(): boolean { return this.ghost.usePagination; }
  @Input() set pagination(value: boolean) {
    this.ghost.usePagination = coerceBooleanProperty(value);
    this.sync();
  }


  /**
   * Just an alias for DataSourceDirective#tableDataSource
   * @returns {DataSourceContainer<T>}
   */
  get ds(): DataSourceContainer<T> {
    return this._dataSource;
  }

  private _dataSource: DataSourceContainer<T>;
  /** A ghost object to hold properties synced with _dataSource  */
  private ghost: Partial<DataSourceContainer<T>> = {};

  private sync(): void {
    if (this._dataSource) {
      if (typeof this.ghost.buffer === 'number') {
        this._dataSource.buffer = this.ghost.buffer;
      }

      if (typeof this.ghost.usePagination === 'boolean') {
        this._dataSource.usePagination = this.ghost.usePagination;
      }
    }
  }

}

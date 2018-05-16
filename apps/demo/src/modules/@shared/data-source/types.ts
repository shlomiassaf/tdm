import { SortDirection } from '@angular/material/sort';

/**
 * Event fired when sort changes.
 */
export interface MatTableSortData {
  column: string;
  order: SortDirection;
  sortFn?: SortHandler;
}

export interface SortHandler<T = any> {
  (sort: MatTableSortData, data: T[]): T[];
}

import { MatTableSortData } from './types';

export function sortData<T>(sort: MatTableSortData, data: T[]): T[] {
  let prop = sort.column;
  if (!prop) return data;

  return data.slice().sort((a, b) => {

    let valueA = isNaN(+a[prop]) ? a[prop] : +a[prop];
    let valueB = isNaN(+b[prop]) ? b[prop] : +b[prop];

    return (valueA < valueB ? -1 : 1) * (sort.order === 'asc' ? 1 : -1);
  });
}


export type DataSourcePredicate = (item: any, properties?: string[]) => boolean;
export type DataSourceFilterToken = undefined | DataSourcePredicate | any;

export interface DataSourceFilterType {
  type: 'value' | 'predicate';
  properties?: string[]
  filter: any | DataSourcePredicate;
}


export type DataSourceFilter = undefined | DataSourceFilterType ;

export function createFilter(value: DataSourceFilterToken, properties: string[]): DataSourceFilter {
  return value === undefined
    ? undefined
    : {
      properties: properties.length > 0 ? properties : undefined,
      type: typeof value === 'function' ? 'predicate' : 'value',
      filter: value
    };
}

export function filter<T>(rawData: T[], filter: DataSourceFilter): T[] {
  if (!filter || !rawData || rawData.length === 0) {
    return rawData;
  } else {
    const props = filter.properties
      ? filter.properties
      : Object.keys(rawData[0]) // assuming all objects are identical
    ;

    if (filter.type === 'predicate') {
      const value: DataSourcePredicate = <any>filter.filter;
      return rawData.filter( v => value(v, props) );
    } else if ( filter.type === 'value' ) {
      const value = filter.filter;
      return rawData.filter( v => props.some( f => v[f] === value) );
    }

  }
  return rawData;
}

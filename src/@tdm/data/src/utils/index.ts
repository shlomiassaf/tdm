import { isString, isNumber } from '@tdm/core/tdm';
export * from './type-utils';
export * from './plain-serializer';

/**
 * Search search each object in "objects", right to left, for a key and returns the value.
 * Fallback object must have the key.
 * @param key
 * @param fallback
 * @param objects
 * @returns {any}
 */
export function findProp<T, P extends keyof T>(key: P, fallback: T, ...objects: any[]): T[P] {
  for (let i = objects.length - 1; i>=0; i--) {
    if (objects[i] && objects[i].hasOwnProperty(key)) {
      return objects[i][key];
    }
  }
  return fallback[key];
}


export function isSymbol(obj: any): obj is symbol {
  return typeof obj === 'symbol';
}

export function isPropertyKey(obj: any): obj is PropertyKey {
  return isString(obj) || isSymbol(obj) || isNumber(obj);
}


export function noop(...args: any[]): void { };

/**
 * returns an object with a promise, resolver and rejector.
 * @returns {{resolve: ((result:T)=>void), reject: ((error:any)=>void), promise: Promise<T>}}
 */
export function promiser<T>(): { resolve: (result?: T) => void, reject: (error: any) => void, promise: Promise<T> }  {
  let resolve: (result?: T) => void;
  let reject: (error: any) => void;
  let promise: Promise<T> = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject, promise };
}

export const array = function() {
  const scalar = v => !Array.isArray(v);

  const flatten = (deep: any[][], flat: any[] = []) => {
    if (deep.length === 0) return flat;
    let [head, ...tail] = deep;
    if (scalar(head)) {
      return flatten(tail, flat.concat(head));
    } else {
      return flatten(tail, flat.concat(flatten(head)));
    }
  };

  const findRemove = <T>(arr: Array<T>, predicate: (value: T) => boolean, thisArg?: any): T | undefined => {
    const idx = arr.findIndex(predicate, thisArg);
    if (idx > -1) {
      return arr.splice(idx, 1)[0];
    }
  };

  return {
    findRemove,
    flatten<T>(array: Array<Array<T>>): Array<T> {
      return flatten(array);
    }
  }
}();

import { Constructor } from './type-utils';
export * from './type-utils';
export * from './SetMapExt';
export * from './plain-serializer';

export function isStaticDecorator(target: any): boolean {
  return isFunction(target);
}

/**
 * Return the class from a decorator target.
 * If the target is the prototype: returns the type of the prototype.
 * If the target is the type: returns the type.
 */
export function ensureTargetIsType(type: any): any {
  return isFunction(type) ? type : type.constructor;
}

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


export function isNumber(obj: any): obj is number {
  return typeof obj === 'number';
}

export function isString(obj: any): obj is string {
  return typeof obj === 'string';
}

export function isSymbol(obj: any): obj is symbol {
  return typeof obj === 'symbol';
}

export function isPropertyKey(obj: any): obj is PropertyKey {
  return isString(obj) || isSymbol(obj) || isNumber(obj);
}

const undef = undefined;
export function isUndefined(obj: any): obj is undefined {
  return obj === undef;
}

export function isFunction(obj: any): obj is Function {
  return typeof obj === 'function';
}

export function isJsObject(obj: any): boolean {
  return obj !== null && (typeof obj === 'function' || typeof obj === 'object');
}
export function isPrimitive(obj: any): boolean {
  return !isJsObject(obj);
}

/**
 * See https://github.com/angular/angular/blob/2.0.0-rc.4/modules/%40angular/facade/src/lang.ts#L149
 * @param token
 * @returns {any}
 */
export function stringify(token: any): string {
  if (typeof token === 'string') {
    return token;
  }

  if (token === undefined || token === null) {
    return '' + token;
  }

  if (token.name) {
    return token.name;
  }
  if (token.overriddenName) {
    return token.overriddenName;
  }

  var res = token.toString();
  var newLineIndex = res.indexOf('\n');
  return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
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

/**
 * Returns the chain of prototypes up to Object (not included)
 * @param cls
 * @returns {Array}
 */
export function getProtoChain(cls: Constructor<any>): Constructor<any>[] {
  const classes = [];
  while (cls && cls !== Object) {
    classes.push(cls);

    const proto = Object.getPrototypeOf(cls.prototype);
    cls = isFunction(proto) || !proto ? proto : proto.constructor;
  }
  return classes;
}

export const reflection = {
  designType(target: any, key: string | symbol): any {
    return (Reflect as any).getMetadata("design:type", target, key);
  }
};

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


export type Constructor<T> = new(...args: any[]) => T;

export function isNumber(obj: any): obj is number {
  return typeof obj === 'number';
}

export function isString(obj: any): obj is string {
  return typeof obj === 'string';
}

export function isFunction(obj: any): obj is Function {
  return typeof obj === 'function';
}

export function isStaticDecorator(target: any): boolean {
  return isFunction(target);
}

export function ensureTargetIsType(type: any): any {
  return isFunction(type) ? type : type.constructor;
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

  const res = token.toString();
  const newLineIndex = res.indexOf('\n');
  return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
}

export const reflection = {
  designType(target: any, key: string | symbol): any {
    return (Reflect as any).getMetadata("design:type", target, key);
  }
};

export function LazyInit(getter: Function): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol, descriptor?: PropertyDescriptor) => {
    if (descriptor) {
      throw new Error('LazyInit can only decorate properties')
    }
    Object.defineProperty(target, propertyKey, { get: function() {
      const ret = getter.call(this);

      Object.defineProperty(this, propertyKey, { value: ret });
      return ret;
    }});
  };
}


export const array = function() {
  const findRemove = <T>(arr: Array<T>, predicate: (value: T) => boolean, thisArg?: any): T | undefined => {
    const idx = arr.findIndex(predicate, thisArg);
    if (idx > -1) {
      return arr.splice(idx, 1)[0];
    }
  };

  return {
    findRemove
  }
}();

// TODO: move to separate package along with other utils on @tdm/core
export class DualKeyMap<K, K1, V> {
  protected map = new Map<K, Map<K1, V>>();

  readonly [Symbol.toStringTag]: 'Map' = 'Map';

  has(type: K): boolean;
  has(type: K, id: K1): boolean;
  has(type: K, id?: K1): boolean {
    if (id === undefined) {
      return this.map.has(type);
    } else {
      const t = this.map.get(type);
      return t ? t.has(id) : false;
    }
  }

  get(type: K): Map<K1, V> | undefined;
  get(type: K, id: K1): V | undefined;
  get(type: K, id?: K1):  Map<K1, V> | V | undefined {
    const t = this.map.get(type);
    return id === undefined
      ? t
      : t && t.get(id)
    ;
  }

  delete(type: K): boolean;
  delete(type: K, id: K1): boolean;
  delete(type: K, id?: K1): boolean {
    if (id === undefined) {
      return this.map.delete(type);
    } else {
      const t = this.map.get(type);
      return !(t && t.delete(id));
    }
  }

  set(type: K, id: K1, value: V): void {
    const t = this.map.get(type) || new Map<K1, V>();
    t.set(id, value);
    this.map.set(type, t);
  }

  clear(): void;
  clear(type: K): void;
  clear(type?: K): void {
    if (type === undefined) {
      this.map.clear();
    } {
      const t = this.map.get(type);
      t && t.clear();
    }
  }

  /**
   * Perform for each on the top-level map.
   * NOTE: The first parameter must be the boolean true.
   * @param callbackfn
   * @param thisArg
   */
  forEach(root: true, callbackfn: (value: Map<K1, V>, index: K, map: Map<K1, Map<K1, V>>) => void, thisArg?: any): void;
  /**
   * Perform for each on the 2nd level map
   * if not, it will
   * @param callbackfn
   * @param thisArg
   */
  forEach(callbackfn: (value: V, index: K1, map: Map<K1, V>) => void, type: K, thisArg?: any): void;
  forEach(callbackfn: true | ( (value: V, index: K1, map: Map<K1, V>) => void ),
          type: K | ((value: Map<K1, V>, index: K, map: Map<K1, Map<K1, V>>) => void),
          thisArg?: any): void {

    if (callbackfn === true) {
      this.map.forEach(type as any, thisArg);
    } else {
      const t = this.map.get(type as any);
      t && t.forEach(callbackfn as any, thisArg);
    }
  }

  entries(): IterableIterator<[K, Map<K1, V>]>;
  entries(type: K): IterableIterator<[K1, V]>;
  entries(type?: K): IterableIterator<[K, Map<K1, V>]> | IterableIterator<[K1, V]> {
    if (type === undefined) {
      return this.map.entries();
    } else {
      const t = this.map.get(type as any);
      return t
        ? t.entries()
        : this.makeEmptyIterator()
      ;
    }
  }

  keys(): IterableIterator<K>;
  keys(type: K): IterableIterator<K1>;
  keys(type?: K): IterableIterator<K> | IterableIterator<K1> {
    if (type === undefined) {
      return this.map.keys();
    } else {
      const t = this.map.get(type as any);
      return t
        ? t.keys()
        : this.makeEmptyIterator()
        ;
    }
  }

  values(): IterableIterator<Map<K1, V>>;
  values(type: K): IterableIterator<V>;
  values(type?: K): IterableIterator<Map<K1, V>> | IterableIterator<V> {
    if (type === undefined) {
      return this.map.values();
    } else {
      const t = this.map.get(type as any);
      return t
        ? t.values()
        : this.makeEmptyIterator()
        ;
    }
  }

  get size(): number {
    return this.map.size;
  }

  sizeOf(type: K): number {
    const t = this.map.get(type);
    return t ? t.size : 0;
  }

  private makeEmptyIterator(): IterableIterator<any> {
    return emptyIterator;
  }

  [Symbol.iterator](): IterableIterator<[K, Map<K1, V>]> {
    return this.map[Symbol.iterator]();
  }
}

const emptyIterator = {
  next() {
    return {value: null, done: true};
  },
  [Symbol.iterator]() { return emptyIterator }
};

const emptyIterator = {
  next() {
    return { value: null, done: true };
  },
  [Symbol.iterator]() {
    return emptyIterator;
  }
};

// TODO: move to separate package along with other utils on @tdm/core

/**
 * A dual map, key->key->value
 */
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
  get(type: K, id?: K1): Map<K1, V> | V | undefined {
    const t = this.map.get(type);
    return id === undefined ? t : t && t.get(id);
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

  set(type: K, map: Map<K1, V>): void;
  set(type: K, id: K1, value: V): void;
  set(type: K, idOrMap: K1 | Map<K1, V>, value?: V): void {
    if (idOrMap instanceof Map) {
      if (arguments.length === 2) {
        this.map.set(type, idOrMap);
      }
    } else {
      const t = this.map.get(type) || new Map<K1, V>();
      t.set(idOrMap, value);
      this.map.set(type, t);
    }
  }

  clear(): void;
  clear(type: K): void;
  clear(type?: K): void {
    if (type === undefined) {
      this.map.clear();
    }
    {
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
  forEach(
    root: true,
    callbackfn: (value: Map<K1, V>, index: K, map: Map<K1, Map<K1, V>>) => void,
    thisArg?: any
  ): void;
  /**
   * Perform for each on the 2nd level map
   * if not, it will
   * @param callbackfn
   * @param thisArg
   */
  forEach(
    callbackfn: (value: V, index: K1, map: Map<K1, V>) => void,
    type: K,
    thisArg?: any
  ): void;
  forEach(
    callbackfn: true | ((value: V, index: K1, map: Map<K1, V>) => void),
    type: K | ((value: Map<K1, V>, index: K, map: Map<K1, Map<K1, V>>) => void),
    thisArg?: any
  ): void {
    if (callbackfn === true) {
      this.map.forEach(type as any, thisArg);
    } else {
      const t = this.map.get(type as any);
      t && t.forEach(callbackfn as any, thisArg);
    }
  }

  entries(): IterableIterator<[K, Map<K1, V>]>;
  entries(type: K): IterableIterator<[K1, V]>;
  entries(
    type?: K
  ): IterableIterator<[K, Map<K1, V>]> | IterableIterator<[K1, V]> {
    if (type === undefined) {
      return this.map.entries();
    } else {
      const t = this.map.get(type as any);
      return t ? t.entries() : this.makeEmptyIterator();
    }
  }

  keys(): IterableIterator<K>;
  keys(type: K): IterableIterator<K1>;
  keys(type?: K): IterableIterator<K> | IterableIterator<K1> {
    if (type === undefined) {
      return this.map.keys();
    } else {
      const t = this.map.get(type as any);
      return t ? t.keys() : this.makeEmptyIterator();
    }
  }

  values(): IterableIterator<Map<K1, V>>;
  values(type: K): IterableIterator<V>;
  values(type?: K): IterableIterator<Map<K1, V>> | IterableIterator<V> {
    if (type === undefined) {
      return this.map.values();
    } else {
      const t = this.map.get(type as any);
      return t ? t.values() : this.makeEmptyIterator();
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

/**
 * The child of Map and Set
 */
export class KeySet<K, V> {
  map = new Map<K, Set<V>>();

  has(key: K, value: V): boolean;
  has(key: K): boolean;
  has(key: K, value?: V): boolean {
    if (arguments.length === 1) {
      return this.map.has(key);
    } else {
      const t = this.map.get(key);
      return t ? t.has(value) : false;
    }
  }

  get(key: K, index: number): V | undefined;
  get(key: K): Set<V> | undefined;
  get(key: K, index?: number): Set<V> | V | undefined {
    if (arguments.length === 1) {
      return this.map.get(key);
    } else {
      const set = this.map.get(key);
      if (set) {
        return SetExt.index(set, index);
      }
    }
  }

  /**
   * Set's the Set for a key.
   * @param key
   * @param set An optional set, if not supplied a new Set is created.
   */
  set(key: K, set?: Set<V>): Set<V> {
    if (!set) {
      set = new Set<V>();
    }
    this.map.set(key, set);
    return set;
  }

  add(key: K, value: V): this {
    const t = this.map.get(key) || new Set<V>();
    t.add(value);
    this.map.set(key, t);
    return this;
  }

  clear(key?: K): void {
    if (!key) {
      this.map.clear();
    } else {
      const t = this.map.get(key);
      t && t.clear();
    }
  }

  delete(key: K, value?: V): boolean {
    if (arguments.length === 1) {
      return this.delete(key);
    } else {
      const t = this.map.get(key);
      return t ? t.delete(value) : false;
    }
  }

  forEach(
    key: K,
    callbackfn: (value: V, index: V, set: Set<V>) => void,
    thisArg?: any
  ): void {
    const t = this.map.get(key);
    if (t) {
      t.forEach(callbackfn, thisArg);
    }
  }

  /**
   * Returns the amount of map entries
   */
  get size(): number {
    return this.map.size;
  }

  sizeOf(key: K): number {
    const t = this.map.get(key);
    return t ? t.size : 0;
  }
}

export class SetExt<T> extends Set<T> {
  first(): T | undefined {
    return SetExt.first(this);
  }

  index(index: number): T | undefined {
    return SetExt.index(this, index);
  }

  asArray(): Array<T> {
    return SetExt.asArray(this);
  }

  isSuperset(subset: Set<any>): boolean {
    return SetExt.isSuperset(this, subset);
  }

  /**
   * Combine all of the sources
   * @param source
   * returns the target
   */
  combine(...source: Array<Set<T>>): void;
  combine(...source: Array<Array<T>>): void;
  combine(...source: Array<any>): void {
    SetExt.combine(this, ...source);
  }

  /**
   * Deduct all of the sources
   * @param source
   * returns the target
   */
  deduct(...source: Array<Set<T>>): void {
    SetExt.deduct(this, ...source);
  }

  union(...source: Array<Set<T>>): SetExt<T> {
    return SetExt.union(SetExt as any, this as any, ...source);
  }

  /**
   * Returns all the items that were in this set and the supplied set.
   * @param setA
   * @param setB
   * @param initSetExt
   */
  intersection(set: Set<T>): SetExt<T> {
    return SetExt.intersection(this, set as any, true);
  }

  /**
   * Returns all the items that are in this set, but not in the target set.
   * Returns a new SetExt instance.
   * @param set
   * @returns
   */
  difference(set: Set<T>): SetExt<T> {
    return SetExt.difference(this, set as any, true);
  }

  /**
   * Returns all the items that were not in this set and the supplied set.
   * Returns a new SetExt instance.
   * @param set
   * @returns
   */
  negative(set: Set<T>): SetExt<T> {
    return SetExt.negative(this, set as any, true);
  }

  static first<T>(set: Set<T>): T | undefined {
    return set.values().next().value;
  }

  static index<T>(set: Set<T>, index: number): T | undefined {
    const iterator = set.values();

    for (let i = 0; i < index; i++) {
      if (iterator.next().done) {
        return undefined;
      }
    }

    return iterator.next().value;
  }

  static asArray<T>(set: Set<T>): Array<T> {
    return Array.from(set);
  }

  static isSuperset(set: Set<any>, subset: Set<any>): boolean {
    return !SetExt.asArray(subset).some(v => !set.has(v));
  }

  /**
   * Combine all of the sources into the target.
   * @param target
   * @param source
   * returns the target
   */
  static combine<T>(target: Set<T>, ...source: Array<Set<T>>): Set<T>;
  static combine<T>(target: Set<T>, ...source: Array<Array<T>>): Set<T>;
  static combine<T>(target: Set<T>, ...source: Array<any>): Set<T> {
    for (let i = 0, len = source.length; i < len; i++) {
      const arr = Array.isArray(source[i])
        ? source[i]
        : SetExt.asArray(source[i]);
      for (let z = 0, lenZ = arr.length; z < lenZ; z++) {
        if (!target.has(arr[z])) {
          target.add(arr[z]);
        }
      }
    }
    return target;
  }

  /**
   * Deduct all of the sources from the target.
   * @param target
   * @param source
   * returns the target
   */
  static deduct<T>(target: Set<T>, ...source: Set<T>[]): Set<T> {
    for (let i = 0, len = source.length; i < len; i++) {
      const arr = SetExt.asArray(source[i]);
      for (let z = 0, lenZ = arr.length; z < lenZ; z++) {
        target.delete(arr[z]);
      }
    }
    return target;
  }

  static union<T extends Set<any>>(...source: T[]): T {
    const union: any =
      typeof source[0] === 'function'
        ? new (source.shift() as any)()
        : new Set<any>();
    SetExt.combine(union, ...source);
    return union;
  }

  /**
   * Returns all the items that were in both sets.
   * @param setA
   * @param setB
   * @param initSetExt
   */
  static intersection<T extends Set<any>>(
    setA: T,
    setB: T,
    initSetExt?: boolean
  ): T {
    const intersection = initSetExt ? new SetExt<any>() : new Set<any>();

    const arr = SetExt.asArray(setB);
    for (let z = 0, lenZ = arr.length; z < lenZ; z++) {
      if (setA.has(arr[z])) {
        intersection.add(arr[z]);
      }
    }
    return intersection as any;
  }

  /**
   * Returns all the items that are in source set, but not in the target set.
   * @param source
   * @param target
   * @param initSetExt
   * @returns
   */
  static difference<T extends Set<any>>(
    source: T,
    target: T,
    initSetExt?: boolean
  ): T {
    const difference = initSetExt
      ? new SetExt<any>(source)
      : new Set<any>(source);

    const arr = SetExt.asArray(target);
    for (let z = 0, lenZ = arr.length; z < lenZ; z++) {
      difference.delete(arr[z]);
    }
    return difference as any;
  }

  /**
   * Returns all the items that were not in both sets.
   * @param source
   * @param target
   * @param initSetExt
   * @returns
   */
  static negative<T extends Set<any>>(
    source: T,
    target: T,
    initSetExt?: boolean
  ): T {
    const negative = initSetExt
      ? new SetExt<any>(source)
      : new Set<any>(source);

    const arr = SetExt.asArray(target);
    for (let z = 0, lenZ = arr.length; z < lenZ; z++) {
      if (negative.has(arr[z])) {
        negative.delete(arr[z]);
      } else {
        negative.add(arr[z]);
      }
    }
    return negative as any;
  }
}

export class MapExt {
  /**
   * Merge source map into target map.
   * @param target
   * @param source
   * @param diffOnly if true will only merge keys from source that does not exist on target.
   */
  static mergeInto<K, V>(
    target: Map<K, V>,
    source: Map<K, V>,
    diffOnly?: boolean
  ): Map<K, V> {
    const arr = MapExt.asKeyArray(source);
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!diffOnly || !target.has(arr[i])) {
        target.set(arr[i], source.get(arr[i]));
      }
    }
    return target;
  }

  /**
   * Set the values of an array into a map
   * @param arr
   * @param keySelector A function returning the key to be used in the map
   * @param map The map to set on, optional. If not set a new map is created.
   * @param diffOnly Set only new values, optional. Valid only if a map is supplied.
   * @returns
   */
  static fromArray<K, V>(
    arr: Array<V>,
    keySelector: (value: V) => K,
    map?: Map<K, V>,
    diffOnly?: boolean
  ): Map<K, V> {
    if (!(map instanceof Map)) {
      map = new Map<K, V>();
      diffOnly = false;
    }

    for (let i = 0, len = arr.length; i < len; i++) {
      const key = keySelector(arr[i]);
      if (!diffOnly || !map.has(key)) {
        map.set(key, arr[i]);
      }
    }

    return map;
  }

  static asKeyValArray<K, V>(map: Map<K, V>): Array<[K, V]> {
    return Array.from(map.entries());
  }

  static asKeyArray<K, V>(map: Map<K, V>): Array<K> {
    return Array.from(map.keys());
  }

  static asValArray<K, V>(map: Map<K, V>): Array<V> {
    return Array.from(map.values());
  }

  static asObjectLiteral<K, V>(map: Map<K, V>): { [key: string]: V } {
    return MapExt.asKeyArray(map).reduce((prev, curr) => {
      prev[curr.toString()] = map.get(curr);
      return prev;
    }, {});
  }
}

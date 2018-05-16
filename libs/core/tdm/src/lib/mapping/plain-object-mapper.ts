const PRIMITIVES = ['boolean', 'string', 'number', 'symbol'];

/**
 * A plain object (POJO/POCO) serializer/deserializer.
 * Extend for custom behaviour.
 */
export class PlainObjectMapper {
  deserialize(obj: any): any {
    return this._deserialize(obj);
  }

  serialize(obj: any): any {
    return this._serialize(obj, new Map<any, any>());
  }

  protected _deserialize(obj: any): any {
    return obj;
  }

  protected _serialize(obj: any, cache: Map<any, any>): any {
    if (obj === null || obj === undefined) {
      return null;
    }

    // we can be passive about resolving primitives, let them fallback if nothing hits...
    // however, since primitive are used often, it likely that we save checks if we use an active approach.
    if (PRIMITIVES.indexOf(typeof obj) > -1) {
      return obj;
    }

    let cachedVal: any = cache.get(obj);

    if (cachedVal) {
      return cachedVal;
    }

    if (Array.isArray(obj)) {
      cache.set(obj, (cachedVal = []));

      for (let i = 0, len = obj.length; i < len; i++) {
        cachedVal.push(this._serialize(obj[i], cache));
      }
    } else if (obj instanceof Date) {
      cache.set(obj, (cachedVal = obj.toISOString()));
    } else if (obj instanceof RegExp) {
      cache.set(obj, (cachedVal = obj.toString()));
    } else if (typeof obj === 'object' || typeof obj === 'function') {
      cache.set(obj, (cachedVal = {}));

      const keys = Object.keys(obj);
      for (let i = 0, len = keys.length; i < len; i++) {
        cachedVal[keys[i]] = this._serialize(obj[keys[i]], cache);
      }
    } else {
      // throw here? don't think there's a way to get here
      cache.set(obj, (cachedVal = obj.toString()));
    }

    return cachedVal;
  }
}

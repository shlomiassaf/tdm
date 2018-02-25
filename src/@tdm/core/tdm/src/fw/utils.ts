
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

const undef = undefined;
export function isUndefined(obj: any): obj is undefined {
  return obj === undef;
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
 * @returns
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
    return (Reflect as any).getMetadata('design:type', target, key);
  },
  paramTypes(target: any, key: string | symbol) {
    return (Reflect as any).getMetadata('design:paramtypes', target, key);
  }
};

export function LazyInit(getter: Function): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol, descriptor?: PropertyDescriptor) => {
    if (descriptor) {
      throw new Error('LazyInit can only decorate properties');
    }
    Object.defineProperty(target, propertyKey, { get() {
      const ret = getter.call(this);

      Object.defineProperty(this, propertyKey, { value: ret });
      return ret;
    }});
  };
}

/**
 * @pluginApi
 */
export const array = function() {
  const findRemove = <T>(arr: T[], predicate: (value: T) => boolean, thisArg?: any): T | undefined => {
    const idx = arr.findIndex(predicate, thisArg);
    if (idx > -1) {
      return arr.splice(idx, 1)[0];
    }
  };

  return { findRemove };
}();

/**
 * Returns the chain of prototypes up to Object (not included)
 * @pluginApi
 * @param cls
 */
export function getProtoChain(cls: Constructor<any>): Array<Constructor<any>> {
  const classes = [];
  while (cls && cls !== Object) {
    classes.push(cls);

    const proto = Object.getPrototypeOf(cls.prototype);
    cls = isFunction(proto) || !proto ? proto : proto.constructor;
  }
  return classes;
}

export function getBaseClass(cls: Constructor<any>): Constructor<any> | void {
  const proto = Object.getPrototypeOf(cls.prototype);
  return !proto || isFunction(proto) ? proto : proto.constructor;
}

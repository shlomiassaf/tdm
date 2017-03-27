import { Observable } from 'rxjs/Observable';
import { Constructor, isFunction, targetStore } from '@tdm/transformation';
import { ActiveRecordCollection as ARecordColl, ActionOptions, IdentityValueType } from '@tdm/core';

export class DS {

  find<T>(target: Constructor<T>, id: IdentityValueType, options?: ActionOptions): Observable<T> {
    return this.run(target, 'find', id, options);
  }

  query<T>(target: Constructor<T>, options?: ActionOptions): Observable<T[]> {
    return this.run(target, 'query', options);
  }

  create<T>(instance: T, options?: ActionOptions): Observable<T | void>;
  create<T>(target: Constructor<T>, obj: Partial<T>, options?: ActionOptions): Observable<T | void>;
  create<T>(target: Constructor<T> | T, obj?: Partial<T> | ActionOptions, options?: ActionOptions): Observable<T | void> {
    if (isFunction(target)) {
      return this.run(target, 'create', obj, options);
    } else {
      if (targetStore.hasTarget(target.constructor)) {
        return this.run(<any>target.constructor, 'create', target, options);
      }
      // TODO: got down proto chain and search for target.
    }

    // TODO: normalize error.
    return Observable.throw(new Error('Invalid input'));
  }

  update<T>(instance: T, options?: ActionOptions): Observable<T | void>;
  update<T>(target: Constructor<T>, obj: Partial<T>, options?: ActionOptions): Observable<T | void>;
  update<T>(target: Constructor<T> | T, obj?: Partial<T> | ActionOptions, options?: ActionOptions): Observable<T | void> {
    if (isFunction(target)) {
      return this.run(target, 'update', obj, options);
    } else {
      if (targetStore.hasTarget(target.constructor)) {
        return this.run(<any>target.constructor, 'update', target, options);
      }
      // TODO: got down proto chain and search for target.
    }

    // TODO: normalize error.
    return Observable.throw(new Error('Invalid input'));
  }

  remove<T>(instance: T, options?: ActionOptions): Observable<void>;
  remove<T>(target: Constructor<T>, id: IdentityValueType, options?: ActionOptions): Observable<void>;
  remove<T>(target: Constructor<T> | T, id?: IdentityValueType | ActionOptions, options?: ActionOptions): Observable<void> {
    if (isFunction(target)) {
      return this.run(target, 'remove', id, options);
    } else {
      if (targetStore.hasTarget(target.constructor)) {
        return this.run(<any>target.constructor, 'remove', target, options);
      }
      // TODO: got down proto chain and search for target.
    }

    // TODO: normalize error.
    return Observable.throw(new Error('Invalid input'));
  }

  private run(target: Constructor<any>, cmd: keyof DS, ...args: any[]): any {
    if (!targetStore.hasTarget(target)) {
      // TODO: normalize error.
      return Observable.throw(new Error('Target does not exist'));
    }
    const fn = targetStore.getTargetMeta(target).daoClass.prototype.find;

    if (!isFunction(fn)) {
      // TODO: normalize error.
      return Observable.throw(new Error(`DAO does not support action ${cmd}`));
    }

    return fn(...args);
  }
}


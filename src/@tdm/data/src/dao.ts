import { Observable } from 'rxjs/Observable';
import { Constructor, isFunction, targetStore } from '@tdm/core';

import { AdapterStatic, ActionOptions, IdentityValueType, DAOMethods, DAOTarget, DAOAdapter, TargetError } from './fw'



export interface TargetDAO<T, Options extends ActionOptions> {
  find(id: IdentityValueType, options?: Options): Observable<T>;

  query(options?: Options): Observable<T[]>

  create(instance: T, options?: Options): Observable<T | void>;
  create(obj: Partial<T>, options?: Options): Observable<T | void>;

  update(instance: T, options?: Options): Observable<T | void>;
  update<T>(obj: Partial<T>, options?: Options): Observable<T | void>;

  remove(instance: T, options?: Options): Observable<void>;
  remove(id: IdentityValueType, options?: Options): Observable<void>;
}

export interface AdapterDAO<Options extends ActionOptions> {
  find<T>(id: IdentityValueType, options?: Options): Observable<T>;

  query<T>(options?: Options): Observable<T[]>

  create<T>(instance: T, options?: Options): Observable<T | void>;
  create<T>(obj: Partial<T>, options?: Options): Observable<T | void>;

  update<T>(instance: T, options?: Options): Observable<T | void>;
  update<T>(obj: Partial<T>, options?: Options): Observable<T | void>;

  remove<T>(instance: T, options?: Options): Observable<void>;
  remove(id: IdentityValueType, options?: Options): Observable<void>;
}

export class DAO {

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

  private run(target: Constructor<any>, cmd: keyof typeof DAOMethods, ...args: any[]): any {
    if (!targetStore.hasTarget(target)) {
      // TODO: normalize error.
      return Observable.throw(new Error('Target does not exist'));
    }

    const meta = targetStore.getTargetMeta(target);
    if (!meta.activeAdapter) {
      return Observable.throw(TargetError.noActiveAdapter(target));
    }

    const action = targetStore.getAdapter(meta.activeAdapter).getDAOAction(cmd);

    return targetStore.getAC(target, meta.activeAdapter)
      .createExecFactory(action, 'obs$')(undefined, true, ...args);
  }

  /**
   * Returns the DAO of an adapter, attached to a target.
   * @param adapterClass
   * @param target
   * @returns {any}
   */
  static of<T, Z, Options>(adapterClass: AdapterStatic<any, Options>, target: Z &  Constructor<T>): TargetDAO<T, Options> {
    const clz = targetStore.getAdapter(adapterClass).DAOClass;
    return Object.create(clz.prototype, { [DAOTarget]: { value: target }, [DAOAdapter]: { value: adapterClass } });
  }
}

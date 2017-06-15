import {
  isFunction,
  targetStore,
  errors,
  Constructor
} from '@tdm/core/tdm';

import { AdapterStatic, ActionOptions, IdentityValueType, DAOMethods, DAOTarget, DAOAdapter } from './fw'

export interface TargetDAO<T, Options extends ActionOptions> {
  findById(id: IdentityValueType, options?: Options): Promise<T>;

  find(options: Options): Promise<T>;
  findOne(options: Options): Promise<T>;

  query(options?: Options): Promise<T[]>
  findAll(options?: Options): Promise<T[]>

  create(instance: T, options?: Options): Promise<T | void>;
  create(obj: Partial<T>, options?: Options): Promise<T | void>;

  update(instance: T, options?: Options): Promise<T | void>;
  update<T>(obj: Partial<T>, options?: Options): Promise<T | void>;

  remove(instance: T, options?: Options): Promise<void>;
  remove(id: IdentityValueType, options?: Options): Promise<void>;
}

export interface AdapterDAO<Options extends ActionOptions> {
  findById<T>(id: IdentityValueType, options?: Options): Promise<T>;

  find<T>(options: Options): Promise<T>;
  findOne<T>(options: Options): Promise<T>;

  query<T>(options?: Options): Promise<T[]>
  findAll<T>(options?: Options): Promise<T[]>

  create<T>(instance: T, options?: Options): Promise<T | void>;
  create<T>(obj: Partial<T>, options?: Options): Promise<T | void>;

  update<T>(instance: T, options?: Options): Promise<T | void>;
  update<T>(obj: Partial<T>, options?: Options): Promise<T | void>;

  remove<T>(instance: T, options?: Options): Promise<void>;
  remove(id: IdentityValueType, options?: Options): Promise<void>;
}

export class DAO {
  findById<T>(target: Constructor<T>, id: IdentityValueType, options?: ActionOptions): Promise<T> {
    return this.run(target, 'findById', id, options);
  }

  find<T>(target: Constructor<T>, options: ActionOptions): Promise<T> {
    return this.run(target, 'find', options);
  }
  findOne<T>(target: Constructor<T>, options: ActionOptions): Promise<T> {
    return this.find(target, options);
  }

  query<T>(target: Constructor<T>, options?: ActionOptions): Promise<T[]> {
    return this.run(target, 'query', options);
  }
  findAll<T>(target: Constructor<T>, options?: ActionOptions): Promise<T[]> {
    return this.query(target, options);
  }

  create<T>(instance: T, options?: ActionOptions): Promise<T | void>;
  create<T>(target: Constructor<T>, obj: Partial<T>, options?: ActionOptions): Promise<T | void>;
  create<T>(target: Constructor<T> | T, obj?: Partial<T> | ActionOptions, options?: ActionOptions): Promise<T | void> {
    if (isFunction(target)) {
      return this.run(target, 'create', obj, options);
    } else {
      if (targetStore.hasTarget(target.constructor)) {
        return this.run(<any>target.constructor, 'create', target, options);
      }
      // TODO: got down proto chain and search for target.
    }

    // TODO: normalize error.
    return Promise.reject(new Error('Invalid input'));
  }

  update<T>(instance: T, options?: ActionOptions): Promise<T | void>;
  update<T>(target: Constructor<T>, obj: Partial<T>, options?: ActionOptions): Promise<T | void>;
  update<T>(target: Constructor<T> | T, obj?: Partial<T> | ActionOptions, options?: ActionOptions): Promise<T | void> {
    if (isFunction(target)) {
      return this.run(target, 'update', obj, options);
    } else {
      if (targetStore.hasTarget(target.constructor)) {
        return this.run(<any>target.constructor, 'update', target, options);
      }
      // TODO: got down proto chain and search for target.
    }

    // TODO: normalize error.
    return Promise.reject(new Error('Invalid input'));
  }

  remove<T>(instance: T, options?: ActionOptions): Promise<void>;
  remove<T>(target: Constructor<T>, id: IdentityValueType, options?: ActionOptions): Promise<void>;
  remove<T>(target: Constructor<T> | T, id?: IdentityValueType | ActionOptions, options?: ActionOptions): Promise<void> {
    if (isFunction(target)) {
      return this.run(target, 'remove', id, options);
    } else {
      if (targetStore.hasTarget(target.constructor)) {
        return this.run(<any>target.constructor, 'remove', target, options);
      }
      // TODO: got down proto chain and search for target.
    }

    // TODO: normalize error.
    return Promise.reject(new Error('Invalid input'));
  }


  private run(target: Constructor<any>, cmd: keyof typeof DAOMethods, ...args: any[]): any {
    if (!targetStore.hasTarget(target)) {
      // TODO: normalize error.
      return Promise.reject(new Error('Target does not exist'));
    }

    const meta = targetStore.getTargetMeta(target);
    if (!meta.activeAdapter) {
      return Promise.reject(errors.modelNoAdapter(target));
    }

    const action = targetStore.getAdapter(meta.activeAdapter).getDAOAction(cmd);

    return targetStore.getAC(target, meta.activeAdapter)
      .createExecFactory(action, 'promise')(undefined, true, ...args);
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

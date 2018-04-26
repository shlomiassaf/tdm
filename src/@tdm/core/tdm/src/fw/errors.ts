import { stringify, isFunction } from './utils';

const ERROR_EXEC_TYPE = Symbol('Throw');

export class Errors {

  /**
   * Returns a marked Errors repository where the next call to an error object will throw.
   *
   * e.g. `errors.THROW().decorator(...)` will throw
   */
  get throw(): this {
    return Object.assign(Object.create(this), { [ERROR_EXEC_TYPE]: 'throw' } );
  }


  protected constructor() {
    // support for post instantiation mixins on the prototype (plugins) - don't use new.
    Errors.create(this);
  }

  decorator(target: any, message: string, propertyName?: TdmPropertyKey): Error {
    const CLS = isFunction(target) ? target : target.constructor;

    if (!propertyName) {
      return this.ERROR(`Invalid decorator @ ${stringify(CLS)}}: ${message}`);
    } else {
      const dot = CLS === target ? '#' : '.';
      return this.ERROR(`Invalid decorator @ ${stringify(target)}${dot}${stringify(propertyName)}: ${message}`);
    }
  }

  model(model: any, message: string): Error {
    return this.ERROR(`Model Error [${stringify(model)}]: ${message}`);
  }

  modelSingleCol(model: any, expectedCol: boolean): Error {
    return this.ERROR(`Model Error:` + expectedCol
      ? `Expected a COLLECTION but got an OBJECT [Target: ${stringify(model)}]`
      : `Expected an OBJECT but got a COLLECTION [Target: ${stringify(model)}]`
    );
  }

  /**
   * @internal
   */
  ERROR<T = any>(message: string, assign?: T): Error & T {
    const err = new Error(message);
    if (assign) {
      Object.assign(err, assign);
    }

    if (this[ERROR_EXEC_TYPE] === 'throw') {
      throw err;
    } else {
      return <any> err;
    }
  }

  /**
   * Creates a new TargetStore instance.
   * @param instance optional, used internally
   */
  static create(instance?: Errors): Errors {
    const errors: Errors = instance || Object.create(Errors.prototype);
    return errors;
  }
}

export const errors: Errors = Errors.create();

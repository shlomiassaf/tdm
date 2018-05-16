const IN_FLIGHT_PROP_CHANGE = new WeakMap<any, any>();

export interface PropChange<Z = any> {
  curr: Z;
  prev: Z;
  isFirst: boolean;
}

export type PropChanges<T> = { [P in keyof T]: PropChange<T[P]> };

export interface PropNotifyHandler<T = any> {
  onPropChange(T, changes: PropChanges<T>): void;
}

export interface PropNotifier<T = any> {
  onPropChange?: PropNotifyHandler<T>;
}

export function PropNotify(): PropertyDecorator {
  return (target: Object, propertyKey: string) => {
    const __propertyKey = `__${propertyKey}`; // tslint:disable-line
    Object.defineProperty(target, propertyKey, {
      get(this: PropNotifier) {
        return this[__propertyKey];
      },
      set(this: PropNotifier, curr: any) {
        if (this[__propertyKey] !== curr) {
          const isFirst = !(__propertyKey in this);
          const prev = this[__propertyKey];
          this[__propertyKey] = curr;
          if (this.onPropChange) {
            let changes = IN_FLIGHT_PROP_CHANGE.get(this);
            if (!changes) {
              changes = {};
              IN_FLIGHT_PROP_CHANGE.set(this, changes);
              Promise.resolve(null).then(() => {
                IN_FLIGHT_PROP_CHANGE.delete(this);
                this.onPropChange.onPropChange(this, changes);
              });
            }
            changes[propertyKey] = {
              curr,
              prev,
              isFirst
            };

            //  SYMBOL VERSION
            //
            // const IN_PROP_CHANGE = Symbol('IN_PROP_CHANGE');
            //
            // if (!this[IN_PROP_CHANGE]) {
            //   this[IN_PROP_CHANGE] = {};
            //   Promise.resolve(null).then( () => {
            //     const changes = this[IN_PROP_CHANGE];
            //     this[IN_PROP_CHANGE] = false;
            //     this.onPropChange.onPropChange(this, changes);
            //   });
            // }
            // this[IN_PROP_CHANGE][propertyKey] = {
            //   curr,
            //   prev,
            //   isFirst
            // };
          }
        }
      }
    });
  };
}

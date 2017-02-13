
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


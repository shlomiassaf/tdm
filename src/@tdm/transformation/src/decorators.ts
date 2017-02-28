import { Constructor } from './fw';
import { targetStore } from './metadata';

/**
 * @propertyDecorator static
 */
export function Factory<T extends Constructor<any>>(fn: (isColl: boolean) => T): ClassDecorator {
  return (target: T) => targetStore.setClassProp(target, 'factory', fn);
}

/**
 * @propertyDecorator static
 */
export function SetName<T extends Constructor<any>>(name: string): ClassDecorator {
  return (target: T) => targetStore.setClassProp(target, 'name', name);
}

/**
 * @propertyDecorator instance
 */
export function Identity(): Function {
  return (target: Constructor<any>, key: PropertyKey) => targetStore.setClassProp(target, 'identity', key);
}

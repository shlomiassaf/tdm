import { Constructor } from './fw';
import { targetStore } from './metadata';

/**
 * @propertyDecorator static
 */
export function Factory<T extends Constructor<any>>(fn: (isColl: boolean) => T): ClassDecorator {
  return (target: T) => targetStore.setFactory(target, fn);
}

/**
 * @propertyDecorator static
 */
export function SetName<T extends Constructor<any>>(name: string): ClassDecorator {
  return (target: T) => targetStore.setName(target, name);
}

/**
 * @propertyDecorator instance
 */
export function Identity(): Function {
  return (...args: any[]) => targetStore.setIdentity(...args);
}

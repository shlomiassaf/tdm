import { isFunction, isNumber, isStaticDecorator } from '../utils';
import {
  DecoratorInfo,
  MetaClassRegisterHelpers,
  MetaClassExtendHelpers,
  RegisterFn,
  ExtendFn
} from './types';

export function decoratorInfo(...args: any[]): DecoratorInfo {
  if (isFunction(args[0]) && !args[1]) { // target is function and key is not set
    return { type: 'class' };
  } else {
    const type = args.length === 3 && isNumber(args[2]) ? 'param' : 'member';
    const result: DecoratorInfo = {
      type,
      name: args[1],
      isStatic: isStaticDecorator(args[0]),
      hasDescriptor:  args.length === 3 && type === 'member'
    };
    if (type === 'param') {
      result.paramIndex = args[2];
    }
    return result;
  }
}

export const registerHelpers: MetaClassRegisterHelpers = <any> { };
export const extendHelpers: MetaClassExtendHelpers = <any> { };

export function setMetaHelper(type: 'register', name: keyof MetaClassRegisterHelpers, helperFn: RegisterFn): void;
export function setMetaHelper(type: 'extend', name: keyof MetaClassExtendHelpers, helperFn: ExtendFn): void;
export function setMetaHelper(type: 'register' | 'extend', name: any, helperFn: any): void {
  switch (type) {
    case 'extend':
      extendHelpers[name] = helperFn;
      break;
    case 'register':
      registerHelpers[name] = helperFn;
      break;
    default:
      break;
  }
}

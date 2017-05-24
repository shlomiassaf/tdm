import { isFunction, isNumber, isStaticDecorator } from '../utils';
import { DecoratorInfo } from './types';

export function decoratorInfo(...args: any[]): DecoratorInfo {
  if (isFunction(args[0]) && !args[1]) { // target is function and key is not set
    return { type: 'class' };
  } else {
    const type = args.length === 3 && isNumber(args[2]) ? 'param' : 'member';
    return {
      type,
      name: args[1],
      isStatic: isStaticDecorator(args[0]),
      hasDescriptor:  args.length === 3 && type === 'member'
    }
  }
}
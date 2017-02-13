import { isNumber, isStaticDecorator } from '../../utils';

export interface DecoratorInfo {
  type: 'class' | 'member' | 'param';
  name?: PropertyKey,
  isStatic?: boolean;
  hasDescriptor?: boolean;
}

export function decoratorInfo(...args: any[]): DecoratorInfo {

  switch (args.length) {
    case 1:
      return { type: 'class' };
    default:
      const type = args.length === 3 && isNumber(args[2]) ? 'param' : 'member';
      return {
        type,
        name: args[1],
        isStatic: isStaticDecorator(args[0]),
        hasDescriptor:  args.length === 3 && type === 'member'
      }
  }
}

export class MemberDecoratorMetadata {
  get name(): PropertyKey {
    return this.decoratorInfo.name;
  }

  constructor(public readonly decoratorInfo: DecoratorInfo) { }
}

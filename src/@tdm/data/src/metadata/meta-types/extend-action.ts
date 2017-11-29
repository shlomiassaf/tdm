import { MapExt, MetaClass, registerHelpers, DecoratorInfo } from '@tdm/core/tdm';
import { ActionMetadata, ActionMetadataArgs } from './action';

export function extend(from: Map<PropertyKey, ExtendActionMetadata[]>, to: Map<PropertyKey, ExtendActionMetadata[]> | undefined): Map<PropertyKey, ExtendActionMetadata[]> {
  if (!to) {
    to = new Map<PropertyKey, ExtendActionMetadata[]>();
  }

  MapExt.asKeyValArray(from)
    .forEach( ([k, v]) => {
      if (!to.has(k)) {
        to.set(k, v.slice())
      } else {
        const arrFrom = v;
        const arrTo = to.get(k);
        arrFrom.forEach( action => {
          if (!arrTo.some( a => a.name === action.name )) {
            arrTo.push(action);
          }
        });
      }
    });

  return to;
}

@MetaClass<ActionMetadataArgs<any>, ExtendActionMetadata>({
  allowOn: ['staticMember', 'member'],
  extend,
  register: registerHelpers.array
})
export class ExtendActionMetadata extends ActionMetadata {
  constructor(metaArgs: Partial<ActionMetadataArgs<any>>, info: DecoratorInfo)  {
    super(metaArgs as any, info);
    Object.assign(this, metaArgs)
  }
}


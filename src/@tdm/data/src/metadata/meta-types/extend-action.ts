import { tdm } from '@tdm/core';

import { ActionMetadata, ActionMetadataArgs } from './action';
const { targetStore } = tdm;

function register(meta: tdm.MetaClassInstanceDetails<ActionMetadataArgs<any>, ExtendActionMetadata>): void {
  const curr = targetStore.getMetaFor<any, ExtendActionMetadata[]>(meta.target, meta.metaClassKey, meta.info.name as any) || [];
  curr.push(meta.metaValue);
  targetStore.setMetaFor<ExtendActionMetadata, ExtendActionMetadata[]>(meta.target, meta.metaClassKey, meta.info.name as any, curr);
}

function extend(from: Map<PropertyKey, ExtendActionMetadata[]>, to: Map<PropertyKey, ExtendActionMetadata[]> | undefined): Map<PropertyKey, ExtendActionMetadata[]> {
  if (!to) {
    to = new Map<PropertyKey, ExtendActionMetadata[]>();
  }

  tdm.MapExt.asKeyValArray(from)
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

@tdm.MetaClass<ActionMetadataArgs<any>, ExtendActionMetadata>({
  allowOn: ['staticMember', 'member'],
  extend,
  register
})
export class ExtendActionMetadata extends ActionMetadata {
  constructor(metaArgs: Partial<ActionMetadataArgs<any>>, info: tdm.DecoratorInfo)  {
    super(metaArgs as any, info);
    Object.assign(this, metaArgs)
  }
}


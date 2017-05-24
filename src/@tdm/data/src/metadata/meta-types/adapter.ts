import { tdm, Constructor } from '@tdm/core';
import { ActionMetadata, ActionMetadataArgs } from './action';
import { array } from '../../utils';
import { DAOMethods, DAOAdapter, DAOTarget } from '../../fw';

function unsupportedDAOCmd() {
  // TODO: normalize error.
  return Promise.reject(new Error(`DAO does not support this action`));
}

export interface AdapterMetadataArgs {
  actionMetaClass: tdm.MetadataClassStatic;
  DAOClass: Constructor<any>;
  /**
   * The resource metadata class.
   * If not set the metadata arguments are registered to the target metadata instance
   */
  resourceMetaClass?: tdm.MetadataClassStatic;
}

// this is here so we don't break the flow.
// adapter meta is different then other meta's since it might get created before the meta is available
// since metadata (actions) for the adapter might be set before the meta is created.
// this workaround prevents the need for an adapter store, the meta is used as the store.
// to support that we allow setting the metadata args in a later period.
// the register() method is aware of that and knows how to handle this scenario.
function factory(this: tdm.MetaClassMetadata<AdapterMetadataArgs, AdapterMetadata>,
                 metaArgs: AdapterMetadataArgs,
                 target: Object,
                 info: tdm.DecoratorInfo): tdm.MetaClassInstanceDetails<AdapterMetadataArgs, AdapterMetadata> {
  return <any>Object.assign(this.constructor.prototype.factory.call(this, metaArgs, target, info), { metaArgs });
}

function register(this: tdm.MetaClassMetadata<AdapterMetadataArgs, AdapterMetadata>,
                  meta: tdm.MetaClassInstanceDetails<AdapterMetadataArgs, AdapterMetadata>): void {

  const adapter = tdm.targetStore.getAdapter(meta.target);
  Object.assign(adapter, meta['metaArgs']);

  adapter.buildDAO();
}

@tdm.MetaClass<AdapterMetadataArgs, AdapterMetadata>({
  allowOn: ['class'],
  factory,
  register
})
export class AdapterMetadata {
  actionMetaClass: tdm.MetadataClassStatic;
  DAOClass: Constructor<any>;
  resourceMetaClass?: tdm.MetadataClassStatic;

  private actions = new Map<any, ActionMetadata[]>();


  addAction(meta: ActionMetadata, target: Constructor<any>): void;
  addAction(meta: tdm.MetaClassInstanceDetails<ActionMetadataArgs, ActionMetadata>): void;
  addAction(meta: ActionMetadata | tdm.MetaClassInstanceDetails<ActionMetadataArgs, ActionMetadata>, target?: Constructor<any>): void {
    if (!tdm.isFunction(target)) {
      target = (<any>meta).target;
      meta = (<any>meta).metaValue;
    }
    const actions = this.actions.get(target) || [];
    actions.push((<any>meta));
    this.actions.set(target, actions);
  }

  getDAOAction(key: string): ActionMetadata {
    return this.actions.get(this.DAOClass).find(a => a.name === key);
  }

  getActions(...targets: any[]): ActionMetadata[] {
    const metadataColl = targets.map( t => this.actions.get(t) ).filter( t => !!t );
    return array.flatten(metadataColl);
  }

  /**
   * @internal
   */
  buildDAO(): void {
    const actions = this.getActions(this.DAOClass);
    const daoProto = this.DAOClass.prototype;

    actions.forEach(action => {
      if (action.decoratorInfo.isStatic) {
        throw new Error('DAO can define static actions.');
      }

      daoProto[action.name] = function (...args: any[]) {
        return tdm.targetStore.getAC(this[DAOTarget], this[DAOAdapter])
          .createExecFactory(action, 'promise')(undefined, true, ...args);
      };

      if (action.alias) {
        action.alias.forEach( alias => daoProto[alias] = daoProto[action.name] );
      }

    });

    // set unsupported handlers for missing commands.
    const keys = Object.keys(DAOMethods);
    for (let i=0, len=keys.length; i<len; i++) {
      if (!daoProto[keys[i]]) {
        daoProto[keys[i]] = unsupportedDAOCmd;
      }
    }

  }
}

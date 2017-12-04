import {
  isFunction,
  targetStore,
  Constructor,
  DecoratorInfo,
  MetadataClassStatic,
  MetaClass,
  MetaClassMetadata,
  MetaClassInstanceDetails
} from '@tdm/core/tdm';
import { ActionMetadata, ActionMetadataArgs } from './action';
import { array } from '../../utils';
import { DAOMethods, DAOAdapter, DAOTarget } from '../../fw';

function unsupportedDAOCmd() {
  // TODO: normalize error.
  return Promise.reject(new Error(`DAO does not support this action`));
}

export interface AdapterMetadataArgs {
  actionMetaClass: MetadataClassStatic;
  DAOClass: Constructor<any>;
  /**
   * The resource metadata class.
   * If not set the metadata arguments are registered to the target metadata instance
   */
  resourceMetaClass?: MetadataClassStatic;
}

// this is here so we don't break the flow.
// adapter meta is different then other meta's since it might get created before the meta is available
// since metadata (actions) for the adapter might be set before the meta is created.
// this workaround prevents the need for an adapter store, the meta is used as the store.
// to support that we allow setting the metadata args in a later period.
// the register() method is aware of that and knows how to handle this scenario.
/** @internal */
export function factory(this: MetaClassMetadata<AdapterMetadataArgs, AdapterMetadata>,
                 metaArgs: AdapterMetadataArgs,
                 target: Object,
                 info: DecoratorInfo): MetaClassInstanceDetails<AdapterMetadataArgs, AdapterMetadata> {
  return <any>Object.assign(this.constructor.prototype.factory.call(this, metaArgs, target, info), { metaArgs });
}

/** @internal */
export function register(this: MetaClassMetadata<AdapterMetadataArgs, AdapterMetadata>,
                  meta: MetaClassInstanceDetails<AdapterMetadataArgs, AdapterMetadata>): void {

  const adapter = targetStore.getAdapter(meta.target);
  Object.assign(adapter, meta['metaArgs']);

  adapter.buildDAO();
}

@MetaClass<AdapterMetadataArgs, AdapterMetadata>({
  allowOn: ['class'],
  factory,
  register
})
export class AdapterMetadata {
  actionMetaClass: MetadataClassStatic;
  DAOClass: Constructor<any>;
  resourceMetaClass?: MetadataClassStatic;

  private actions = new Map<any, ActionMetadata[]>();

  addAction(meta: ActionMetadata, target: Constructor<any>): void;
  addAction(meta: MetaClassInstanceDetails<ActionMetadataArgs, ActionMetadata>): void;
  addAction(meta: ActionMetadata | MetaClassInstanceDetails<ActionMetadataArgs, ActionMetadata>, target?: Constructor<any>): void {
    if (!isFunction(target)) {
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
        return targetStore.getAC(this[DAOTarget], this[DAOAdapter])
          .createExecFactory(action, 'promise')(undefined, ...args);
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

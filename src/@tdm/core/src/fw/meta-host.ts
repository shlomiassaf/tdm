import {
  Constructor,
  EXTEND_COLL,
  BaseMetadata,
  DecoratorInfo,
  MetaFactoryInstance,
  MetaFactoryStatic,
  metaFactoryFactory,
  decoratorFactory
} from '../fw';


/**
 * @pluginApi
 */
export interface MetaHostMetadataArgs {
  host: Constructor<any>;
  containerKey: string;
  before?(metaArgs: any): any;

  /**
   * When true, treats an array as a collection where each value is a instance of the metadata.
   * This enables settings multiple metadata values.
   */
  forEach?: boolean;
}

/**
 * @pluginApi
 */
export class MetaHostMetadata extends BaseMetadata {
  host: MetaFactoryStatic;
  containerKey: string;
  before?(metaArgs: any): any;

  forEach: boolean;
  target: any;


  constructor(obj: MetaHostMetadataArgs, info: DecoratorInfo) {
    super(info);
    Object.assign(this, obj);
  }

  static metaFactory = metaFactoryFactory<MetaHostMetadataArgs, MetaHostMetadata>(MetaHostMetadata);

  static register(metadata: MetaFactoryInstance<MetaHostMetadata>): void {
    const meta = metadata.metaValue;

    meta.target = metadata.target;

    const hostOf = meta.host[EXTEND_COLL] || [];
    hostOf.push(meta);
    meta.host[EXTEND_COLL] = hostOf;
  }
}

export function MetaHost(metaArgs: MetaHostMetadataArgs): (target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor) => any {
  return metaHost(metaArgs) as any;
}
export const metaHost: (metaArgs: MetaHostMetadataArgs) => (target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor) => any
  = <any>decoratorFactory<MetaHostMetadataArgs>(MetaHostMetadata, 'class'); // for Angular AOT

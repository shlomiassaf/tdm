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
}

/**
 * @pluginApi
 */
export class MetaHostMetadata extends BaseMetadata {
  host: MetaFactoryStatic;
  containerKey: string;
  before?(metaArgs: any): any;

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

export const MetaHost = decoratorFactory<MetaHostMetadataArgs>(MetaHostMetadata, 'class');
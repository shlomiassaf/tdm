import { metaFactoryFactory, BaseMetadata, DecoratorInfo, MapExt, targetStore, MetaFactoryInstance } from '@tdm/transformation';

import { DeserializerFactory, ExecuteContext, ExecuteResponse, ActionOptions, ValidationSchedule } from '../../fw';

export enum ActionMethodType {
  /**
   * Used to mark a method as local to the implementing adapter.
   */
  LOCAL,
  READ,
  CREATE,
  REPLACE,
  UPDATE,
  DELETE
}

export type RawActionHandler = (executeResponse: ExecuteResponse, options: ActionOptions) => void;

export type RawActionMetadataArgs = RawActionHandler | {
  handler: RawActionHandler;
  deserialize?: boolean;
}

export interface RawActionMetadata {
  handler: RawActionHandler;
  deserialize: boolean;
}

export interface ActionMetadataArgs<T> {
  method: T;
  /**
   * Specify if the response is an array.
   * A collection can only be set on static level actions.
   * @optional
   * @default false
   */
  isCollection?: boolean;
  deserializer?: DeserializerFactory;
  raw?: RawActionMetadataArgs;
  /**
   * A hook to update data and return the options.
   * If not set the options is taken from the 1st arg.
   * @param data
   * @param args
   */
  pre?: (ctx: ExecuteContext<any>, ...args: any[] )=> any,
  validation?: ValidationSchedule;
  sendBody?: boolean;
}

export class ActionMetadata extends BaseMetadata {
  method: ActionMethodType;
  isCollection: boolean | undefined;
  deserializer: DeserializerFactory;
  raw: RawActionMetadata;
  pre?: (ctx: ExecuteContext<any>, ...args: any[] )=> any;
  validation: ValidationSchedule;
  sendBody: boolean;

  constructor(public readonly metaArgs: ActionMetadataArgs<any>, info: DecoratorInfo) {
    super(info);
  }
}

export class ExtendActionMetadata extends ActionMetadata {
  constructor(metaArgs: Partial<ActionMetadataArgs<any>>, info: DecoratorInfo)  {
    super(metaArgs as any, info);
    Object.assign(this, metaArgs)
  }

  static metaFactory = metaFactoryFactory<ActionMetadataArgs<any>, ExtendActionMetadata>(ExtendActionMetadata);

  static register(meta: MetaFactoryInstance<ExtendActionMetadata>): void {
    const curr = targetStore.getMetaFor<any, ExtendActionMetadata[]>(meta.target, meta.metaClassKey, meta.info.name as any) || [];
    curr.push(meta.metaValue);
    targetStore.setMetaFor<any, ExtendActionMetadata[]>(meta.target, meta.metaClassKey, meta.info.name as any, curr);
  }

  static extend(from: Map<PropertyKey, ExtendActionMetadata[]>, to: Map<PropertyKey, ExtendActionMetadata[]> | undefined): Map<PropertyKey, ExtendActionMetadata[]> {
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
}

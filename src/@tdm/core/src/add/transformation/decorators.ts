import { targetStore, decoratorFactory, PropMetadata, RelationMetadataArgs } from '@tdm/transformation'; // RelationMetadataArgs - leave to satisfy angular compiler
import { TDMError, DecoratorError, ExecuteResponse, ARHooks, ARHookableMethods } from '../../fw';
import {
  HookMetadata,
  HookMetadataArgs,
  ActionMetadataArgs,
  ExtendActionMetadata,
  ResourceMetadataArgs,
  BelongsToMetadataArgs,
  OwnsMetadataArgs,
  AdapterMetadata,
  AdapterMetadataArgs
} from '../../metadata';


/**
 * @classDecorator
 * @param def
 */
export function ResourceAdapter(def: AdapterMetadataArgs): (target) => any {
  return resourceAdapter(def) as any;
}
const resourceAdapter = decoratorFactory<AdapterMetadataArgs>(AdapterMetadata, 'class'); // FOR AOT

/**
 * @classDecorator
 * @param metaArgs
 */
export function Resource(metaArgs: ResourceMetadataArgs) {
  return target => {
    targetStore.setResource(metaArgs, target);
  };
}

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const ExtendAction = decoratorFactory<Partial<ActionMetadataArgs<any>>>(ExtendActionMetadata);

/**
 * @propertyDecorator instance
 * @param def
 */
export const BelongsTo = decoratorFactory<BelongsToMetadataArgs>(PropMetadata, true);


/**
 * @propertyDecorator instance
 * @param def
 */
export const Owns = decoratorFactory<OwnsMetadataArgs<any>>(PropMetadata, true);


/**
 * @propertyDecorator both
 * @param def
 */
export function Hook(def: HookMetadataArgs) {
  if (!ARHooks.hasOwnProperty(def.action)) {
    throw new TDMError(`Invalid hook '${def.action}'`);
  }

  return (target: Object, propertyKey: string | symbol, desc) => {
    const meta = HookMetadata.metaFactory(def, target, propertyKey, desc);

    switch (ARHooks[def.action].type) {
      case 'instance':
        if (meta.info.isStatic) {
          throw DecoratorError.hookNoStatic(target, propertyKey, def.action);
        }
        break;
      case 'static':
        if (!meta.info.isStatic) {
          throw DecoratorError.hookNoInstance(target, propertyKey, def.action);
        }
        break;
      default:
        break;
    }

    HookMetadata.register(meta);
  };
}

export function BeforeHook(action: ARHookableMethods) {
  return Hook({event: 'before', action});
}

export function AfterHook(action: ARHookableMethods) {
  return Hook({event: 'after', action});
}

export type BeforeHook<K extends string, Z> = { [P in K]: (options: Z) => void | Promise<void>; }
export type AfterHook<K extends string, Z> = { [P in K]: (options: Z, rawResponse: ExecuteResponse) => void | Promise<void>; }

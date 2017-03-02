
import { HookMetadata, HookMetadataArgs } from '../../metadata/meta-types/hook';
import { ARHooks, ARHookableMethods } from '../../active-record/active-record-interfaces';
import { TDMError, DecoratorError } from "../../core/errors";
import { ExecuteResponse } from "../../core/interfaces";

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

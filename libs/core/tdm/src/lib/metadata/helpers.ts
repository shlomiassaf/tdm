import {
  MapExt,
  MetaClassInstanceDetails,
  MetaClassMetadata,
  registerHelpers,
  extendHelpers,
  BaseMetadata
} from '../fw';
import { targetStore } from './target-store';

/**
 * Registers the value as any array.
 * If array does not exists will create one and push the value into it.
 *
 * Handles both single and property style registration.
 */
registerHelpers.array = function<TMetaArgs, TMetaClass>(
  this: MetaClassMetadata<TMetaArgs, TMetaClass>,
  meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass>
): void {
  const propKey: any = this.metaArgs.single === true ? true : meta.metaPropKey;

  let curr: any[] = <any>targetStore.getMetaFor(
    meta.target,
    meta.metaClassKey,
    propKey
  );
  if (!curr) {
    targetStore.setMetaFor(
      meta.target,
      meta.metaClassKey,
      propKey,
      (curr = [])
    );
  }

  curr.push(meta.metaValue);
};

extendHelpers.mergeMap = function<T>(
  from: Map<TdmPropertyKey, T>,
  to: Map<TdmPropertyKey, T> | undefined
): Map<TdmPropertyKey, T> {
  return to
    ? MapExt.mergeInto(to, from)
    : new Map<TdmPropertyKey, T>(from.entries());
};

extendHelpers.mergeMapArray = function<T extends BaseMetadata>(
  from: Map<TdmPropertyKey, T[]>,
  to: Map<TdmPropertyKey, T[]> | undefined
): Map<TdmPropertyKey, T[]> {
  if (!to) {
    to = new Map<TdmPropertyKey, T[]>();
  }

  MapExt.asKeyValArray(from).forEach(([k, v]) => {
    if (!to.has(k)) {
      to.set(k, v.slice());
    } else {
      const arrFrom = v;
      const arrTo = to.get(k);
      for (let metaClass of arrFrom) {
        if (!arrTo.some(a => a.name === metaClass.name)) {
          arrTo.push(metaClass);
        }
      }
    }
  });

  return to;
};

declare module '../fw/metadata-framework/types' {
  interface MetaClassRegisterHelpers {
    /**
     * Registers the value as any array.
     * If array does not exists will create one and push the value into it.
     *
     * Handles both single and property style registration.
     */
    array<TMetaArgs, TMetaClass>(
      this: MetaClassMetadata<TMetaArgs, TMetaClass>,
      meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass>
    ): void;
  }

  interface MetaClassExtendHelpers {
    /**
     * Extend the type by merging the map from the source (from) onto the map of destination (to).
     * In case properties exist on both, will override from destination.
     * If destination does not exist, it's a shallow copy of the map.
     */
    mergeMap<T>(
      from: Map<TdmPropertyKey, T>,
      to: Map<TdmPropertyKey, T> | undefined
    ): Map<TdmPropertyKey, T>;

    mergeMapArray<T extends BaseMetadata>(
      from: Map<TdmPropertyKey, T[]>,
      to: Map<TdmPropertyKey, T[]> | undefined
    ): Map<TdmPropertyKey, T[]>;
  }
}

import {
  MapExt,
  MetaClassInstanceDetails,
  MetaClassMetadata,
  isFunction,
  setMetaHelper,
  stringify,
  targetStore
} from '@tdm/core/tdm';

import { ActionMetadataArgs, ActionMetadata } from './meta-types';

function register(
  this: MetaClassMetadata<ActionMetadataArgs, ActionMetadata>,
  meta: MetaClassInstanceDetails<ActionMetadataArgs<any>, ActionMetadata>
): void {
  if (!this.target.adapterClass) {
    throw new Error(
      `Class ${stringify(
        this
      )} must implement a static property 'adapterClass' that points to the Adapter it uses`
    );
  } else if (!isFunction(this.target.adapterClass.prototype.execute)) {
    throw new Error(
      `Class ${stringify(this)} points to an invalid Adapter class`
    );
  }
  targetStore.setMetaFormFactory(meta);
  targetStore.getAdapter(this.target.adapterClass).addAction(meta);
}

function extend(
  from: Map<TdmPropertyKey, ActionMetadata>,
  to: Map<TdmPropertyKey, ActionMetadata> | undefined,
  meta
): Map<TdmPropertyKey, ActionMetadata> {
  MapExt.asValArray(from).forEach(v =>
    targetStore.getAdapter(this.adapterClass).addAction(v, meta.to)
  );

  return to
    ? // TODO: on mixins we override, on "extends" class we don't...
      // this overrides at all times (wrong behaviour for class extends)
      MapExt.mergeInto(to, from)
    : new Map<TdmPropertyKey, ActionMetadata>(from.entries());
}

setMetaHelper('register', 'actionMetadata', register);
setMetaHelper('extend', 'actionMetadata', extend);

declare module '@tdm/core/tdm/lib/fw/metadata-framework/types' {
  interface MetaClassRegisterHelpers {
    actionMetadata(
      this: MetaClassMetadata<ActionMetadataArgs, ActionMetadata>,
      meta: MetaClassInstanceDetails<ActionMetadataArgs<any>, ActionMetadata>
    ): void;
  }

  interface MetaClassExtendHelpers {
    actionMetadata(
      from: Map<TdmPropertyKey, ActionMetadata>,
      to: Map<TdmPropertyKey, ActionMetadata> | undefined,
      meta
    ): Map<TdmPropertyKey, ActionMetadata>;
  }
}

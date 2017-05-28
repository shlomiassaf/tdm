import { Constructor, isFunction } from '../fw/utils';
import { TransformDir } from '../fw/interfaces'
import { fireEvents } from '../fw/events';
import { TargetStore, TargetMetadata, PropMetadata, targetStore } from '../metadata';
import { ModelMetadata } from '../add/model';

declare module '@tdm/core/metadata/target-metadata' {
  interface TargetMetadata {
    /**
     * Returns the target's identity key without initiating a target build.
     * @param target
     * @param direction
     * @returns {any}
     */
    getIdentityKey(direction?: TransformDir): string | undefined;
  }
}

declare module '@tdm/core/metadata/target-store' {
  interface TargetStore {
    /**
     * Returns the target's identity key without initiating a target build.
     * @param target
     * @param direction
     * @returns {any}
     */
    getIdentityKey(target: Constructor<any>, direction?: TransformDir): string | undefined;

    /**
     * Returns metadata, if not built, builds it
     * @param target
     * @param register when true will also register if not exists
     * @returns {TargetMetadata}
     */
    getTargetMeta(target: Constructor<any>, register?: boolean): TargetMetadata | undefined;

    /**
     * Returns the target's name key without initiating a target build.
     * @param target
     * @returns {string}
     */
    getTargetName(target: Constructor<any>): string | undefined
  }
}

// set the name for name lookup
targetStore.on.processType( target => {
  const model = targetStore.getTargetMeta(target).model();
  if (model) {
    // TODO: make this type safe
    targetStore['namedTargets'].set(model.resName, target);
  }
});

TargetMetadata.prototype.getIdentityKey = function getIdentityKey(this: TargetMetadata,
                                                                  direction?: TransformDir): string | undefined {
  return targetStore.getIdentityKey(this.target, direction);
};

TargetStore.prototype.getTargetName = function getTargetName(this: TargetStore,
                                                             target: Constructor<any>): string | undefined {
  return targetStore.getMetaFor(target, ModelMetadata, true, 'resName');
};

TargetStore.prototype.getTargetMeta = function getTargetMeta(target: Constructor<any>, register?: true): TargetMetadata | undefined {
  let meta = this.builtTargets.get(target);
  if (!meta) {
    if (register === true) {
      this.registerTarget(target);
    }
    const metaArgs = this.targets.get(target);
    if (!metaArgs) {
      throw new Error('Target has no metadata');
    }
    meta = new TargetMetadata(target, metaArgs);
    this.builtTargets.set(target, meta);
    fireEvents('createMetadata', target);
  }
  return meta;
};

TargetStore.prototype.getIdentityKey = function getIdentityKey(this: TargetStore,
                                                               target: Constructor<any>, direction?: TransformDir): string | undefined {

  const meta = this.getTargetMeta(target);
  const model = meta.model();
  const identity = <any>model.identity;

  if (identity) {
      if (!direction) {
        return identity;
      }


      const propMeta = meta.getMetaFor(PropMetadata, identity);

      // apply naming strategy when DONT HAVE ALIAS!
      if (propMeta.name === propMeta.alias[direction]) {
        const transformNameStrategy = model.transformNameStrategy;

        if (transformNameStrategy && isFunction(transformNameStrategy[direction])) {

          // in exclusive mode there is no point in have 2 transformation strategies.
          // incoming is never there since incoming keys are not calculated, only defined Props.
          if (model.transformStrategy === 'exclusive') {
            direction = 'outgoing';
          }

          return transformNameStrategy[direction](propMeta.name);
        }
      }

      return direction === 'outgoing'
        ? propMeta.alias.outgoing
        : propMeta.alias.incoming
      ;
  }
};

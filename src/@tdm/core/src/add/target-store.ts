import { Constructor, isFunction } from '../fw/utils';
import { TransformDir } from '../fw/interfaces'
import { fireEvents } from '../fw/events';
import { TargetStore, ClassMetadata, TargetMetadata, PropMetadata, targetStore } from '../metadata';

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
     * @returns {TargetMetadata}
     */
    getTargetMeta(target: Constructor<any>): TargetMetadata | undefined;
  }
}

TargetMetadata.prototype.getIdentityKey = function getIdentityKey(direction?: TransformDir): string | undefined {
  return targetStore.getIdentityKey(this.target, direction);
};

TargetStore.prototype.getTargetMeta = function getTargetMeta(target: Constructor<any>): TargetMetadata | undefined {
  let meta = this.builtTargets.get(target);
  if (!meta) {
    const metaArgs = this.targets.get(target);
    if (!metaArgs) {
      throw new Error('Target has no metadata');
    }
    meta = new TargetMetadata(target, metaArgs);
    this.builtTargets.set(target, meta);
    this.namedTargets.set(meta.resName, target);
    fireEvents('createMetadata', target);
  }
  return meta;
};

TargetStore.prototype.getIdentityKey = function getIdentityKey(target: Constructor<any>, direction?: TransformDir): string | undefined {
  if (this.hasTarget(target)) {
    const dkm = this.targets.get(target);
    const classMetadata: Map<keyof ClassMetadata, any> = dkm.get(ClassMetadata);

    if (!classMetadata) {
      return;
    }

    const identity = classMetadata.get('identity');

    if (identity) {
      if (!direction) {
        return identity;
      }

      const propMeta = dkm.get(PropMetadata, identity);

      // apply naming strategy when DONT HAVE ALIAS!
      if (propMeta.name === propMeta.alias[direction]) {
        const transformNameStrategy = classMetadata.get('transformNameStrategy');

        if (transformNameStrategy && isFunction(transformNameStrategy[direction])) {

          // in exclusive mode there is no point in have 2 transformation strategies.
          // incoming is never there since incoming keys are not calculated, only defined Props.
          if (classMetadata.get('transformStrategy') === 'exclusive') {
            direction = 'outgoing';
          }

          return transformNameStrategy[direction](propMeta.name);
        }
      }

      return direction === 'outgoing' && dkm.has(PropMetadata, identity)
        ? dkm.get(PropMetadata, identity).alias.outgoing
        : dkm.get(PropMetadata, identity).alias.incoming
      ;
    }
  }
};

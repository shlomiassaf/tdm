import { Constructor } from '../fw/utils';
import { TransformDir } from '../fw/interfaces'
import { fireEvents } from '../fw/events';
import { TargetStore, ClassMetadata, TargetMetadata, PropMetadata } from '../metadata';


declare module '@tdm/transformation/metadata/target-store' {
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

TargetStore.prototype.getTargetMeta = function getTargetMeta(target: Constructor<any>): TargetMetadata | undefined {
  let meta = this.builtTargets.get(target);
  if (!meta) {
    const metaArgs = this.targets.get(target);
    if (!metaArgs) {
      throw new Error('Target has no metadata');
    }
    meta = new TargetMetadata(target, metaArgs);
    this.builtTargets.set(target, meta);
    this.namedTargets.set(meta.name, target);
    fireEvents('onCreateMetadata', target);
  }
  return meta;
};

TargetStore.prototype.getIdentityKey = function getIdentityKey(target: Constructor<any>, direction?: TransformDir): string | undefined {
  if (this.builtTargets.has(target)) {
    return this.builtTargets.get(target).getIdentityKey(direction);
  } else if (this.hasTarget(target)) {
    const dkm = this.targets.get(target);
    const identity = dkm.get(ClassMetadata, 'identity');
    if (identity) {
      if (!direction) {
        return identity;
      }
      return direction === 'outgoing' && dkm.has(PropMetadata, identity)
        ? dkm.get(PropMetadata, identity).alias.outgoing
        : dkm.get(PropMetadata, identity).alias.incoming
        ;
    }
  }
};

export interface MetadataStatic<T, Z> {
  new(def: T, ...args: any[]): Z;

  DEFAULTS: T;
  VALIDATE(obj: T): void;
}

export interface Metadata<T> extends Function { new (...args: any[]): T; }

export function metadataFactory<T extends MetadataStatic<any, any>, Z>(type: T & Metadata<Z>, config: any, ...args: any[]): Z {
  const cfg = {};
  type.VALIDATE(Object.assign(cfg, type.DEFAULTS, config));
  return new type(cfg, ...args);
}

export { MemberDecoratorMetadata, DecoratorInfo, decoratorInfo } from './core';
export { ResourceMetadata, ResourceMetadataArgs, GlobalResourceMetadata, GlobalResourceMetadataArgs } from './resource';
export { ActionMetadata, ActionMetadataArgs, ActionMethodType } from './action';
export { AdapterMetadata, AdapterMetadataArgs } from './adapter';
export { BelongsToMetadata, BelongsToMetadataArgs, OwnsMetadata, OwnsMetadataArgs, Relationship, RelationshipType } from './relations';
export { PropMetadata, PropMetadataArgs } from './prop';
export { ExcludeMetadata, ExcludeMetadataArgs } from './exclude';
export { HookMetadata, HookMetadataArgs } from './hook';
export * from './schema';

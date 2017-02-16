import * as _decoratorFactories from './decorator-factories';

export {
  DecoratorInfo,
  MemberDecoratorMetadata,
  MetadataStatic,
  metadataFactory,
  ResourceMetadata,
  ResourceMetadataArgs,
  ActionMetadata,
  ActionMetadataArgs,
  ActionMethodType,
  AdapterMetadata,
  AdapterMetadataArgs,
  PropMetadata,
  ValidationContext,
  Validator,
  ValidationError,
  ValidationSchedule,
  GlobalResourceMetadata,
  GlobalResourceMetadataArgs
} from './meta-types';

export { TargetAdapterMetadataStore } from './reflection';

export { targetStore } from './target-store';

export * from './decorators';
export const decoratorFactories = _decoratorFactories;


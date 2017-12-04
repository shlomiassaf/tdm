import {
  TargetMetadata,
  DecoratorInfo,
  PropMetadata,
  isString
} from '@tdm/core/tdm';
import { Prop } from '../decorators';

declare module '@tdm/core/tdm/src/metadata/target-metadata' {
  interface TargetMetadata<T, Z> {
    getCreateProp(info: DecoratorInfo | string): PropMetadata;
  }
}

TargetMetadata.prototype.getCreateProp = function getCreateProp(info: DecoratorInfo | string): PropMetadata {
  const name = isString(info) ? info : info.name;

  if (!this.config.has(PropMetadata, name)) {
    Prop()(this.target.prototype, name);
  }

  return this.config.get(PropMetadata, name);
};

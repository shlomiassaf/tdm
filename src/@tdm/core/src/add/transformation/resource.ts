import { TargetStore, targetStore, MapperFactory } from '@tdm/transformation';
import { ResourceMetadataArgs } from '../../metadata';
import { DeserializerFactory } from '../../core/interfaces';

/**
 * @classDecorator
 * @param metaArgs
 */
export function Resource(metaArgs: ResourceMetadataArgs) {
  return target => {
    targetStore.setResource(metaArgs, target);
  };
}

declare module '@tdm/transformation/metadata/target-store' {
  interface TargetStore {
    setResource(def: ResourceMetadataArgs, target: Function): void;
  }
}

TargetStore.prototype.setTransformable = <any>function(): void {
  throw new Error('@Transformable is not supported, use adapter specific decorators or @Resource')
};

TargetStore.prototype.setResource = function(metaArgs: ResourceMetadataArgs, target: Function): void {
  Object.keys(metaArgs)
    .forEach( key => this.setClassProp(target, key, metaArgs[key]) );
};

declare module '@tdm/transformation/metadata/target-metadata' {
  interface TargetMetadata {
    endpoint: string;

    deserializer?: DeserializerFactory;

    /**
     * If true will not build the decorated class into a resource.
     * @optional
     * @default false
     */
    noBuild?: boolean;

    mapper?: MapperFactory;
  }
}

declare module '@tdm/transformation/metadata/class-metadata' {
  interface ClassMetadata {
    endpoint: string;

    deserializer?: DeserializerFactory;

    /**
     * If true will not build the decorated class into a resource.
     * @optional
     * @default false
     */
    noBuild?: boolean;

    mapper?: MapperFactory;
  }
}

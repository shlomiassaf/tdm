import { TargetStore, MapperFactory } from '@tdm/core';
import { ResourceMetadataArgs } from '../metadata';

declare module '@tdm/core/metadata/target-store' {
  interface TargetStore {
    setResource(metaArgs: ResourceMetadataArgs, target: Function): void;
  }
}

TargetStore.prototype.setResource = function(metaArgs: ResourceMetadataArgs, target: Function): void {
  this.setModel(metaArgs, target);

  if (metaArgs) {
    ['name', 'noBuild', 'mapper']
      .forEach( k => metaArgs.hasOwnProperty(k) && this.setClassProp(target, k, metaArgs[k]) );
  }
};

declare module '@tdm/core/metadata/target-metadata' {
  interface TargetMetadata {
    endpoint: string;

    /**
     * If true will not build the decorated class into a resource.
     * @optional
     * @default false
     */
    noBuild?: boolean;

    mapper?: MapperFactory;
  }
}

declare module '@tdm/core/metadata/class-metadata' {
  interface ClassMetadata {
    endpoint: string;

    /**
     * If true will not build the decorated class into a resource.
     * @optional
     * @default false
     */
    noBuild?: boolean;

    mapper?: MapperFactory;
  }
}

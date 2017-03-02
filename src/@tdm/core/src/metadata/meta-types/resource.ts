import { TransformableMetadataArgs, MapperFactory } from '@tdm/transformation';

import { DeserializerFactory } from '../../core/interfaces';

export interface ResourceMetadataArgs extends TransformableMetadataArgs {
  /**
   * A name for the resource.
   * Depending on your setup, this property might be used to identify resource from deserialized data. (e.g. JSONAPI)
   * If not set, the default name is the class name (which does not guarantee uniqueness)
   * @optional
   */
  name?: string;

  deserializer?: DeserializerFactory;

  /**
   * If true will not build the decorated class into a resource.
   * @optional
   * @default false
   */
  noBuild?: boolean;

  mapper?: MapperFactory;
}

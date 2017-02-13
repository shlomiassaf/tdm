import { DeserializerFactory } from '../../core';
import { TransformStrategy } from './schema/interfaces';
import { NamingStrategyConfig } from '../../core/interfaces';

export interface ResourceMetadataArgs {
  endpoint: string;

  /**
   * Property name used as identity column
   */
  identity: string;

  deserializer?: DeserializerFactory;

  /**
   * @link DefaultConfig#transformStrategy
   */
  transformStrategy?: TransformStrategy;

  /**
   * @link DefaultConfig#transformNameStrategy
   */
  transformNameStrategy?: NamingStrategyConfig | undefined;

  /**
   * If true will not build the decorated class into a resource.
   * @optional
   * @default false
   */
  noBuild?: boolean;
}

export interface ResourceMetadata {
  endpoint: string;

  /**
   * Property name used as identity column
   */
  identity: string;

  deserializer?: DeserializerFactory;

  /**
   * @link DefaultConfig#transformStrategy
   */
  transformStrategy?: TransformStrategy;

  /**
   * @link DefaultConfig#transformNameStrategy
   */
  transformNameStrategy?: NamingStrategyConfig | undefined;

  noBuild: boolean;
}


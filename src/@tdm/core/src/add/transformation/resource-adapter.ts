import { decoratorFactory } from '@tdm/transformation';
import { AdapterMetadata, AdapterMetadataArgs } from '../../metadata';


/**
 * @classDecorator
 * @param def
 */
export function ResourceAdapter(def: AdapterMetadataArgs): (target) => any {
  return resourceAdapter(def) as any;
}

// FOR AOT
const resourceAdapter = decoratorFactory<AdapterMetadataArgs>(AdapterMetadata, 'class');

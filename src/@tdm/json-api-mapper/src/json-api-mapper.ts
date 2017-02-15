import {
  MapperFactory,
  DeserializeMapper,
  SerializeMapper,
  PropertyContainer,
  PoClassPropertyMap,
  transformValueOut,
  PropMetadata
} from '@tdm/core';

import { TopLevel } from './json-api';
import * as japiUtils from './json-api-utils';

/**
 * A mapper that has no mapping effect.
 * Maps every property on the source to the same property on the target.
 *
 */
export class JSONAPIDeserializeMapper extends DeserializeMapper {
  private keys: { att: string[], rel: string[] };

  constructor(public source: TopLevel) {
    super(source);

    this.keys = japiUtils.getDocumentKeys(this.source);
  }


  getKeys(): string[] {
    return this.keys.att.concat(this.keys.rel);
  }

  getValue(key: string, prop?: PropMetadata): any {
    let inAtt: boolean;

    if (!prop) {
      inAtt = this.source.attributes.hasOwnProperty(key);
      if (!inAtt) {
        inAtt = this.source.relationships.hasOwnProperty(key);
      }
      if (!inAtt) {
        inAtt = undefined;
      }
    } else if (prop.rel) {
      inAtt = this.source.relationships.hasOwnProperty(key);
      if (!inAtt) {
        inAtt = undefined;
      }
    } else {
      inAtt = this.source.attributes.hasOwnProperty(key);
      if (!inAtt) {
        inAtt = undefined;
      }
    }

    if (inAtt) {
      return this.source.attributes[key];
    } else if (inAtt === false) {
      // relationship
      // search included, if found return serialized.
      // if not in included, serialize only with id (need to set based on identity)

      // Make sure to return array, if this is the case...

      // this requires a refactor, the TargetStore should allow serializing/deserializing based on Target
      // this must happen within the deserializer since JSONAPI detailed implementation is not known
      // to the invoker. (i.e.: { type: 'Person', id: 5 } is JSONAPI specific schema)
    }
  }
}

export class JSONAPISerializeMapper extends SerializeMapper {
  serialize(container: PropertyContainer): any {
    const target: any = {};

    const cb = (prop: PoClassPropertyMap) => target[prop.obj] = transformValueOut(this.source[prop.cls], prop.prop);

    container.forEach(Object.keys(this.source), cb);

    return target;
  }
}

export const jsonAPIMapper: MapperFactory = {
  serializer(source: any): JSONAPISerializeMapper {
    return new JSONAPISerializeMapper(source);
  },
  deserializer(source: any): JSONAPIDeserializeMapper {
    return new JSONAPIDeserializeMapper(source);
  }
};

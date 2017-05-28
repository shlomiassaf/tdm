import { Tixin } from '@tdm/tixin';
import { tdm, Constructor } from '../../index';
import { SerializeMapper, DeserializeMapper, TransformationError } from '../../mapping';
import { TargetTransformer } from '../../mapping/target-transformer';
import { isFunction, array } from '../../fw';

class PlainObject {}

declare module '@tdm/core/metadata/target-store' {
  interface TargetStore {
    serialize(target: Constructor<any>, mapper: SerializeMapper): any;

    /**
     * Deserialize a known target.
     * @param mapper
     * @param instance Optional, if not set a new instance of the type will be created.
     */
    deserialize(mapper: DeserializeMapper, instance?: any): any | any[] | undefined;

    /**
     * Plain deserializer, deserialize with no metadata.
     * @param mapper
     * @param instance Optional, if not set a new instance of will be created.
     */
    deserializePlain(mapper: DeserializeMapper, instance?: any): any;
  }
}

tdm.TargetStore.prototype.serialize = function serialize(target: Constructor<any>, mapper: SerializeMapper): any {
  const meta = this.getTargetMeta(target);
  if (meta) {
    return meta.serialize(mapper);
  }
};

/**
 * Deserialize and instance of "DeserializeMapper" into an instance of tge target supplied
 * @param target
 * @param mapper
 * @returns {any}
 */
tdm.TargetStore.prototype.deserialize = function deserialize(mapper: DeserializeMapper, instance?: any): any | any[] | undefined {
  if (this.hasTarget(mapper.sourceType)) {
    const meta = this.getTargetMeta(mapper.sourceType);
    const result: any = instance || meta.model().factory(mapper.isCollection);

    meta.deserialize(mapper, result);
    return result;
  } else {
    return this.deserializePlain(mapper, instance);
  }
};

/**
 * Deserialize and instance of "DeserializeMapper" into a plain object (object literal)
 * @param mapper
 * @param instance Optional, if not set a new instance of will be created.
 */
tdm.TargetStore.prototype.deserializePlain = function deserializePlain(mapper: DeserializeMapper, instance?: any): any {
  const meta = this.getTargetMeta(PlainObject);
  const result: any = instance || mapper.isCollection ? [] : {};
  meta.deserialize(mapper, result, true);
  return result;
};

// TODO: base on onInit event
tdm.targetStore.registerTarget(PlainObject);


class MappingTargetMetadata extends tdm.TargetMetadata {
  @tdm.LazyInit(function (this: tdm.TargetMetadata): TargetTransformer {
    return new TargetTransformer(this);
  })
  transformer: TargetTransformer;

  serialize(mapper: SerializeMapper): any {
    return this.transformer.serialize(mapper);
  }

  deserialize(mapper: DeserializeMapper, target: any | any[], plain: boolean = false): void {
    if (mapper.isCollection) {

      if (!Array.isArray(target)) {
        throw TransformationError.coll_obj(true);
      }

      const refItems = target.splice(0, target.length);
      const identKey = tdm.targetStore.getIdentityKey(this.target, 'incoming');

      while (mapper.next()) {
        let t: any;

        // compare current item to map with a list of items that if we, if we got.
        // if match use that instance.
        // TODO: Move compare to the global store, so logic can change without bugs.
        if (refItems.length > 0 && isFunction(mapper.getIdentity)) {
          const incomingIdent = mapper.getIdentity();
          t = array.findRemove(refItems, (item) => item[identKey] === incomingIdent);
        }

        if (!t) {
          t = plain ? {} : this.model().factory(false);
        }

        this.transformer.deserialize(mapper, t);
        target.push(t);
      }
    } else {

      if (Array.isArray(target)) {
        throw TransformationError.coll_obj(false);
      }

      this.transformer.deserialize(mapper, target);
    }
  }
}

declare module '@tdm/core/metadata/target-metadata' {
  interface TargetMetadata {
    transformer: TargetTransformer;
    serialize(mapper: SerializeMapper): any;
    deserialize(mapper: DeserializeMapper, target: any | any[], plain?: boolean): void;
  }
}

Tixin(tdm.TargetMetadata, MappingTargetMetadata);

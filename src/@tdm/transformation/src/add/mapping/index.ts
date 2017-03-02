import { Tixin } from '@tdm/tixin';
import { LazyInit, Constructor, TargetStore, TargetMetadata, targetStore } from '../../index';
import { SerializeMapper, DeserializeMapper, TransformationError } from '../../mapping';
import { TargetTransformer } from '../../mapping/target-transformer';

class PlainObject {}

declare module '@tdm/transformation/metadata/target-store' {
  interface TargetStore {
    serialize(target: Constructor<any>, mapper: SerializeMapper): any;

    deserialize(mapper: DeserializeMapper): any | any[] | undefined;

    deserializePlain(mapper: DeserializeMapper): any;
  }
}

TargetStore.prototype.serialize = function serialize(target: Constructor<any>, mapper: SerializeMapper): any {
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
TargetStore.prototype.deserialize = function deserialize(mapper: DeserializeMapper): any | any[] | undefined {
  if (this.hasTarget(mapper.sourceType)) {
    const meta = this.getTargetMeta(mapper.sourceType);
    const result: any = meta.factory(mapper.isCollection);
    meta.deserialize(mapper, result);
    return result;
  } else {
    return this.deserializePlain(mapper);
  }
};

/**
 * Deserialize and instance of "DeserializeMapper" into a plain object (object literal)
 * @param mapper
 */
TargetStore.prototype.deserializePlain = function deserializePlain(mapper: DeserializeMapper): any {
  const meta = this.getTargetMeta(PlainObject);
  const result: any = mapper.isCollection ? [] : {};
  meta.deserialize(mapper, result, true);
  return result;
};

// TODO: base on onInit event
targetStore.registerTarget(PlainObject);


class MappingTargetMetadata extends TargetMetadata {
  @LazyInit(function (this: TargetMetadata): TargetTransformer {
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

      while (mapper.next()) {
        const t: any = plain ? {} : this.factory(false);
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

declare module '@tdm/transformation/metadata/target-metadata' {
  interface TargetMetadata {
    transformer: TargetTransformer;
    serialize(mapper: SerializeMapper): any;
    deserialize(mapper: DeserializeMapper, target: any | any[], plain?: boolean): void;
  }
}

Tixin(TargetMetadata, MappingTargetMetadata);

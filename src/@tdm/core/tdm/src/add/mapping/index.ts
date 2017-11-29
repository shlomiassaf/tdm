import { Tixin } from '@tdm/tixin';
import { TargetMetadata } from '../../metadata/target-metadata';
import { TargetStore, targetStore } from '../../metadata/target-store';
import { Model } from '../model';
import { SerializeMapper, DeserializeMapper, TransformationError } from '../../mapping';
import { TargetTransformer } from '../../mapping/target-transformer';
import { Constructor, isFunction, array, LazyInit } from '../../fw';

declare module '@tdm/core/tdm/src/metadata/target-store' {
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

declare module '@tdm/core/tdm/src/metadata/target-metadata' {
  interface TargetMetadata<T = any, Z = any> {
    transformer: TargetTransformer<T, Z>;
    serialize(mapper: SerializeMapper): any;
    deserialize(mapper: DeserializeMapper, target: any | any[], plain?: boolean): void;
  }
}


export function initMapping(): void {
  @Model({ resName: 'InternalPlainObject' })
  class PlainObject {}

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
   * @returns
   */
  TargetStore.prototype.deserialize = function deserialize(mapper: DeserializeMapper, instance?: any): any | any[] | undefined {
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
  TargetStore.prototype.deserializePlain = function deserializePlain(mapper: DeserializeMapper, instance?: any): any {
    const meta = this.getTargetMeta(PlainObject);
    const result: any = instance || mapper.isCollection ? [] : {};
    meta.deserialize(mapper, result, true);
    return result;
  };

  class MappingTargetMetadata<T, Z> extends TargetMetadata<T, Z> {
    @LazyInit(function (this: TargetMetadata<T, Z>): TargetTransformer<T, Z> {
      return new TargetTransformer<T, Z>(this);
    })    transformer: TargetTransformer<T, Z>;

    serialize(mapper: SerializeMapper): any {
      return this.transformer.serialize(mapper);
    }

    deserialize(mapper: DeserializeMapper, target: any | any[], plain: boolean = false): void {
      if (mapper.isCollection) {

        if (!Array.isArray(target)) {
          throw TransformationError.coll_obj(true);
        }

        const refItems = target.splice(0, target.length);
        const identKey = targetStore.getIdentityKey(this.target, 'incoming');

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



  Tixin(TargetMetadata, MappingTargetMetadata);
}

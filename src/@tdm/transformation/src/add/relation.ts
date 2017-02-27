import { targetStoreSetter, registerEvent, TargetStoreEvents, Constructor } from '../fw';
import { targetStore, TargetStore, PropMetadata, RelationMetadata, RelationMetadataArgs } from '../metadata';
import { TargetMetadata } from '../metadata/target-metadata';



class Temp extends TargetMetadata {
  /**
   * Returns a PropMetadata from a `DecoratorInfo` object.
   * If one does not exists, creates it based on the `DecoratorInfo`
   * @param info
   * @returns {undefined|any}
   */
  static getCreateProp(meta: Temp, key: PropertyKey): PropMetadata {
    return meta.config.get(PropMetadata, key) || targetStore.addProp(undefined, meta.target.prototype, key);
  }


  static onCreateMetadata(target: Constructor<any>) {
    const meta: Temp = targetStore.getTargetMeta(target);

    const relations: Map<PropertyKey, RelationMetadata> = <any>meta.config.get(RelationMetadata);
    if (relations) {
      Array.from(relations.entries())
        .forEach( ([propKey, relation]) => {
          // Its possible to set @Relation() without @Prop(), so make sure to create one if not set by the user.
          const prop = Temp.getCreateProp(meta, relation.name);
          prop.setRelationship(relation);

          // if the fk is a different key, attach a reference to the foreign key PropMetadata (and create one if not there)
          if (relation.name !== relation.foreignKey) {
            Temp.getCreateProp(meta, relation.foreignKey).foreignKeyOf = prop;
          }
        });
    }
  }
}

registerEvent(TargetStoreEvents.onCreateMetadata, RelationMetadata, Temp.onCreateMetadata);

/**
 * @propertyDecorator instance
 * @param def
 */
export function Relation(def?: RelationMetadataArgs): Function {
  return (...args: any[]) => {
    targetStore.addRelation(def, ...args);
  };
}

TargetStore.prototype.addRelation = targetStoreSetter<RelationMetadata, RelationMetadataArgs>(RelationMetadata);

declare module '../metadata/target-store' {
  interface TargetStore {
    addRelation(def: RelationMetadataArgs, ...args: any[]): RelationMetadata;
    addRelation(def: RelationMetadataArgs, tProto: Object, key: PropertyKey, desc: PropertyDescriptor): RelationMetadata;
  }
}

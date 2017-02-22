import { PropMetadata } from '../metadata/meta-types';
import { TransformDir, TransformStrategy } from '../metadata/meta-types/schema/interfaces';
import { internalMetadataStore } from '../metadata/reflection/internal-metadata-store';
import { array, isFunction, MapExt } from '../utils';
import { LazyInit } from '../utils/decorators';
import { NamingStrategyConfig } from './interfaces';

import { SerializeMapper, DeserializeMapper, CompiledTransformation, PoClassPropertyMap, PropertyContainer, ExclusivePropertyContainer, InclusivePropertyContainer, transformValueIn } from '../mapping';



/**
 * Returns an array of 2 property names, first is the name of the transformed output
 * second is the name of the property name to transform.
 * Used for applying NamingStrategyConfig based on the TransformDir
 * @param dir
 * @param transformNameStrategy
 * @returns {[string,string]|[string,string]}
 */
export function namingStrategyMap(dir: TransformDir, transformNameStrategy: NamingStrategyConfig): string[] | undefined {
  return transformNameStrategy && isFunction(transformNameStrategy[dir])
      ? dir === 'incoming' ? ['cls', 'obj'] : ['obj', 'cls']
      : undefined
    ;
}

/**
 * @internal
 */
export function getInstructions(targetType: any, dir: TransformDir, transformNameStrategy: NamingStrategyConfig): CompiledTransformation {
  // all excluded instructions for this type
  // this array will be filtered to hold only @Exclude without @Prop
  const excluded = internalMetadataStore.getTargetStore(targetType).getExcludes()
    .filter( e => !e.from || e.from === dir );

  const naming: string[] = namingStrategyMap(dir, transformNameStrategy);

  const fkMap = new Map<PropMetadata, PoClassPropertyMap[]>();

  // TODO: move to for loop
  const instructions = internalMetadataStore.getTargetStore(targetType).getProps()
    .map( prop => {
      const obj = {
        cls: prop.name,
        obj: prop.alias[dir],
        exclude: array.findRemove(excluded, e => e.name === prop.name),
        prop
      };

      // apply naming strategy when DONT HAVE ALIAS!
      if (!obj.exclude && naming && obj.cls === obj.obj) {
        obj[naming[0]] = transformNameStrategy[dir](obj[naming[1]]);
      }

      // store the PoClassPropertyMap of a belongsTo PropMetadata relation
      // and the PoClassPropertyMap of all foreign key PropMetadata.
      // These arr actually matching pairs of a belongTo relation and it's fk (not all belongsTo has fk, only different property name is a fk)
      // At the end, go through the stored PropMetadata's and see if matching pairs found (2 values in array)
      // for all of them, swap the prop names so:
      // belongsTo PoClassPropertyMap will output (deserialize) to the original fk property name
      // foreignKey PoClassPropertyMap wil input (serialize) to the belongsTo property name
      // this swap make the deserialize/serialize process transparent to fk mismatch defined on the model.
      // De/Serialize implementations are only responsible to return the right object (e.g. detect when a key is incoming, return obj instead)
      if (prop.rel === 'belongsTo') {
        const arr = fkMap.get(prop) || [];
        arr[0] = obj;
        fkMap.set(prop, arr);
      } else if (prop.foreignKeyOf) {
        const arr = fkMap.get(prop.foreignKeyOf) || [];
        arr[1] = obj;
        fkMap.set(prop.foreignKeyOf, arr);
      }

      return obj;
    });

  MapExt.asKeyValArray(fkMap).forEach(([k, v]) => {
    if (v.length === 2) {
      // this is a swap
      v[0].obj = v[1].cls as any;
      v[1].cls = k.name as any; // v[0].cls === k.name
    }
  });

  return { excluded, instructions };
}

function serializePredicate(p: PoClassPropertyMap) { return p.cls === this; }
function deserializePredicate(p: PoClassPropertyMap) { return p.obj === this; }

export class TargetTransformer {

  @LazyInit(function (this: TargetTransformer): PoClassPropertyMap | undefined {
    const idKey = internalMetadataStore.getTargetStore(this.targetType).getIdentity();
    if (idKey) {
      return (this.hasOwnProperty('incoming') ? this.incoming : this.outgoing)
        .instructions.find( p => p.prop.name === idKey);
    }
  })
  protected identity: PoClassPropertyMap | undefined;

  @LazyInit(function (this: TargetTransformer): CompiledTransformation {
    return getInstructions(this.targetType, 'incoming', this.transformNameStrategy);
  })
  protected incoming: CompiledTransformation;


  @LazyInit(function (this: TargetTransformer): CompiledTransformation {
    return getInstructions(this.targetType, 'outgoing', this.transformNameStrategy);
  })
  protected outgoing: CompiledTransformation;

  @LazyInit(function (this: TargetTransformer): PropertyContainer {
    if (this.strategy === 'inclusive') {
      const rename = namingStrategyMap('incoming', this.transformNameStrategy)
          ? (prop) =>  prop.cls = this.transformNameStrategy.incoming(prop.obj)
          : undefined
        ;
      return new InclusivePropertyContainer(this.targetType, this.incoming, deserializePredicate, rename);
    } else {
      return new ExclusivePropertyContainer(this.targetType, this.incoming);
    }
  })
  protected incomingContainer: PropertyContainer;

  @LazyInit(function (this: TargetTransformer): PropertyContainer {
    if (this.strategy === 'inclusive') {
      const rename = namingStrategyMap('outgoing', this.transformNameStrategy)
          ? (prop) =>  prop.obj = this.transformNameStrategy.outgoing(prop.cls)
          : undefined
        ;
      return new InclusivePropertyContainer(this.targetType, this.outgoing, serializePredicate, rename);
    } else {
      return new ExclusivePropertyContainer(this.targetType, this.outgoing);
    }
  })
  protected outgoingContainer: PropertyContainer;

  constructor(protected targetType: any, protected transformNameStrategy: NamingStrategyConfig, protected strategy: TransformStrategy) {
  }

  serialize(mapper: SerializeMapper): any {
    return mapper.serialize(this.outgoingContainer);
  }

  /**
   * Deserialize a single target.
   * Does not support collection deserialization, if mapper is a collection will throw.
   * @param mapper
   * @param target
   **/
  deserialize(mapper: DeserializeMapper, target: any): void {
    const cb = (prop: PoClassPropertyMap) => {
      const propMeta = (prop.prop && prop.prop.foreignKeyOf) || prop.prop;
      target[prop.cls] = transformValueIn(mapper.getValue(prop.obj, propMeta), propMeta);
    };

    if (isFunction(mapper.setRef)) {
      mapper.setRef(target);
    }

    this.incomingContainer.forEach(mapper.getKeys(), cb);

    if (isFunction(mapper.getIdentity)) {
      if (this.identity) {
        target[this.identity.cls] = transformValueIn(mapper.getIdentity(), this.identity.prop);
      }
    }
  }
}

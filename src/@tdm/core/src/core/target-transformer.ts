import { TransformDir, TransformStrategy } from '../metadata/meta-types/schema/interfaces';
import { internalMetadataStore } from '../metadata/reflection';
import { array, isFunction } from '../utils';
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
function namingStrategyMap(dir: TransformDir, transformNameStrategy: NamingStrategyConfig): string[] | undefined {
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

      return obj;
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
  private identity: PoClassPropertyMap | undefined;

  @LazyInit(function (this: TargetTransformer): CompiledTransformation {
    return getInstructions(this.targetType, 'incoming', this.transformNameStrategy);
  })
  private incoming: CompiledTransformation;


  @LazyInit(function (this: TargetTransformer): CompiledTransformation {
    return getInstructions(this.targetType, 'outgoing', this.transformNameStrategy);
  })
  private outgoing: CompiledTransformation;

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
  private incomingContainer: PropertyContainer;

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
  private outgoingContainer: PropertyContainer;

  constructor(private targetType: any, private transformNameStrategy: NamingStrategyConfig, private strategy: TransformStrategy) {
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
    const cb = (prop: PoClassPropertyMap) => target[prop.cls] = transformValueIn(mapper.getValue(prop.obj, prop.prop), prop.prop);

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



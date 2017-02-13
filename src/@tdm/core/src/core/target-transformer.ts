import { TransformDir, TransformStrategy } from '../metadata/meta-types/schema/interfaces';
import { internalMetadataStore } from '../metadata/reflection';
import { ActionMetadata, ExcludeMetadata, PropMetadata } from '../metadata/meta-types';
import { array, isFunction } from '../utils';
import { LazyInit } from '../utils/decorators';
import { NamingStrategyConfig } from './interfaces';

/**
 * Mappings between properties of a plain object to a class
 * @internal
 */
export interface PoClassPropertyMap {
  cls: string;
  obj: string;
  exclude?: ExcludeMetadata;
  prop?: PropMetadata
}

/**
 * @internal
 */
export interface CompiledTransformation {
  /**
   * Excluded members that are doesn't have a @Prop decorators.
   * All @Exclude instructions on members with @Prop instructions are add to the PoClassPropertyMap
   */
  excluded: ExcludeMetadata[];
  instructions: PoClassPropertyMap[];
}

/**
 * @internal
 */
export type TransformationTypeFactory = { [P in TransformDir]: CompiledTransformation }

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

export class TargetTransformer implements TransformationTypeFactory {
  /**
   * @internal
   */
  @LazyInit(function (this: TargetTransformer): CompiledTransformation {
    return getInstructions(this.targetType, 'incoming', this.transformNameStrategy);
  })
  incoming: CompiledTransformation;

  /**
   * @internal
   */
  @LazyInit(function (this: TargetTransformer): CompiledTransformation {
    return getInstructions(this.targetType, 'outgoing', this.transformNameStrategy);
  })
  outgoing: CompiledTransformation;


  constructor(private targetType: any, private transformNameStrategy: NamingStrategyConfig) {
  }

  transform(source: any, target: any, dir: TransformDir, strategy: TransformStrategy): void {

    const cb = dir === 'incoming'
      ? (prop: PoClassPropertyMap) => target[prop.cls] = this.transformValue(source[prop.obj], prop.prop, dir)
      : (prop: PoClassPropertyMap) => target[prop.obj] = this.transformValue(source[prop.cls], prop.prop, dir)
    ;

    this.forEach(source, dir, strategy, cb);
  }

  private transformValue(value: any, prop: PropMetadata, dir: TransformDir): any {
    if (prop) {
      if (prop.transform && prop.transform[dir]) {
        return prop.transform[dir](value);
      }
    }
    return value;
  }

  private forEach(source: any, dir: TransformDir, strategy: TransformStrategy, cb: (pMap: PoClassPropertyMap) => void): void {
    const compiled: CompiledTransformation = this[dir];

    if (strategy === 'inclusive') {
      const keys = Object.keys(source);
      const len = keys.length;

      const instructions = compiled.instructions.slice();
      const excluded = compiled.excluded.slice();

      const predicate = dir === 'incoming'
        ? function(p: PoClassPropertyMap) { return p.obj === this; }
        : function(p: PoClassPropertyMap) { return p.cls === this; }
      ;

      const naming: string[] = namingStrategyMap(dir, this.transformNameStrategy);

      const ePredicate = function(e: ExcludeMetadata) { return e.name === this; };

      for (let i = 0; i < len; i++) {
        let prop: PoClassPropertyMap = array.findRemove(instructions, predicate, keys[i])
          || { cls: keys[i] , obj: keys[i], exclude: array.findRemove(excluded, ePredicate, keys[i]) };

        if (!prop.exclude) {
          // we only transform names for ad-hoc properties. registered @Prop's are transformed
          // when the prop is compiled.
          if (!prop.prop && naming) {
            prop[naming[0]] = this.transformNameStrategy[dir](prop[naming[1]]);
          }
          cb(prop);
        }
      }
    } else {
      // No need to apply transformNameStrategy, it is cached in the instructions.
      for (let i = 0, len = compiled.instructions.length; i < len; i++) {
        !compiled.instructions[i].exclude && cb(compiled.instructions[i]);
      }
    }
  }

}



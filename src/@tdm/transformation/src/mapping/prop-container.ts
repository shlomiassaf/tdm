import { array } from '../fw';
import { ExcludeMetadata, PropMetadata } from '../metadata';

/**
 * Mappings between properties of a plain object to a class
 * @internal
 */
export interface PoClassPropertyMap {
  cls: PropertyKey;
  obj: string;
  exclude?: ExcludeMetadata;
  prop?: PropMetadata
}

export interface CompiledTransformation {
  /**
   * Excluded members that are doesn't have a @Prop decorators.
   * All @Exclude instructions on members with @Prop instructions are add to the PoClassPropertyMap
   */
  excluded: ExcludeMetadata[];
  instructions: PoClassPropertyMap[];
}

export function transformValueOut(value: any, prop: PropMetadata): any {
  if (prop && prop.transform && prop.transform.outgoing) {
    return prop.transform.outgoing(value);
  }
  return value;
}

export function transformValueIn(value: any, prop: PropMetadata): any {
  if (prop && prop.transform && prop.transform.incoming) {
    return prop.transform.incoming(value);
  }
  return value;
}

function excludedPredicate(e: ExcludeMetadata) { return e.name === this; }

export interface PropertyContainer {
  target: any;
  forEach(keys: string[], cb: (pMap: PoClassPropertyMap) => void): void;
}

export class InclusivePropertyContainer implements PropertyContainer {

  constructor(
    public target: any,
    private compiled: CompiledTransformation,
    private predicate: (p: PoClassPropertyMap) => boolean,
    private renamer: (po: PoClassPropertyMap) => string
  ){ }

  forEach(keys: string[], cb: (pMap: PoClassPropertyMap) => void): void {
    let len = keys.length;

    const instructions = this.compiled.instructions.slice();
    const excluded = this.compiled.excluded.slice();

    for (let i = 0; i < len; i++) {
      let prop: PoClassPropertyMap = array.findRemove(instructions, this.predicate, keys[i])
        || { cls: keys[i] , obj: keys[i], exclude: array.findRemove(excluded, excludedPredicate, keys[i]) };

      if (!prop.exclude) {
        // we only transform names for ad-hoc properties. registered @Prop's are transformed
        // when the prop is compiled.
        if (!prop.prop && this.renamer) {
          this.renamer(prop);
        }
        cb(prop);
      }
    }
  }
}


export class ExclusivePropertyContainer implements PropertyContainer {

  constructor(public target: any, private compiled: CompiledTransformation) { }

  forEach(keys: string[], cb: (pMap: PoClassPropertyMap) => void): void {
    const instructions = this.compiled.instructions;
    // No need to apply transformNameStrategy, it is cached in the instructions.
    for (let i = 0, len = instructions.length; i < len; i++) {
      !instructions[i].exclude && cb(instructions[i]);
    }
  }
}

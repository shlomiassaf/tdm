import { DecoratorInfo } from './metadata-framework';

export abstract class BaseMetadata {

  /**
   * The property name that the decorator wraps, if it wraps a property, member or constructor param.
   * @returns {PropertyKey}
   */
  readonly name: PropertyKey | undefined;

  constructor(public readonly decoratorInfo: DecoratorInfo) {
    this.name = decoratorInfo.name;
  }

}


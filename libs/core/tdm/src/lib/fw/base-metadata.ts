// tslint:disable:max-classes-per-file
import { DecoratorInfo } from './metadata-framework';
import { Constructor, reflection } from './utils';

export abstract class BaseMetadata {
  /**
   * The property name that the decorator wraps, if it wraps a property, member or constructor param.
   * @returns
   */
  readonly name: TdmPropertyKey | undefined;

  constructor(public readonly decoratorInfo: DecoratorInfo) {
    this.name = decoratorInfo.name;
  }
}

export abstract class BaseParamMetadata extends BaseMetadata {
  readonly paramType: Function | Constructor<any>;

  get paramIndex(): number {
    return this.decoratorInfo.paramIndex;
  }

  constructor(di: DecoratorInfo, target: Constructor<any>) {
    super(di);
    this.paramType = reflection.paramTypes(target.prototype, this.name)[
      di.paramIndex
    ];
  }
}

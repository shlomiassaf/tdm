import { MemberDecoratorMetadata, DecoratorInfo } from './core';

export interface BelongsToMetadataArgs {
  /**
   * The foreign key (property name) that points to the id of the resource belonged to.
   * If not set, the current property name is used.
   *
   * For example, on a Customer object, if the foreign key is customerId and you would like to use
   * the "customer" property, set the foreignKey to "customerId"
   */
  foreignKey?: string;
}

export interface OwnsMetadataArgs<T> {
  foreignKey: keyof T;
}

export class BelongsToMetadata extends MemberDecoratorMetadata {

  foreignKey: string;

  constructor(obj: BelongsToMetadataArgs, info: DecoratorInfo)  {
    super(info);

    this.foreignKey = obj.foreignKey || info.name as any;
  }

  static DEFAULTS: BelongsToMetadataArgs = {} as any;

  static VALIDATE(obj: BelongsToMetadataArgs): void {
  }
}


export class OwnsMetadata extends MemberDecoratorMetadata {
  foreignKey: string;

  constructor(obj: OwnsMetadataArgs<any>, info: DecoratorInfo)  {
    super(info);

    this.foreignKey = obj.foreignKey;
  }

  static DEFAULTS: OwnsMetadataArgs<any> = {} as any;

  static VALIDATE(obj: OwnsMetadataArgs<any>): void {
  }
}

export type Relationship = BelongsToMetadata | OwnsMetadata;
export type RelationshipType = 'belongsTo' | 'hasMany' | 'hasOne';

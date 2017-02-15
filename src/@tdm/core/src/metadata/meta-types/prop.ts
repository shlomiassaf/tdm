import {
  TransformFn,
  propAliasConfig,
  PropAliasConfig,
  propTransformConfig,
  PropTransformConfig,
  Validator
} from './schema';

import { isFunction } from '../../utils';

export interface PropMetadataArgs {
  alias?: string | Partial<PropAliasConfig>;
  transform?: TransformFn | Partial<PropTransformConfig>;

  validation?: Validator | Validator[];

  rel?: 'belongsTo' | 'hasMany' | 'hasOne';
}

export class PropMetadata {
  alias: PropAliasConfig;
  validation: Validator[];
  transform?: Partial<PropTransformConfig>;
  rel: 'belongsTo' | 'hasMany' | 'hasOne';


  constructor(obj: PropMetadataArgs, public type: any, public name: string) {
    // TODO: throw if name is not a string (can be symbol)
    this.alias = propAliasConfig(obj.alias || name);

    if (obj.transform) {
      this.transform = propTransformConfig(obj.transform);
    }

    this.validation = Array.isArray(obj.validation)
      ? obj.validation.slice()
      : obj.validation && isFunction(obj.validation.validate) ? [obj.validation] : []
    ;
  }


  static DEFAULTS: PropMetadataArgs = {} as any;

  static VALIDATE(obj: PropMetadataArgs): void {
  }
}


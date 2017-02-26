import {
  TransformDir,
  BaseMetadata,
  DecoratorInfo,
  MetaFactoryInstance,
  decoratorInfo
} from '../fw';

import { ClassMetadata } from './class-metadata';

export interface ExcludeMetadataArgs {
  /**
   * The type of transformation to exclude from, if not set excludes from all.
   * @optional
   * @default undefined (all)
   */
  from?: TransformDir;
}

export class ExcludeMetadata extends BaseMetadata {
  from?: TransformDir;

  constructor(obj: ExcludeMetadataArgs | undefined, info: DecoratorInfo) {
    super(info);

    if (obj) {
      this.from = obj.from;
    }

  }

  static metaFactory(metaArgs: ExcludeMetadataArgs, target: Object | Function, key: PropertyKey, desc: PropertyDescriptor): MetaFactoryInstance {
    const info = decoratorInfo(target, key, desc);

    if (info.isStatic) {
      return {
        info,
        metaClassKey: ClassMetadata,
        metaPropKey: 'transformStrategy',
        metaValue: 'exclusive'
      } as any
    } else {
      return {
        info,
        metaClassKey: ExcludeMetadata,
        metaPropKey: info.name,
        metaValue: new ExcludeMetadata(metaArgs, info)
      }
    }
  }
}

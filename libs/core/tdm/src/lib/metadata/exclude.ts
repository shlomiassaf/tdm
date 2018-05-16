import {
  TransformDir,
  BaseMetadata,
  DecoratorInfo,
  MetaClass,
  MetaClassMetadata,
  MetaClassInstanceDetails
} from '../fw';

import { targetStore } from './target-store';
import { PropMetadata } from './prop';

export interface ExcludeMetadataArgs {
  /**
   * The type of transformation to exclude from, if not set excludes from all.
   * @optional
   * @default undefined (all)
   */
  from?: TransformDir;
}

declare module './prop' {
  interface PropMetadataArgs {
    exclude?: true | ExcludeMetadataArgs;
  }
}

// exporting to satisfy angular AOT
export function factory(
  this: MetaClassMetadata<ExcludeMetadataArgs, ExcludeMetadata>,
  metaArgs: ExcludeMetadataArgs,
  target: Object | Function,
  info: DecoratorInfo
): MetaClassInstanceDetails<ExcludeMetadataArgs, ExcludeMetadata> | undefined {
  if (info.type === 'class') {
    targetStore.getTargetMeta(<any>target).model().transformStrategy =
      'exclusive';
  } else {
    return {
      info,
      target: <any>target.constructor,
      metaClassKey: ExcludeMetadata,
      metaPropKey: info.name,
      metaValue: new ExcludeMetadata(metaArgs, info)
    };
  }
}

@MetaClass<ExcludeMetadataArgs, ExcludeMetadata>({
  allowOn: ['class', 'member'],
  extend: 'mergeMap',
  proxy: {
    host: PropMetadata,
    containerKey: 'exclude'
  },
  factory
})
export class ExcludeMetadata extends BaseMetadata {
  from?: TransformDir;

  constructor(metaArgs: ExcludeMetadataArgs, info: DecoratorInfo) {
    super(info);

    if (metaArgs) {
      this.from = metaArgs.from;
    }
  }
}

// to make it easy on generics later
declare module '../fw/metadata-framework/meta-class' {
  namespace MetaClass {
    function get(
      target: typeof ExcludeMetadata
    ): MetaClassMetadata<ExcludeMetadataArgs, ExcludeMetadata>;
  }
}

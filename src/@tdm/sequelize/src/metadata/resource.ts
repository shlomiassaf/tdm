import * as seq from 'sequelize';
import { registerFactory, decoratorInfo, ClassMetadata, MetaFactoryInstance } from '@tdm/core';
import { ResourceMetadataArgs } from '@tdm/data';


import { BaseSeqConfig } from '../core/interfaces';

export interface SeqResourceMetadataArgs extends ResourceMetadataArgs, BaseSeqConfig {
  /**
   * The Sequelize instance to use
   * If not set, expects a default Sequelize instance to exist.
   */
  sequelize?: seq.Sequelize;
  seqOptions?: seq.DefineOptions<any>;
}

export class SeqResourceMetadata implements SeqResourceMetadataArgs {
  sequelize?: seq.Sequelize;
  seqOptions?: seq.DefineOptions<any>;

  constructor(obj: SeqResourceMetadataArgs) {
    Object.assign(this, obj);
  }

  static metaFactory(metaArgs: SeqResourceMetadataArgs, target: Function): MetaFactoryInstance<SeqResourceMetadata> {
    const info = decoratorInfo(target);
    return {
      info,
      target,
      metaClassKey: ClassMetadata,
      metaPropKey: 'seqResource',
      metaValue: new SeqResourceMetadata(metaArgs || {})
    } as any
  }

  static register = registerFactory<SeqResourceMetadata>();
}

declare module '@tdm/core/metadata/target-metadata' {
  interface TargetMetadata {
    seqResource: SeqResourceMetadata;
    seqModel: seq.Model<any, any>;
  }
}

declare module '@tdm/core/metadata/class-metadata' {
  interface ClassMetadata {
    seqResource: SeqResourceMetadata;
  }
}

import './ext';

export {
  SeqResourceMetadataArgs,
  SeqActionMetadataArgs
} from './metadata';

export {
  BaseSeqConfig,
  SeqActionOptions
} from './core';

export { SeqResource, SeqAction } from './decorators';

// TODO: solve this circular dependency hell
import './register';
import './bridge';

export { seqDefaultConfig, SeqDefaultConfig } from './seq-default-config';

export { ARMixin, ActiveRecordCollection, SeqActiveRecord, SeqActiveRecordStatic } from './active-record';

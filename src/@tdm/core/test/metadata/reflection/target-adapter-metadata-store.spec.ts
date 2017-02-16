import { MockMixin, MockResource, MockDeserializer, MockActionOptions, MockAdapter, bucketFactory } from '@tdm/core/testing';
import { ActiveRecord, Constructor, Prop } from '@tdm/core';
import { internalMetadataStore } from '../../src/metadata/reflection/internal-metadata-store';

describe('CORE', () => {
  describe('TargetAdapterMetadataStore', () => {
    const bucket = bucketFactory();
    afterEach(() => bucket.clear() );

    xit('should extends action (ExtendAction)', () => {

    });

    xit('should register actions based on hierarchy', () => {

    });

    xit('should register Prop based on hierarchy', () => {

    });

    xit('should register Exclude based on hierarchy', () => {

    });

    xit('should register Hook based on hierarchy', () => {

    });
  });
});

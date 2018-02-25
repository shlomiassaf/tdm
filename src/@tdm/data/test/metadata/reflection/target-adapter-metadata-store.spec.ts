import { ActiveRecord, MockResource, MockDeserializer, MockActionOptions, MockAdapter, bucketFactory } from '@tdm/data/testing';
import { Constructor, Prop } from '@tdm/data';

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

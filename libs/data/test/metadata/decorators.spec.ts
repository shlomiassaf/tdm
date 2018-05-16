import {
  ActiveRecord,
  MockResource,
  MockActionOptions,
  MockAdapter,
  bucketFactory
} from '@tdm/data/testing';
import { Constructor, Prop } from '@tdm/data';
import { internalMetadataStore } from '../../src/metadata/reflection/internal-metadata-store';

describe('@tdm/data', () => {
  describe('Decorators', () => {
    const bucket = bucketFactory();
    afterEach(() => bucket.clear());

    xit('should register ResourceAdapter', () => {});

    xit('should register ExtendAction', () => {});

    xit('should register Prop', () => {});

    xit('should register Exclude', () => {});

    xit('should register Hook', () => {});
  });
});

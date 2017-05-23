import { tdm, Prop } from '@tdm/core';

import { TargetMetaModifier } from '@tdm/core/testing';

export interface TestMetadataArgs {
  testProp: string;
}

describe('@tdm/core', () => {
  describe('fw', () => {
    describe('BaseMetadata', () => {
      it('should validate metadata allowOn class', () => {
        class TestMeMetadata extends tdm.BaseMetadata {
          testProp: string;

          constructor(obj: TestMetadataArgs, info: tdm.DecoratorInfo) {
            super(info);

            if (typeof obj === 'object') {
              Object.assign(this, obj);
            }
          }

          static allowOn = <any>['class'];
          static metaFactory = tdm.metaFactoryFactory<TestMetadataArgs, TestMeMetadata>(TestMeMetadata);
          static register = tdm.registerFactory<TestMeMetadata>();
        }

        class User {
          @Prop()
          prop1: string;
        }

        const doClass = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User);
        const doInstance = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User.prototype, 'prop1');
        const doStatic = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User, 'prop1');

        expect(doClass).not.toThrow();
        expect(doInstance).toThrowError('Metadata class TestMeMetadata can not decorate an instance member (User.prop1)');
        expect(doStatic).toThrowError('Metadata class TestMeMetadata can not decorate a static member (User#prop1)');

      });

      it('should validate metadata allowOn member', () => {
        class TestMeMetadata extends tdm.BaseMetadata {
          testProp: string;

          constructor(obj: TestMetadataArgs, info: tdm.DecoratorInfo) {
            super(info);

            if (typeof obj === 'object') {
              Object.assign(this, obj);
            }
          }

          static allowOn = <any>['member'];
          static metaFactory = tdm.metaFactoryFactory<TestMetadataArgs, TestMeMetadata>(TestMeMetadata);
          static register = tdm.registerFactory<TestMeMetadata>();
        }

        class User {
          @Prop()
          prop1: string;
        }

        const doClass = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User);
        const doInstance = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User.prototype, 'prop1');
        const doStatic = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User, 'prop1');

        expect(doClass).toThrowError('Metadata class TestMeMetadata can not decorate a class (User)');
        expect(doInstance).not.toThrow();
        expect(doStatic).toThrowError('Metadata class TestMeMetadata can not decorate a static member (User#prop1)');

      });

      it('should validate metadata allowOn staticMember', () => {
        class TestMeMetadata extends tdm.BaseMetadata {
          testProp: string;

          constructor(obj: TestMetadataArgs, info: tdm.DecoratorInfo) {
            super(info);

            if (typeof obj === 'object') {
              Object.assign(this, obj);
            }
          }

          static allowOn = <any>['staticMember'];
          static metaFactory = tdm.metaFactoryFactory<TestMetadataArgs, TestMeMetadata>(TestMeMetadata);
          static register = tdm.registerFactory<TestMeMetadata>();
        }

        class User {
          @Prop()
          prop1: string;
        }

        const doClass = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User);
        const doInstance = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User.prototype, 'prop1');
        const doStatic = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User, 'prop1');

        expect(doClass).toThrowError('Metadata class TestMeMetadata can not decorate a class (User)');
        expect(doInstance).toThrowError('Metadata class TestMeMetadata can not decorate an instance member (User.prop1)');
        expect(doStatic).not.toThrow();
      });

      it('should validate metadata allowOn with multiple targets', () => {
        class TestMeMetadata extends tdm.BaseMetadata {
          testProp: string;

          constructor(obj: TestMetadataArgs, info: tdm.DecoratorInfo) {
            super(info);

            if (typeof obj === 'object') {
              Object.assign(this, obj);
            }
          }

          static allowOn = <any>['class', 'member'];
          static metaFactory = tdm.metaFactoryFactory<TestMetadataArgs, TestMeMetadata>(TestMeMetadata);
          static register = tdm.registerFactory<TestMeMetadata>();
        }

        class User {
          @Prop()
          prop1: string;
        }

        const doClass = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User);
        const doInstance = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User.prototype, 'prop1');
        const doStatic = () => tdm.BaseMetadata.create(TestMeMetadata, undefined, User, 'prop1');

        expect(doClass).not.toThrow();
        expect(doInstance).not.toThrow();
        expect(doStatic).toThrowError('Metadata class TestMeMetadata can not decorate a static member (User#prop1)');
      });
    })
  })
});
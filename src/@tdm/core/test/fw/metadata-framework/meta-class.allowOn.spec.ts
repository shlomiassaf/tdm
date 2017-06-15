import { MetaClass, BaseMetadata, DecoratorInfo } from '@tdm/core/tdm';
import { Prop } from '@tdm/core';

import { TargetMetaModifier } from '@tdm/core/testing';

export interface TestMetadataArgs {
  testProp: string;
}

describe('@tdm/core', () => {
  describe('fw', () => {
    describe('@MetaClass()', () => {
      it('should validate metadata allowOn class', () => {
        
        @MetaClass<TestMetadataArgs, TestMeMetadata>({
          allowOn: ['class']
        })
        class TestMeMetadata extends BaseMetadata {
          testProp: string;

          constructor(obj: TestMetadataArgs, info: DecoratorInfo) {
            super(info);

            if (typeof obj === 'object') {
              Object.assign(this, obj);
            }
          }
        }

        class User {
          @Prop()
          prop1: string;
        }

        const doClass = () => MetaClass.get(TestMeMetadata).create(undefined, User);
        const doInstance = () => MetaClass.get(TestMeMetadata).create(undefined, User.prototype, 'prop1');
        const doStatic = () => MetaClass.get(TestMeMetadata).create(undefined, User, 'prop1');

        expect(doClass).not.toThrow();
        expect(doInstance).toThrowError('Metadata class TestMeMetadata can not decorate an instance member (User.prop1)');
        expect(doStatic).toThrowError('Metadata class TestMeMetadata can not decorate a static member (User#prop1)');

      });

      it('should validate metadata allowOn member', () => {

        @MetaClass<TestMetadataArgs, TestMeMetadata>({
          allowOn: ['member']
        })
        class TestMeMetadata extends BaseMetadata {
          testProp: string;

          constructor(obj: TestMetadataArgs, info: DecoratorInfo) {
            super(info);

            if (typeof obj === 'object') {
              Object.assign(this, obj);
            }
          }
        }

        class User {
          @Prop()
          prop1: string;
        }

        const doClass = () => MetaClass.get(TestMeMetadata).create(undefined, User);
        const doInstance = () => MetaClass.get(TestMeMetadata).create(undefined, User.prototype, 'prop1');
        const doStatic = () => MetaClass.get(TestMeMetadata).create(undefined, User, 'prop1');

        expect(doClass).toThrowError('Metadata class TestMeMetadata can not decorate a class (User)');
        expect(doInstance).not.toThrow();
        expect(doStatic).toThrowError('Metadata class TestMeMetadata can not decorate a static member (User#prop1)');

      });

      it('should validate metadata allowOn staticMember', () => {

        @MetaClass<TestMetadataArgs, TestMeMetadata>({
          allowOn: ['staticMember']
        })
        class TestMeMetadata extends BaseMetadata {
          testProp: string;

          constructor(obj: TestMetadataArgs, info: DecoratorInfo) {
            super(info);

            if (typeof obj === 'object') {
              Object.assign(this, obj);
            }
          }
        }

        class User {
          @Prop()
          prop1: string;
        }

        const doClass = () => MetaClass.get(TestMeMetadata).create(undefined, User);
        const doInstance = () => MetaClass.get(TestMeMetadata).create(undefined, User.prototype, 'prop1');
        const doStatic = () => MetaClass.get(TestMeMetadata).create(undefined, User, 'prop1');

        expect(doClass).toThrowError('Metadata class TestMeMetadata can not decorate a class (User)');
        expect(doInstance).toThrowError('Metadata class TestMeMetadata can not decorate an instance member (User.prop1)');
        expect(doStatic).not.toThrow();
      });

      it('should validate metadata allowOn with multiple targets', () => {

        @MetaClass<TestMetadataArgs, TestMeMetadata>({
          allowOn: ['class', 'member']
        })
        class TestMeMetadata extends BaseMetadata {
          testProp: string;

          constructor(obj: TestMetadataArgs, info: DecoratorInfo) {
            super(info);

            if (typeof obj === 'object') {
              Object.assign(this, obj);
            }
          }
        }

        class User {
          @Prop()
          prop1: string;
        }

        const doClass = () => MetaClass.get(TestMeMetadata).create(undefined, User);
        const doInstance = () => MetaClass.get(TestMeMetadata).create(undefined, User.prototype, 'prop1');
        const doStatic = () => MetaClass.get(TestMeMetadata).create(undefined, User, 'prop1');

        expect(doClass).not.toThrow();
        expect(doInstance).not.toThrow();
        expect(doStatic).toThrowError('Metadata class TestMeMetadata can not decorate a static member (User#prop1)');
      });
    })
  })
});
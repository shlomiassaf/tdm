import { ActiveRecord, MockResource, bucketFactory } from '@tdm/data/testing';
import { Prop, validators } from '@tdm/data';

describe('@tdm/data', () => {
  describe('Core Validators', () => {
    const bucket = bucketFactory();
    afterEach(() => bucket.clear());
    it('Should emit core validation errors', () => {
      class User_ {
        @Prop({
          validation: validators.declared
        })
        declared: string;

        @Prop({
          validation: validators.required
        })
        required: string;

        @Prop({
          validation: validators.instanceOf
        })
        instanceOf: string;

        @Prop({
          validation: new validators.Min(5)
        })
        min: number;

        @Prop({
          validation: new validators.Max(10)
        })
        max: number;

        @Prop({
          validation: new validators.Between(5, 10)
        })
        between: number;
      }

      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class User extends ActiveRecord(User_) {}

      const returnValue = {
        instanceOf: 5,
        required: undefined,
        min: 3,
        max: 15,
        between: 1
      };

      return expect(
        bucket
          .create(User)
          .$get({ returnValue })
          .next()
          .catch(err => {
            expect(err.errors.length).toBe(6);
            expect(err.message).toBe('Validation Error [User]');
            throw null;
          })
      ).rejects.toEqual(null);
    });

    it('Should validate instance of', () => {
      class MyClass {}

      class User_ {
        @Prop({
          validation: validators.instanceOf
        })
        instanceOfBoolean: boolean;

        @Prop({
          validation: validators.instanceOf
        })
        instanceOfNumber: number;

        @Prop({
          validation: validators.instanceOf
        })
        instanceOfString: string;

        @Prop({
          validation: validators.instanceOf
        })
        myClass: MyClass;
      }

      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class User extends ActiveRecord(User_) {}

      const returnValuePass = {
        instanceOfBoolean: true,
        instanceOfNumber: 5,
        instanceOfString: 'string',
        myClass: new MyClass()
      };
      const returnValueFail = {
        instanceOfBoolean: 'value',
        instanceOfNumber: false,
        instanceOfString: 4
      };

      return expect(
        bucket
          .create(User)
          .$get({ returnValue: returnValuePass })
          .next()
          .catch(err => {
            throw null;
          })
          .then(() =>
            bucket
              .create(User)
              .$get({ returnValue: returnValueFail })
              .next()
          )
          .catch(err => {
            expect(err.errors.length).toBe(4);
            expect(err.message).toBe('Validation Error [User]');
            throw null;
          })
      ).rejects.toEqual(null);
    });
  });
});

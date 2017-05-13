import { MockMixin, MockResource, bucketFactory } from '@tdm/data/testing';
import { Prop, validators } from '@tdm/data';

describe('CORE', () => {
  describe('Core Validators', () => {
    const bucket = bucketFactory();
    afterEach(() => bucket.clear() );

    it('Should emit core validation errors', (done) => {
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
      class User extends MockMixin(User_) { }

      const returnValue = {
        instanceOf: 5,
        required: undefined,
        min: 3,
        max: 15,
        between: 1
      };

      const user = bucket.create(User);

      user.$refresh({returnValue}).$ar.next()
        .then( data => done.fail(new Error('Validation not triggered')) )
        .catch( err => {
          expect(err.validationErrors.length).toBe(6);
          // expect(err.validationErrors[0].errors['test-validator']).toBe('error');
          done();
        });
    });

    it('Should validate instance of', (done) => {
      class MyClass {};

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
      class User extends MockMixin(User_) { }

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

      let user = bucket.create(User);

      const unique = {};
      user.$refresh({returnValue: returnValuePass}).$ar.next()
        .catch( (err) => {
          done.fail(err);
          return unique;
        })
        .then( hasError => {
          if (hasError !== unique) {
            user = bucket.create(User);
            user.$refresh({returnValue: returnValueFail}).$ar.next()
              .then( data => done.fail(new Error('Validation not triggered')) )
              .catch( err => {
                expect(err.validationErrors.length).toBe(4);
                done();
              });
          }
        });
    });

  });
});

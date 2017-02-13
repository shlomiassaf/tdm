import 'rxjs';

import { MockMixin, MockResource, MockDeserializer } from '@tdm/core/testing';
import { Prop, ValidationContext } from '@tdm/core';


const localMockDeserializer = new MockDeserializer();

describe('CORE', () => {
  describe('Target Validation', () => {

    it('should apply transform function for incoming & outgoing', (done) => {
      class User_ {
        @Prop({
          validation: {
            name: 'test-validator',
            validate(ctx: ValidationContext) {
              return false;
            },
            errorMessage(ctx: ValidationContext) {
              return 'error';
            }
          }
        })
        validatable: string;
      }

      @MockResource({
        endpoint: '/api/users/:id?',
        identity: 'id',
        deserializer: () => localMockDeserializer
      })
      class User extends MockMixin(User_) { }

      const returnValue = {
        validatable: 'validatable'
      };

      const user = new User();

      user.$refresh({returnValue}).$ar.next()
        .then( data => done.fail(new Error('Validation not triggered')) )
        .catch( err => {
          expect(err.validationErrors[0].errors['test-validator']).toBe('error');
          done();
        });
    });

  });
});

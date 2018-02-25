import 'rxjs';

import { ActiveRecord, MockResource, bucketFactory } from '@tdm/data/testing';
import { Prop, ValidationContext } from '@tdm/data';

describe('@tdm/data', () => {
  describe('Target Validation', () => {
    const bucket = bucketFactory();
    afterEach(() => bucket.clear() );

    it('should apply transform function for incoming & outgoing', () => {
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
        endpoint: '/api/users/:id?'
      })
      class User extends ActiveRecord(User_) { }

      const returnValue = {
        validatable: 'validatable'
      };

      return expect(
        bucket.create(User).$refresh({returnValue}).$rc.next()
          .catch( err => {
            expect(err.errors.length).toBe(1);
            expect(err.errors[0].errors['test-validator']).toBe('error');
            expect(err.message).toBe('Validation Error [User]');
            throw null;
          })
      ).rejects.toEqual(null);

    });

  });
});

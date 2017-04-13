import 'rxjs';
import * as voca from 'voca';

import { MockMixin, MockResource, bucketFactory } from '@tdm/core/testing';
import { Prop, Resource } from '@tdm/core';


describe('CORE', () => {
  describe('Target Transformer', () => {
    const bucket = bucketFactory();

    afterEach(() => bucket.clear() );

    it('should apply transform function for incoming & outgoing', (done) => {
      class User_ {
        @Prop({
          transform: (value: any) => value + '-value1'
        })
        transformed1: string;

        @Prop({
          transform: {
            incoming: (value: any) => value + '-value2',
            outgoing: (value: any) => value.indexOf('-value2') > -1 ? value.replace('-value2', '') : '',
          }
        })
        transformed2: string;
      }

      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class User extends MockMixin(User_) { }

      const returnValue = {
        transformed1: 'transformed1',
        transformed2: 'transformed2',
      };

      const expected = {
        incoming: {
          transformed1: 'transformed1-value1',
          transformed2: 'transformed2-value2',
        },
        outgoing: {
          transformed1: 'transformed1-value1-value1',
          transformed2: 'transformed2',
        }
      };

      const user = bucket.create(User);

      const payloadInspect = payload => {
        expect(payload['transformed1']).toBe(expected.outgoing.transformed1);
        expect(payload['transformed2']).toBe(expected.outgoing.transformed2);
      };

      user.$refresh({returnValue}).$ar.next()
        .then( data => {
          expect(user.transformed1).toBe(expected.incoming.transformed1);
          expect(user.transformed2).toBe(expected.incoming.transformed2);
        })
        .then( () => user.$update({payloadInspect}).$ar.next() )
        .then( data => done() )
        .catch( err => done.fail(err) );
    });

    it('should apply NamingStrategyConfig', (done) => {
      @Resource({
        transformNameStrategy: {
          incoming: name => voca.camelCase(name),
          outgoing: name => voca.snakeCase(name)
        }
      })
      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class User extends MockMixin(class {}) { }

      const user = bucket.create(User);
      const returnValue = {
        my_property1: 1,
        MyProperty2: 2,
        myProperty3: 3
      };

      const payloadInspect = payload => {
        expect(payload['myProperty1']).toBeUndefined();
        expect(payload['my_property_1']).toBe(returnValue.my_property1);

        expect(payload['myProperty2']).toBeUndefined();
        expect(payload['my_property_2']).toBe(returnValue.MyProperty2);

        expect(payload['myProperty3']).toBeUndefined();
        expect(payload['my_property_3']).toBe(returnValue.myProperty3);
      };

      user.$refresh({returnValue}).$ar.next()
        .then( data => {
          expect(user['my_property_1']).toBeUndefined();
          expect(user['myProperty1']).toBe(returnValue.my_property1);

          expect(user['MyProperty2']).toBeUndefined();
          expect(user['myProperty2']).toBe(returnValue.MyProperty2);

          expect(user['myProperty3']).toBe(returnValue.myProperty3);
        })
        .then( () => user.$update({payloadInspect}).$ar.next() )
        .then( data => done() )
        .catch( err => done.fail(err) );

    });
  });
});

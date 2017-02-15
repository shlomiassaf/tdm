import 'rxjs';

import { MockMixin, MockResource, MockDeserializer, bucketFactory } from '@tdm/core/testing';
import { Prop, Exclude } from '@tdm/core';


const localMockDeserializer = new MockDeserializer();

class User_ {
  id: number;

  @Prop()
  age: number;

  @Exclude()
  motto: string;

  @Prop({
    alias: 'username'
  })
  username__: string;

  @Prop({
    transform: (value: any) => value + '-value'
  })
  transformed: string;

  @Prop()
  @Exclude()
  alwaysExcluded: string;

  @Prop({
    alias: 'aliasedAlwaysExcluded'
  })
  @Exclude()
  aliasedAlwaysExcluded__: string;

  @Exclude({ from: 'incoming' })
  incomingExcluded: string;

  @Exclude({ from: 'outgoing' })
  outgoingExcluded: string;

  @Prop()
  nonExisting: string;
}

@MockResource({
  endpoint: '/api/users/:id?',
  identity: 'id',
  deserializer: () => localMockDeserializer,
  transformStrategy: 'inclusive'
})
class UserInc extends MockMixin(User_) { }

@MockResource({
  endpoint: '/api/users/:id?',
  identity: 'id',
  deserializer: () => localMockDeserializer,
  transformStrategy: 'exclusive'
})
class UserExc extends MockMixin(User_) { }

const returnValue = {
  id: 5,
  age: 20,
  username: 'test',
  motto: 'test all the way',
  transformed: 'test',
  wild: true,
  alwaysExcluded: 'alwaysExcluded',
  incomingExcluded: 'incomingExcluded',
  outgoingExcluded: 'outgoingExcluded',
  aliasedAlwaysExcluded: 'aliasedAlwaysExcluded'
};

describe('CORE', () => {
  describe('Target Transformer', () => {

    const bucket = bucketFactory();
    afterEach(() => bucket.clear() );

    //TODO: simplify tests, makes small tests for each feature (alias, exclude etc);

    it('should include all properties when strategy === "inclusive" except explicitly excluded properties', (done) => {
      const user = bucket.create(UserInc);

      const payloadInspect = payload => {
        expect(payload['age']).toBe(returnValue.age);
        expect(payload['username']).toBe(returnValue.username);
        expect(payload['username__']).toBeUndefined();

        expect(payload['incomingExcluded']).toBe('incomingExcluded-local');
        expect(payload['outgoingExcluded']).toBeUndefined();

        expect(payload['wild']).toBe(true);
        expect(payload['freeSpirit']).toBe(true);
      };

      user.$refresh({returnValue}).$ar.next()
        .then( data => {
          expect(user.age).toBe(returnValue.age);

          expect(user.username__).toBe(returnValue.username);
          expect(user['username']).toBeUndefined();

          expect(user.motto).toBeUndefined();
          expect(user.nonExisting).toBeUndefined();
          expect(user.alwaysExcluded).toBeUndefined();

          expect(user.incomingExcluded).toBeUndefined();
          expect(user.outgoingExcluded).toBe(returnValue.outgoingExcluded);

          expect(user.aliasedAlwaysExcluded__).toBeUndefined();
          expect(user['aliasedAlwaysExcluded']).toBeUndefined();

          expect(user['wild']).toBe(true);

          user.incomingExcluded = 'incomingExcluded-local';

          user['freeSpirit'] = true;
        })
        .then( () => user.$update({payloadInspect}).$ar.next() )
        .then( data => done() )
        .catch( err => done.fail(err) );
    });

    it('should include only marked properties when strategy === "exclusive" except explicitly excluded properties', (done) => {
      const user = bucket.create(UserExc);

      user.$refresh({returnValue}).$ar.next()
        .then( data => {
          expect(user.age).toBe(returnValue.age);

          expect(user.username__).toBe(returnValue.username);
          expect(user['username']).toBeUndefined();

          expect(user.motto).toBeUndefined();
          expect(user.nonExisting).toBeUndefined();
          expect(user.alwaysExcluded).toBeUndefined();

          expect(user.aliasedAlwaysExcluded__).toBeUndefined();
          expect(user['aliasedAlwaysExcluded']).toBeUndefined();

          expect(user['wild']).toBeUndefined();

          done();
        })
        .catch( err => done.fail(err) );
    });

    it('should populate collections', (done) => {
      const data = [
        Object.assign({}, returnValue, { id: 1, username: 1 }),
        Object.assign({}, returnValue, { id: 2, username: 2 }),
        Object.assign({}, returnValue, { id: 3, username: 3 })
      ];

      const users = UserInc.query({ returnValue: data });
      bucket.bucket.push(users);

      users.$ar.next()
        .then( data => {
          expect(users.collection.length).toBe(3);

          users.collection.forEach( (user: UserInc, idx: number) => {
            expect(user.id).toBe(idx+1);
            expect(user.age).toBe(returnValue.age);

            expect(user.username__).toBe(idx+1);
            expect(user['username']).toBeUndefined();

            expect(user.motto).toBeUndefined();
            expect(user.nonExisting).toBeUndefined();
            expect(user.alwaysExcluded).toBeUndefined();

            expect(user.aliasedAlwaysExcluded__).toBeUndefined();
            expect(user['aliasedAlwaysExcluded']).toBeUndefined();

            expect(user['wild']).toBe(true);
          });

          done();
        })
        .catch( err => done.fail(err) );
    });

  });
});

import { MockMixin, MockResource, MockDeserializer, MockActionOptions, MockAdapter } from '@tdm/core/testing';
import { ActiveRecord, Constructor, Prop } from '@tdm/core';
import { internalMetadataStore } from '../../src/metadata/reflection/internal-metadata-store';

const localMockDeserializer = new MockDeserializer();

describe('CORE', () => {
  describe('Decorator Factories', () => {
    const returnValue = {
      name: 'test',
      value: 'value'
    };
    const transform = (value: any) => value + '1';

    it('should register resource using const/type (no inheritance)', (done) => {
      @MockResource({
        endpoint: '/api/users/:id?',
        identity: 'id',
        deserializer: () => localMockDeserializer,
        noBuild: true
      })
      class User_ {
        name: string;
        @Prop({transform}) value: string;
      }

      const User = MockMixin(User_);
      type User = MockMixin<User_>;

      const user = new User();
      user.$refresh({returnValue}).$ar.next()
        .then( data => {
          expect(internalMetadataStore.getTargetAdapterStore(User, MockAdapter).resource.name).toBe('User_');
          expect(user.name).toBe('test');
          expect(user.value).toBe('value1');
          done();
        })
        .catch( err => {
          done.fail(err);
        });
    });

    it('should register resource using empty inheritance (interface)', (done) => {

      interface IUserStatic extends Constructor<IUser> {

      }
      interface IUser extends ActiveRecord<IUser, MockActionOptions> {
        name: string;
        value: string;
      }

      @MockResource({
        endpoint: '/api/users/:id?',
        identity: 'id',
        deserializer: () => localMockDeserializer
      })
      class User extends MockMixin<IUser, IUserStatic>() {
        name: string;
        @Prop({transform}) value: string;
      }


      const user = new User();
      user.$refresh({returnValue}).$ar.next()
        .then( data => {
          expect(internalMetadataStore.getTargetAdapterStore(User, MockAdapter).resource.name).toBe('User');
          expect(user.name).toBe('test');
          expect(user.value).toBe('value1');
          done();
        })
        .catch( err => {
          done.fail(err);
        });
    });

    it('should register resource using inheritance (base class)', (done) => {

      class User_ {
        name: string;
        @Prop({transform}) value: string;
      }

      @MockResource({
        endpoint: '/api/users/:id?',
        identity: 'id',
        deserializer: () => localMockDeserializer
      })
      class User extends MockMixin(User_) { }

      const user = new User();
      user.$refresh({returnValue}).$ar.next()
        .then( data => {
          expect(internalMetadataStore.getTargetAdapterStore(User, MockAdapter).resource.name).toBe('User');
          expect(user.name).toBe('test');
          expect(user.value).toBe('value1');
          done();
        })
        .catch( err => {
          done.fail(err);
        });
    });

    it('should override resource name, if set', () => {
      class User_ { }

      @MockResource({
        name: 'TestUser',
        endpoint: '/api/users/:id?',
        identity: 'id',
        deserializer: () => localMockDeserializer
      })
      class User extends MockMixin(User_) { }

      expect(internalMetadataStore.getTargetAdapterStore(User, MockAdapter).resource.name).toBe('TestUser');
    });


    xit('should register lifecycle hooks', () => {
      // static \ instance level
      // fire error if Decorator set on wrong level
    });
  });
});

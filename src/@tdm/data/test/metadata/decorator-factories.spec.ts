import { tdm } from '@tdm/core';
import { MockMixin, MockResource, MockActionOptions, bucketFactory } from '@tdm/data/testing';
import { ActiveRecord, Constructor, Prop, Resource } from '@tdm/data';

const { targetStore, TargetMetadata } = tdm;

describe('@tdm/data', () => {
  describe('Decorator Factories', () => {
    const bucket = bucketFactory();
    afterEach(() => bucket.clear() );

    it('should register target and fire events using an adapter decorator', () => {
      const createMetadata = jasmine.createSpy('createMetadata');
      const processType = jasmine.createSpy('processType');
      targetStore.on.createMetadata(createMetadata);
      targetStore.on.processType(processType);


      @MockResource({ endpoint: '/api/users/:id?' }) class User { }

      expect(targetStore.getTargetMeta(User)).toBeInstanceOf(TargetMetadata);

      expect(createMetadata).toHaveBeenCalledTimes(2); // 1st: User, 2nd: TDMModel of User
      expect(createMetadata).toHaveBeenLastCalledWith(User);


      expect(processType).toHaveBeenCalledTimes(1);
      expect(processType).toHaveBeenLastCalledWith(User);
    });

    it('should not build the TDMModel if instructed so', () => {
      const createMetadata = jasmine.createSpy('createMetadata');
      const processType = jasmine.createSpy('processType');
      targetStore.on.createMetadata(createMetadata);
      targetStore.on.processType(processType);


      @MockResource({ endpoint: '/api/users/:id?', noBuild: true }) class User { }

      expect(targetStore.getTargetMeta(User)).toBeInstanceOf(TargetMetadata);

      expect(createMetadata).toHaveBeenCalledTimes(2); // 1st: User, 2nd: TDMModel of User
      expect(createMetadata).toHaveBeenLastCalledWith(User);


      expect(processType).not.toHaveBeenCalled();
    });

    const returnValue = {
      name: 'test',
      value: 'value'
    };
    const transform = (value: any) => value + '1';

    it('should register resource using const/type (no inheritance)', (done) => {
      @MockResource({
        endpoint: '/api/users/:id?',
        noBuild: true
      })
      class User_ {
        name: string;
        @Prop({transform}) value: string;
      }

      const User = MockMixin(User_);
      type User = MockMixin<User_>;

      const user: User = bucket.create<any>(User);
      user.$refresh({returnValue}).$rc.next()
        .then( data => {
          expect(targetStore.getClassProp(User, 'resName')).toBe('User_');
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
        endpoint: '/api/users/:id?'
      })
      class User extends MockMixin<IUser, IUserStatic>() {
        name: string;
        @Prop({transform}) value: string;
      }


      const user = bucket.create(User);
      user.$refresh({returnValue}).$rc.next()
        .then( data => {
          expect(targetStore.getClassProp(User, 'resName')).toBe('User');
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
        endpoint: '/api/users/:id?'
      })
      class User extends MockMixin(User_) { }

      const user = bucket.create(User);
      user.$refresh({returnValue}).$rc.next()
        .then( data => {
          expect(targetStore.getClassProp(User, 'resName')).toBe('User');
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

      @Resource({
        resName: 'TestUser'
      })
      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class User extends MockMixin(User_) { }

      expect(targetStore.getClassProp(User, 'resName')).toBe('TestUser');
    });


    xit('should register lifecycle hooks', () => {
      // static \ instance level
      // fire error if Decorator set on wrong level
    });
  });
});

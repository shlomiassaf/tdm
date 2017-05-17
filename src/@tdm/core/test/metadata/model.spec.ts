import * as voca from 'voca';

import { Model, directMapper, TargetMetadata } from '@tdm/core';
import { targetStore } from '@tdm/core/ext';
import '@tdm/core/add/mapping';
import { TargetMetaModifier } from '@tdm/core/testing';


const transformNameStrategy = {
  incoming: name => voca.camelCase(name),
  outgoing: name => voca.snakeCase(name)
};


class User { }


describe('@tdm/core', () => {
  describe('decorators', () => {
    describe('@Model()', () => {
      const userModifier = TargetMetaModifier.create(User);
      const data = {
        my_property1: 1,
        MyProperty2: 2,
        myProperty3: 3
      };

      it('should register target and fire events using @Model decorator', () => {
        const createMetadata = jasmine.createSpy('createMetadata');
        const processType = jasmine.createSpy('processType');
        targetStore.on.createMetadata(createMetadata);
        targetStore.on.processType(processType);


        @Model() class User { }

        expect(targetStore.getTargetMeta(User)).toBeInstanceOf(TargetMetadata);

        expect(createMetadata).toHaveBeenCalledTimes(1);
        expect(createMetadata).toHaveBeenLastCalledWith(User);


        expect(processType).toHaveBeenCalledTimes(1);
        expect(processType).toHaveBeenLastCalledWith(User);
      });

      beforeEach( () => userModifier.clear() );

      it('should apply NamingStrategyConfig in inclusive mode - without defined @Props', () => {
        userModifier.classProp('transformNameStrategy', transformNameStrategy);

        const user = targetStore.deserialize(directMapper.deserializer(data, User));

        expect(user['my_property_1']).toBeUndefined();
        expect(user['myProperty1']).toBe(data.my_property1);

        expect(user['MyProperty2']).toBeUndefined();
        expect(user['myProperty2']).toBe(data.MyProperty2);

        expect(user['myProperty3']).toBe(data.myProperty3);

        const ser = targetStore.serialize(User, directMapper.serializer(user));

        expect(ser['myProperty1']).toBeUndefined();
        expect(ser['my_property_1']).toBe(data.my_property1);

        expect(ser['myProperty2']).toBeUndefined();
        expect(ser['my_property_2']).toBe(data.MyProperty2);

        expect(ser['myProperty3']).toBeUndefined();
        expect(ser['my_property_3']).toBe(data.myProperty3);
      });

      it('should apply NamingStrategyConfig in inclusive mode - with defined @Props', () => {
        userModifier.classProp('transformNameStrategy', transformNameStrategy);
        (userModifier.props as any)('myProperty1', 'myProperty2', 'myProperty3');

        const user = targetStore.deserialize(directMapper.deserializer(data, User));

        expect(user['my_property_1']).toBeUndefined();
        expect(user['myProperty1']).toBe(data.my_property1);

        expect(user['MyProperty2']).toBeUndefined();
        expect(user['myProperty2']).toBe(data.MyProperty2);

        expect(user['myProperty3']).toBe(data.myProperty3);

        const ser = targetStore.serialize(User, directMapper.serializer(user));

        expect(ser['myProperty1']).toBeUndefined();
        expect(ser['my_property_1']).toBe(data.my_property1);

        expect(ser['myProperty2']).toBeUndefined();
        expect(ser['my_property_2']).toBe(data.MyProperty2);

        expect(ser['myProperty3']).toBeUndefined();
        expect(ser['my_property_3']).toBe(data.myProperty3);
      });

      it('should apply NamingStrategyConfig in exclusive mode', () => {
        userModifier.classProp('transformNameStrategy', transformNameStrategy);
        userModifier.classProp('transformStrategy', 'exclusive');
        (userModifier.props as any)('myProperty1', 'myProperty2', 'myProperty3');

        const data = {
          my_property_1: 1
        };


        const user = targetStore.deserialize(directMapper.deserializer(data, User));

        expect(user['my_property_1']).toBeUndefined();
        expect(user['myProperty1']).toBe(data.my_property_1);

      });
    });
  })
});

import * as voca from 'voca';

import { Transformable, directMapper } from '@tdm/transformation';
import { targetStore } from '@tdm/transformation/ext';
import { TargetMetaModifier } from '@tdm/transformation/testing';


@Transformable({
  transformNameStrategy: {
    incoming: name => voca.camelCase(name),
    outgoing: name => voca.snakeCase(name)
  }
})
class User {
}


describe('@tdm/transformation', () => {
  describe('decorators', () => {
    describe('@Transformable()', () => {
      const userModifier = TargetMetaModifier.create(User);

      beforeEach(() => {
        userModifier.clear();
      });

      it('should apply NamingStrategyConfig', () => {

        const data = {
          my_property1: 1,
          MyProperty2: 2,
          myProperty3: 3
        };

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

    });
  })
});

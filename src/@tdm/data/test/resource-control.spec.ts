import { ActiveRecord, MockResource, bucketFactory } from '@tdm/data/testing';
import { TDMModel, TDMModelBase, Model, Prop, Relation } from '@tdm/core';
import { ResourceControl } from '@tdm/data';

describe('@tdm/data', () => {
  describe('ResourceControl', () => {
    const bucket = bucketFactory();
    afterEach(() => bucket.clear() );

    it('clone', () => {
      class AddressBase {
        @Prop()
        street: string;
      }
      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class Address extends ActiveRecord(AddressBase) { }

      class UserBase {
        @Prop()
        bool: boolean;

        @Prop()
        num: number;

        @Prop()
        str: string;

        @Prop()
        complex: any;

        @Prop()
        rel: Address;
      }
      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class User extends ActiveRecord(UserBase) { }

      const user = new User();
      expect(user.$rc instanceof ResourceControl).toBe(true);

      user.bool = true;
      user.num = 99;
      user.str = 'clone';
      user.complex = {
        value: 11
      };
      user.rel = new Address();
      user.rel.street = 'street';

      const clone = user.$rc.clone();

      expect(clone).not.toBe(user);
      expect(clone instanceof User).toBe(true);
      expect(clone.$rc instanceof ResourceControl).toBe(true);

      expect(clone.bool).toBe(user.bool);
      expect(clone.num).toBe(user.num);
      expect(clone.str).toBe(user.str);

      expect(clone.complex).not.toBe(user.complex);
      expect(clone.complex.value).toBe(user.complex.value);

      expect(clone.rel).not.toBe(user.rel);
      expect(clone.rel instanceof Address).toBe(true);
      expect(clone.rel.street).toBe(user.rel.street);

    });

    it('Snapshot', () => {
      class AddressBase {
        @Prop()
        street: string;
      }
      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class Address extends ActiveRecord(AddressBase) { }

      class UserBase {
        @Prop()
        bool: boolean;

        @Prop()
        num: number;

        @Prop()
        str: string;

        @Prop()
        complex: any;

        @Prop()
        rel: Address;
      }
      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class User extends ActiveRecord(UserBase) { }

      const user = new User();
      expect(user.$rc instanceof ResourceControl).toBe(true);

      user.bool = true;
      user.num = 99;
      user.str = 'snapshot';
      user.complex = {
        value: 11
      };
      user.rel = new Address();
      user.rel.street = 'street';

      user.$rc.createSnapshot();

      expect(user.$rc.hasSnapshot).toBe(true);

      user.bool = false;
      user.num = 88;
      user.str = 'snapshot!!!';
      user.complex = {
        value: 55
      };
      expect(user.bool).toBe(false);
      expect(user.num).toBe(88);
      expect(user.str).toBe('snapshot!!!');
      expect(user.complex.value).toBe(55);

      user.$rc.restoreSnapshot();
      expect(user.$rc.hasSnapshot).toBe(false);
      expect(user.bool).toBe(true);
      expect(user.num).toBe(99);
      expect(user.str).toBe('snapshot');
      expect(user.complex.value).toBe(11);

    });
  });
});

import 'rxjs';


import { MockMixin, MockResource, MockDeserializer, MockActionOptions, TargetMetaModifier } from '@tdm/core/testing';
import { Prop, Constructor, ActiveRecord } from '@tdm/core';
import { PropMetadata } from "../../../src/metadata/meta-types/prop";
import { BelongsTo, Owns } from "../../../src/metadata/decorators";


const localMockDeserializer = new MockDeserializer();

interface IUserStatic extends Constructor<IUser> { }
interface IUser extends ActiveRecord<IUser, MockActionOptions> {
  name: string;
}

@MockResource({
  endpoint: '/api/users/:id?',
  deserializer: () => localMockDeserializer
})
class User extends MockMixin<IUser, IUserStatic>() {

  // alias SPEC //
  @Prop({
    alias: {
      outgoing: 'onlyOutAlias_'
    }
  }) onlyOutAlias: string;

  @Prop({
    alias: {
      incoming: 'onlyInAlias_'
    }
  }) onlyInAlias: string;

  @Prop({
    alias: {
      incoming: 'fullAliasIn',
      outgoing: 'fullAliasOut'
    }
  }) fullAlias: string;

  @Prop({
    alias: 'simpleAlias_'
  }) simpleAlias: string;

  @Prop() noAlias: string;
  // alias SPEC //

  // transform SPEC //
  @Prop({
    transform: {
      outgoing: () => 'onlyOutTransform'
    }
  }) onlyOutTransform: string;

  @Prop({
    transform: {
      incoming: () => 'onlyInTransform'
    }
  }) onlyInTransform: string;

  @Prop({
    transform: {
      incoming: () => 'fullTransformIn',
      outgoing: () => 'fullTransformOut'
    }
  }) fullTransform: string;

  @Prop({
    transform: () => 'simpleTransform'
  }) simpleTransform: string;

  @Prop() noTransform: string;
  // transform SPEC //


  // typeGetter SPEC //
  @Prop() anyType: any;
  @Prop({
    typeGetter: () => String
  }) anyTypeWithRef: any;

  @Prop() undefinedType: undefined;
  @Prop({
    typeGetter: () => String
  }) undefinedTypeWithRef: any;

  @Prop() nullType: null;
  @Prop({
    typeGetter: () => String
  }) nullTypeWithRef: any;

  // trap to https://github.com/Microsoft/TypeScript/issues/7169
  @Prop() anArray: User[];
  @Prop() anArrayOfStr: String[];
  @Prop({
    typeGetter: () => User
  }) anArrayWithSelf: User[];

  @Prop() thisRef: this;
  @Prop({
    typeGetter: () => User
  }) thisRefWithSelf: this;

  @Prop() self: User;

  @Prop() person: Person;

  @Prop({
    typeGetter: () => User
  }) selfWithRef: User;

  @Prop({
    typeGetter: () => Person
  }) personWithRef: Person;
// typeGetter SPEC //

// relationship SPEC //
  @Prop()
  noRelation: Person;

  @Prop({ typeGetter: () => Person })
  @BelongsTo()
  belongsTo: Person;

  @Prop({ typeGetter: () => Person })
  @Owns()
  hasOne: Person;

  @Prop({ typeGetter: () => Person })
  @Owns()
  hasMany: Person[];
// relationship SPEC //
}

@MockResource({
  endpoint: '/api/people/:id?',
  deserializer: () => localMockDeserializer
})
class Person extends MockMixin<IUser, IUserStatic>() {
  @Prop() self: Person;

  @Prop() user: User;

  @Prop({
    typeGetter: () => Person
  }) selfWithRef: Person;

  @Prop({
    typeGetter: () => User
  }) userWithRef: User;

  @Prop()
  someone: this;
}


describe('CORE', () => {
  describe('Metadata types', () => {
    const userModifier = TargetMetaModifier.create(User);
    const personModifier = TargetMetaModifier.create(Person);

    it('should reflect relationships', () => {
      expect(userModifier.getProp('noRelation').rel).toBeUndefined();
      expect(userModifier.getProp('belongsTo').rel).toBe('belongsTo');
      expect(userModifier.getProp('hasOne').rel).toBe('hasOne');
      expect(userModifier.getProp('hasMany').rel).toBe('hasMany');
    });

    it('should reflect alias settings', () => {
      function checkAlias(name: string, incoming: string, outgoing: string) {
        const p: PropMetadata = userModifier.getProp(name);
        expect(p.name).toBe(name);
        expect(p.alias.incoming).toBe(incoming);
        expect(p.alias.outgoing).toBe(outgoing);
      }
      checkAlias('noAlias', 'noAlias', 'noAlias');
      checkAlias('simpleAlias', 'simpleAlias_', 'simpleAlias_');
      checkAlias('fullAlias', 'fullAliasIn', 'fullAliasOut');
      checkAlias('onlyInAlias', 'onlyInAlias_', 'onlyInAlias');
      checkAlias('onlyOutAlias', 'onlyOutAlias', 'onlyOutAlias_');
    });

    it('should reflect transform settings', () => {
      function checkTrans(name: string, incoming?: string, outgoing?: string) {
        const p: PropMetadata = userModifier.getProp(name);
        expect(typeof p.transform.incoming === 'function').toBe(!!incoming);
        expect(typeof p.transform.outgoing === 'function').toBe(!!outgoing);

        if (incoming) {
          expect(p.transform.incoming('')).toBe(incoming);
        }
        if (outgoing) {
          expect(p.transform.outgoing('')).toBe(outgoing);
        }
      }
      expect(userModifier.getProp('noTransform').transform).toBeUndefined();
      checkTrans('simpleTransform', 'simpleTransform', 'simpleTransform');
      checkTrans('fullTransform', 'fullTransformIn', 'fullTransformOut');
      checkTrans('onlyInTransform', 'onlyInTransform', undefined);
      checkTrans('onlyOutTransform', undefined, 'onlyOutTransform');
    });

    it('should use typeGetter when required', () => {
      expect(userModifier.getProp('anyType').type).toBe(Object);
      expect(userModifier.getProp('anyTypeWithRef').type).toBe(String);

      expect(userModifier.getProp('undefinedType').type).toBe(undefined);
      expect(userModifier.getProp('undefinedTypeWithRef').type).toBe(String);

      expect(userModifier.getProp('anArray').type).toBe(Array);
      expect(userModifier.getProp('anArray').typedArray).toBeUndefined();
      expect(userModifier.getProp('anArrayOfStr').type).toBe(Array);
      expect(userModifier.getProp('anArrayOfStr').typedArray).toBeUndefined();
      expect(userModifier.getProp('anArrayWithSelf').type).toBe(User);
      expect(userModifier.getProp('anArrayWithSelf').typedArray).toBe(true);

      expect(userModifier.getProp('thisRef').type).toBe(Object);
      expect(userModifier.getProp('thisRefWithSelf').type).toBe(User);


      expect(personModifier.getProp('user').type).toBe(User);
      expect(personModifier.getProp('userWithRef').type).toBe(User);
      expect(personModifier.getProp('self').type).not.toBe(Person);
      expect(personModifier.getProp('selfWithRef').type).toBe(Person);

      expect(userModifier.getProp('person').type).toBeUndefined();
      expect(userModifier.getProp('personWithRef').type).toBe(Person);
      expect(userModifier.getProp('self').type).not.toBe(User);
      expect(userModifier.getProp('selfWithRef').type).toBe(User);

    });
  })
});

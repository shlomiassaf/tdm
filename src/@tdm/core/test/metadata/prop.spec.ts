import { Model, Prop, Relation } from '@tdm/core';
import { PropMetadata } from '@tdm/core/src/tdm';
import { TargetMetaModifier } from '@tdm/core/testing';

@Model()
class User {

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

// relations SPEC //
  @Prop()
  noRelation: Person;

  @Prop({ type: () => Person })
  @Relation()
  belongsTo: Person;

  @Prop({ type: () => Person })
  @Relation({ foreignKey: 'belongsToFk_id' })
  belongsToFk: Person;

  @Prop({ type: () => Person })
  @Relation()
  hasOne: Person;

  @Prop({ type: () => Person })
  @Relation()
  hasMany: Person[];
// relations SPEC //
}

@Model()
class Person {
  @Prop() self: Person;

  @Prop() user: User;

  @Prop({
    type: () => Person
  }) selfWithRef: Person;

  @Prop({
    type: () => User
  }) userWithRef: User;

  @Prop()
  someone: this;
}


describe('@tdm/core', () => {
  describe('decorators', () => {
    describe('@Prop()', () => {
      const userModifier = TargetMetaModifier.create(User);
      const personModifier = TargetMetaModifier.create(Person);

      it('should reflect relationships', () => {
        expect(userModifier.getProp('noRelation').relation).toBeUndefined();
        expect(userModifier.getProp('belongsTo').relation).toBeDefined();
        expect(userModifier.getProp('hasOne').relation).toBeDefined();
        expect(userModifier.getProp('hasMany').relation).toBeDefined();
      });

      it('should auto-create non-matching foreign key properties', () => {
        const belongsToFk = userModifier.getProp('belongsToFk');
        const belongsToFk_id = userModifier.getProp('belongsToFk_id' as any);

        expect(belongsToFk.relation).toBeDefined();
        expect(belongsToFk.relation.foreignKey).toBe('belongsToFk_id');
        expect(belongsToFk_id).toBeDefined();
        expect(belongsToFk_id.foreignKeyOf).toBe(belongsToFk);
      });

      it('should reflect alias settings', () => {
        function checkAlias(name: keyof User, incoming: string, outgoing: string) {
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
        function checkTrans(name: keyof User, incoming?: string, outgoing?: string) {
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

    });
  })
});

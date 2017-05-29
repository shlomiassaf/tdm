import { Type, Model, Prop, Relation } from '@tdm/core';
import { TargetMetaModifier } from '@tdm/core/testing';

@Model()
class User {
  @Prop() baseline: string;

  @Prop() notSetType;
  @Prop() anyType: any;
  @Prop() undefinedType: undefined;
  @Prop() nullType: null;
  @Prop() voidType: void;
  @Prop() neverType: never;
  @Prop() objectType: object;

  @Type(() => Number)
  @Prop()
  decoratedType: string;

  @Prop({ type: () => Boolean })
  inlineType: string;

  @Type(() => Number)
  @Prop({ type: () => Boolean })
  decoratedAndInlineType: string;

  @Prop({ type: () => Boolean })
  @Type(() => Number)
  inlineAndDecoratedType: string;

  @Prop() selfRef: User;

  @Prop() thisRef: this;

  // trap to https://github.com/Microsoft/TypeScript/issues/7169
  @Prop() anArray: String[];

  @Prop({ type: () => User }) inlineTypedArray: User[];

  @Type(() => User) @Prop() decoratedTypedArray: User[];


  @Prop() person: Person;

  @Prop({ type: () => Person }) personWithRef: Person;

  @Prop({
    type: {
      ref: String,
      isArray: true
    }
  }) typeDefString: string;

}

@Model()
class Person {
  @Prop() user: User;
}


describe('@tdm/core', () => {
  describe('decorators', () => {
    describe('@Type()', () => {
      const userModifier = TargetMetaModifier.create(User);
      const personModifier = TargetMetaModifier.create(Person);

      let type = userModifier.getType;
      type = type.bind(userModifier);
      
      // const type = TargetMetaModifier.prototype.getType.bind(userModifier);

      it('should store type information', () => {
        const t = type('baseline');
        expect(t.ref).toEqual(String);
        expect(t.isGetter).toBeFalsy();
        expect(t.isArray).toBeFalsy();
      });

      it('should default to Object when no type or any type is set', () => {
        expect(type('notSetType').ref).toEqual(Object);
        expect(type('anyType').ref).toEqual(Object);
      });

      it('should reflect common types', () => {
        expect(type('objectType').ref).toEqual(Object);
        expect(type('undefinedType').ref).toEqual(undefined);
        expect(type('nullType').ref).toEqual(undefined);
        expect(type('voidType').ref).toEqual(undefined);
        expect(type('neverType').ref).toEqual(undefined);
      });

      it('should reflect @Type decorator', () => {
        const t = type('decoratedType');
        expect(t.ref).toEqual(Number);
        expect(t.isGetter).toEqual(true);
        expect(t.isArray).toBeFalsy();
      });

      it('should reflect inline type instructions', () => {
        const t = type('inlineType');
        expect(t.ref).toEqual(Boolean);
        expect(t.isGetter).toEqual(true);
        expect(t.isArray).toBeFalsy();
      });

      it('should prefer decorated over inline', () => {
        const decoratedAndInline = type('decoratedAndInlineType');
        const inlineAndDecorated = type('inlineAndDecoratedType');

        expect(inlineAndDecorated.ref).toEqual(Number);
        expect(decoratedAndInline.ref).toEqual(Number);
      });

      it('should handle self reference', () => {
        expect(type('selfRef').ref).toEqual(User);
      });

      // control check when TS will support this type reflection based on the defining class.
      it('should resolve this type to Object', () => {
        expect(type('thisRef').ref).toEqual(Object);
      });

      it('should handle typescript array types', () => {
        const t = type('anArray');
        expect(t.ref).toEqual(Object);
        expect(t.isGetter).toBeFalsy();
        expect(t.isArray).toEqual(true);
      });

      it('should resolve an array type with type information into an array of the typed information', () => {
        const decoratedTypedArray = type('decoratedTypedArray');
        const inlineTypedArray = type('inlineTypedArray');

        expect(decoratedTypedArray.ref).toEqual(User);
        expect(decoratedTypedArray.isGetter).toEqual(true);
        expect(decoratedTypedArray.isArray).toEqual(true);

        expect(inlineTypedArray.ref).toEqual(User);
        expect(inlineTypedArray.isGetter).toEqual(true);
        expect(inlineTypedArray.isArray).toEqual(true);
      });

      it('should NOT resolve the type for a type defined after decorator init (ts internal)', () => {
        expect(type('person').ref).toBeUndefined();
      });

      it('should resolve the type for a type defined after decorator init (ts internal) WHEN a type getter is set', () => {
        expect(type('personWithRef').ref).toEqual(Person);
      });

      it('should resolve the type for a type defined before decorator init (ts internal)', () => {
        expect(personModifier.getProp('user').type.ref).toEqual(User);
      });

      it('should accept TypeDefinition', () => {
        const t = type('typeDefString');
        expect(t.ref).toEqual(String);
        expect(t.isGetter).toBeFalsy();
        expect(t.isArray).toEqual(true);
      });

    });
  })
});

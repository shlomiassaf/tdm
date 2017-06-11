/* tslint:disable:max-line-length */
export interface Type<T> extends Function { new (...args: any[]): T; }

export type Tixin<BASE, MIXIN> = BASE & MIXIN;


function mixObjects(base: any, mixins: any[]): void {
  mixins.forEach( mixin => {
    Object.getOwnPropertyNames(mixin).concat(Object.getOwnPropertySymbols(mixin) as any)
      .forEach(name => {
        // mixin can't override base behaviour, only add
        if (!base.hasOwnProperty(name)) {
          // if its a property descriptor we need to rewire the context
          const propDesc = Object.getOwnPropertyDescriptor(mixin, name);
          if (propDesc) {
            Object.defineProperty(base, name, propDesc);
          } else {
            base[name] = mixin[name]
          }
        }
      });
  });
}

/**
 * Typeless mixin
 */
export function TixinFree(base: any, mixin: any, extend: 'class' | 'proto' | 'both' = 'both'): any {
  if (extend === 'proto' || extend === 'both') {
    mixObjects(base.prototype, [mixin.prototype]);
  }
  if (extend === 'class' || extend === 'both') {
    mixObjects(base, [mixin]);
  }
  return base as any;
}


/* GENERATED BY scripts/generic_codegen.js */
export function Tixin<TBASE, CBASE, T1, C1>(base: CBASE & Type<TBASE>, m1: C1 & Type<T1>): Type<TBASE & T1> & CBASE & C1;
export function Tixin<TBASE, CBASE, T1, C1, T2, C2>(base: CBASE & Type<TBASE>, m1: C1 & Type<T1>, m2: C2 & Type<T2>): Type<TBASE & T1 & T2> & CBASE & C1 & C2;
export function Tixin<TBASE, CBASE, T1, C1, T2, C2, T3, C3>(base: CBASE & Type<TBASE>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>): Type<TBASE & T1 & T2 & T3> & CBASE & C1 & C2 & C3;
export function Tixin<TBASE, CBASE, T1, C1, T2, C2, T3, C3, T4, C4>(base: CBASE & Type<TBASE>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>): Type<TBASE & T1 & T2 & T3 & T4> & CBASE & C1 & C2 & C3 & C4;
export function Tixin<TBASE, CBASE, T1, C1, T2, C2, T3, C3, T4, C4, T5, C5>(base: CBASE & Type<TBASE>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>, m5: C5 & Type<T5>): Type<TBASE & T1 & T2 & T3 & T4 & T5> & CBASE & C1 & C2 & C3 & C4 & C5;
export function Tixin<TBASE, CBASE, T1, C1, T2, C2, T3, C3, T4, C4, T5, C5, T6, C6>(base: CBASE & Type<TBASE>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>, m5: C5 & Type<T5>, m6: C6 & Type<T6>): Type<TBASE & T1 & T2 & T3 & T4 & T5 & T6> & CBASE & C1 & C2 & C3 & C4 & C5 & C6;
export function Tixin<TBASE, CBASE, T1, C1, T2, C2, T3, C3, T4, C4, T5, C5, T6, C6, T7, C7>(base: CBASE & Type<TBASE>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>, m5: C5 & Type<T5>, m6: C6 & Type<T6>, m7: C7 & Type<T7>): Type<TBASE & T1 & T2 & T3 & T4 & T5 & T6 & T7> & CBASE & C1 & C2 & C3 & C4 & C5 & C6 & C7;


/**
 * A type friendly, class based, mixin functions that mix in instance and static members.
 *
 * EXAMPLE:
 * ```ts
 * class User_ {
 *   id: number;
 *   firstName: string;
 *   lastName: string;
 * }
 *
 * class FullName {
 *   get fullName(): string {
 *     return `${this['firstName']} ${this['lastName']}`;
 *   }
 *
 *   static createId(): number {
 *     // a shady id generator.
 *     return Date.now();
 *   }
 * }
 *
 * export const User = Tixin(User_, FullName);
 * export type User = Tixin<User_, FullName>;
 *
 * // not using it:
 * const user = new User();
 * user.id = User.createId();
 * user.firstName = 'John';
 * user.lastName = 'Doe';
 * console.log(user.fullName); // John Doe
 * ```
 *
 * > To allow Generics in static members (e.g. static createUser(): T) see TixinExt
 *
 * ## Limitations:
 * From a type perspective this utility has limitations.
 *
 * #### You can't (currently) extend a mixed in type.
 *```ts
 *  export const User = Tixin(User_, FullName);
 *
 *  export class MyExtendedUser extends User { // <- Type Error
 *  }
 *```
 *
 * ```
 * Type 'Type<User_ & FullName> & typeof FullName & typeof User_' is not a constructor function type.
 * ```
 *
 * The error is misleading, this is a current known TS limitation (see [Github Issue](https://github.com/Microsoft/TypeScript/issues/4890))
 *
 * #### You can use generic inference once, from that point the generic param types for mixin have to be explicitly set:
 * ```ts
 *   export const User = Tixin(User_, FullName); // fine
 *
 *   export const UserNumber2 = Tixin(User, OtherMixin); // Error
 * ```
 *
 * ```
 * The type argument for type parameter 'TBASE' cannot be inferred from the usage.
 * Consider specifying the type arguments explicitly.
 * Type argument candidate 'FullName' is not a valid type argument because it is not a supertype of candidate 'User_'.
 * Property 'fullName' is missing in type 'User_'.
 * ```
 * This might be related to the previous limitation, or not...
 *
 *
 * There are 2 solution:
 *
 * 1) Using the built in interface that supports up to 6 mixins at once. (base + 6)
 * ```ts
 * export const User = Tixin(User_, FullName, OtherMixin); //  FullName, OtherMixin are 2, you can rest param your way for 5 more...
 * export type User = User_ & FullName & OtherMixin
 * ```
 * > This time we cant use `Tixin` to apply the User **type** so we just do it manually...
 *
 * 2) going the long way:
 * ```ts
 *   export const User = Tixin(User_, FullName); // fine
 *
 *   export const UserNumber2 = Tixin<User, typeof User, OtherMixin, typeof OtherMixin>(User, OtherMixin);
 * ```
 *
 *
 * @param base
 * @param mixin
 */
export function Tixin<TBASE, CBASE, TMIXIN, CMIXIN>(base: CBASE & Type<TBASE>, ...mixins: Array<CMIXIN & Type<TMIXIN>>): Type<TBASE & TMIXIN> & CMIXIN & CBASE {
  mixObjects(base.prototype, mixins.map( m => m.prototype));
  mixObjects(base, mixins);
  return base as any;
}



/* GENERATED BY scripts/generic_codegen.js */
export function TixinExt<TBASE, CBASE, SMIXIN, T1, C1>(base: CBASE & Type<TBASE>, extraStatic: SMIXIN, m1: C1 & Type<T1>): Type<TBASE & T1> & SMIXIN & CBASE & C1;
export function TixinExt<TBASE, CBASE, SMIXIN, T1, C1, T2, C2>(base: CBASE & Type<TBASE>, extraStatic: SMIXIN, m1: C1 & Type<T1>, m2: C2 & Type<T2>): Type<TBASE & T1 & T2> & SMIXIN & CBASE & C1 & C2;
export function TixinExt<TBASE, CBASE, SMIXIN, T1, C1, T2, C2, T3, C3>(base: CBASE & Type<TBASE>, extraStatic: SMIXIN, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>): Type<TBASE & T1 & T2 & T3> & SMIXIN & CBASE & C1 & C2 & C3;
export function TixinExt<TBASE, CBASE, SMIXIN, T1, C1, T2, C2, T3, C3, T4, C4>(base: CBASE & Type<TBASE>, extraStatic: SMIXIN, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>): Type<TBASE & T1 & T2 & T3 & T4> & SMIXIN & CBASE & C1 & C2 & C3 & C4;
export function TixinExt<TBASE, CBASE, SMIXIN, T1, C1, T2, C2, T3, C3, T4, C4, T5, C5>(base: CBASE & Type<TBASE>, extraStatic: SMIXIN, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>, m5: C5 & Type<T5>): Type<TBASE & T1 & T2 & T3 & T4 & T5> & SMIXIN & CBASE & C1 & C2 & C3 & C4 & C5;
export function TixinExt<TBASE, CBASE, SMIXIN, T1, C1, T2, C2, T3, C3, T4, C4, T5, C5, T6, C6>(base: CBASE & Type<TBASE>, extraStatic: SMIXIN, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>, m5: C5 & Type<T5>, m6: C6 & Type<T6>): Type<TBASE & T1 & T2 & T3 & T4 & T5 & T6> & SMIXIN & CBASE & C1 & C2 & C3 & C4 & C5 & C6;
export function TixinExt<TBASE, CBASE, SMIXIN, T1, C1, T2, C2, T3, C3, T4, C4, T5, C5, T6, C6, T7, C7>(base: CBASE & Type<TBASE>, extraStatic: SMIXIN, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>, m5: C5 & Type<T5>, m6: C6 & Type<T6>, m7: C7 & Type<T7>): Type<TBASE & T1 & T2 & T3 & T4 & T5 & T6 & T7> & SMIXIN & CBASE & C1 & C2 & C3 & C4 & C5 & C6 & C7;


/**
 * For full description see Tixin function.
 *
 * The TixinExt utility does the same as Tixin but also allows adding an extra static type to the intersection.
 *
 * Although static members are mixed in there is a situation that requires an additional static mixin.
 * In a TypeScript class we can not apply generics on static members in the class level, only in a member based level.
 * If we want to return our final mixin type from a static member (e.g: factory) we need a different type.
 *
 * Example:
 * ```ts
 * class User_ {
 *   id: number;
 *   firstName: string;
 *   lastName: string;
 * }
 *
 * class FullName {
 *   get fullName(): string {
 *     return `${this['firstName']} ${this['lastName']}`;
 *   }
 * }
 *
 * const createNew = {
 *   create(): any {
 *     return new User_(); // at this point User_ is fully mixed in.
 *   }
 * }
 *
 * interface CreateStatic<T> {
 *   create(): Tixin<T, FullName>;
 * }
 *
 * export const User = TixinExt(User_, createNew as CreateStatic<User_>, FullName );
 * export type User = Tixin<User_, FullName>;
 * ```
 *
 * > Same as Tixin, TixinExt supports up to 6 mixins but only 1 extra static member.
 * If you need more then 1 just intersect all of your extera static interfaces to 1.
 * @param base
 * @param extraStatic Optional object for extra static member, use for static functions that require generics with Generics.
 * @param mixins
 */
export function TixinExt<TBASE, CBASE, SMIXIN, TMIXIN, CMIXIN>(base: CBASE & Type<TBASE>, extraStatic: SMIXIN, ...mixins: Array<CMIXIN & Type<TMIXIN>>): Type<TBASE & TMIXIN> & CBASE & SMIXIN & CMIXIN {
  (Tixin as any)(base, ...mixins);
  mixObjects(base, Array.of(extraStatic));
  return base as any;
}
/* tslint:disable:max-line-length */

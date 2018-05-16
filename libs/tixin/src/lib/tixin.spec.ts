import { Tixin, TixinExt } from './tixin';
// import { spawnSync } from 'child_process';
// const spawnResult = spawnSync('tsc', ['--module commonjs --target es5 --moduleResolution node --noEmit --noEmitHelpers --lib es6 --types jasmine,node  src/angular-resource/utils/mixin.spec.ts']);
let ID_COUNTER = 0;

class User_ {
  id: number;
  firstName: string;
  lastName: string;
}

class FullName {
  middleName: string;

  get fullName(): string {
    return `${this['firstName']}${
      this.middleName ? ' ' + this.middleName : ''
    } ${this['lastName']}`;
  }

  static createId(): number {
    return ++ID_COUNTER;
  }
}

export const User = Tixin(User_, FullName);
export type User = Tixin<User_, FullName>;

describe(`Mixin`, () => {
  it('should mixin class', () => {
    const user = new User();

    user.id = User.createId();
    user.firstName = 'John';
    user.middleName = 'Deer';
    user.lastName = 'Doe';
    expect(user.id).toEqual(ID_COUNTER);
    expect(user.fullName).toEqual('John Deer Doe');
  });

  it('should mixin 2 classes', () => {
    class OtherMixin {
      otherName: string;

      static otherThing(): number {
        return 5;
      }
    }

    const User2 = Tixin(User_, FullName, OtherMixin);
    type User2 = User_ & FullName & OtherMixin;
    const user = new User2();

    user.id = User2.createId();
    user.firstName = 'John';
    user.middleName = 'Deer';
    user.lastName = 'Doe';

    expect(user.id).toEqual(ID_COUNTER);
    expect(User2.otherThing()).toEqual(5);
    expect(user.fullName).toEqual('John Deer Doe');
  });

  it('should mixin class with an extended static type', () => {
    class OtherMixin {
      otherName: string;

      static otherThing(): number {
        return 5;
      }
    }

    const createNew = {
      create(first: string, last: string): any {
        const user = new User(); // at this point User is fully mixed in.
        user.id = User.createId();
        user.firstName = first;
        user.lastName = last;
        return user;
      }
    };

    interface CreateStatic<T> {
      create(first: string, last: string): Tixin<T, FullName>;
    }
    const UserExt = TixinExt(
      User_,
      createNew as CreateStatic<User_>,
      FullName,
      OtherMixin
    );

    const user = UserExt.create('John', 'Doe');
    expect(user.id).toEqual(ID_COUNTER);
    expect(UserExt.otherThing()).toEqual(5);
    expect(user.fullName).toEqual('John Doe');
  });
});

// tslint:disable
import { of } from 'rxjs/observable/of';
import { EventEmitter } from '@angular/core';
import { async, fakeAsync, tick } from '@angular/core/testing';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { Identity, Model } from '@tdm/core';
import { TestTargetStore } from '@tdm/core/testing';
import { targetStore } from '@tdm/core/tdm';
import { FormModel, FormProp, NgFormsBoundMapper } from '@tdm/ngx-dynamic-forms';

function createMapper(instance: any): NgFormsBoundMapper {
  return new NgFormsBoundMapper(instance.constructor, instance);
}

describe('@tdm/ngx-dynamic-forms', () => {
  describe('ng-forms-bound-mapper', () => {

    const createUserModel = () => {
      @Model()
      @FormModel()
      class User {

        @FormProp()
        id: number;

        @FormProp()
        name: string;

        @FormProp()
        email: string;
      }
      return User;
    };

    afterEach(() => TestTargetStore.clearAll());


    it('should serialize to a FormGroup', () => {
      const User = createUserModel();
      const user = new User();
      const mapper = createMapper(user);
      const formGroup = mapper.serialize();
      expect(formGroup).toBeInstanceOf(FormGroup);
      expect(formGroup.get('id')).toBeInstanceOf(FormControl);
      expect(formGroup.get('name')).toBeInstanceOf(FormControl);
      expect(formGroup.get('email')).toBeInstanceOf(FormControl);
    });

    it('should serialize and deserialize the same instance', () => {
      const User = createUserModel();
      const user = new User();
      const mapper = createMapper(user);
      const formGroup = mapper.serialize();
      formGroup.get('id').setValue(1);
      formGroup.get('name').setValue('test');
      formGroup.get('email').setValue('test@test.com');
      const _user = mapper.deserialize();
      expect(user).toBe(_user);
      expect(user.id).toBe(1);
      expect(user.name).toBe('test');
      expect(user.email).toBe('test@test.com');
    });
  })
};

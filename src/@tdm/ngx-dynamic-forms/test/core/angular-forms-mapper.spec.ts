import { tdm, Model, Exclude } from '@tdm/core';
import { TestTargetStore } from '@tdm/core/testing';

import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';
import { NgFormsSerializeMapper } from "@tdm/ngx-dynamic-forms/core";


function serialize(instance: any): FormGroup {
  return tdm.targetStore.serialize(instance.constructor, new NgFormsSerializeMapper(instance));
}

describe('@tdm/ngx-dynamic-forms', () => {
  describe('mapping', () => {
    describe('angular-forms-mapper', () => {

      afterEach(() => TestTargetStore.clearAll() );

      it('should throw when a target is not decorated with @FormModel', () => {

        const run = () => {
          @Model() class DemoForm { }
          serialize(new DemoForm());
        };

        expect(run).toThrowError("Target 'DemoForm' is not a registered FormModel");
      });

      it('should return a FormGroup instance', () => {

        @Model()
        @FormModel()
        class DemoForm {
          @FormProp() inForm: string;
        }
        expect(serialize(new DemoForm())).toBeInstanceOf(FormGroup);

      });

      it('should apply exclude logic', () => {

        @Model()
        @FormModel()
        class DemoForm {
          @Exclude() @FormProp() modelExcluded: string;
          @FormProp({
            exclude: true
          }) formExcluded: string;

          @FormProp() inForm: string;
        }

        const fg = serialize(new DemoForm());

        expect(fg.get('modelExcluded')).toBeNull();
        expect(fg.get('formExcluded')).toBeNull();
        expect(fg.get('inForm')).toBeInstanceOf(FormControl);

      });

      it('should apply transformation', () => {

        @Model()
        @FormModel()
        class DemoForm {
          @FormProp({
            transform: () => 'test'
          }) inForm: string;
        }

        const fg = serialize(new DemoForm());

        expect(fg.get('inForm').value).toEqual('test');

      });

      it('should apply defaultValue logic', () => {

        @Model()
        @FormModel()
        class DemoForm {
          @FormProp({
            defaultValue: 'defaultValue'
          }) inFormPreSet: string = '';

          @FormProp({
            defaultValue: 'defaultValue'
          }) inForm: string;
        }

        const fg = serialize(new DemoForm());
        expect(fg.get('inForm').value).toEqual('defaultValue');
        expect(fg.get('inFormPreSet').value).toEqual('');
      });

      it('should map complex objects based on childForm', () => {
        const obj = { x: 1, y: 2 };

        @Model()
        @FormModel()
        class DemoForm {
          @FormProp({
            render: { type: 'text' },
            childForm: true
          }) complexObject1: any = obj;

          @FormProp({
            render: { type: 'text' },
            childForm: false
          }) complexObject2: any = obj;

        }

        const fg = serialize(new DemoForm());

        // childForm: true -> complex object is converted into a FormGroup
        expect(fg.get('complexObject1')).toBeInstanceOf(FormGroup);
        expect(fg.get('complexObject1').value).not.toBe(obj);
        expect(fg.get('complexObject1').value.x).toEqual(obj.x);
        expect(fg.get('complexObject1').value.y).toEqual(obj.y);

        // childForm: false -> complex object is converted into a FormControl, user responsible for rendering.
        expect(fg.get('complexObject2')).toBeInstanceOf(FormControl);
        expect(fg.get('complexObject2').value).toBe(obj);

      });

      it('should map known models based on childForm', () => {
        @Model()
        @FormModel()
        class DemoChildForm {
          @FormProp() val1: boolean;
          @FormProp() val2: number;
          @FormProp() val3: string;
        }

        const obj = new DemoChildForm();
        obj.val1 = true;
        obj.val2 = 10;
        obj.val3 = 'test';

        @Model()
        @FormModel()
        class DemoForm {
          @FormProp({
            render: { type: 'text' },
            childForm: true
          }) child1: DemoChildForm = obj;

          @FormProp({
            render: { type: 'text' },
            childForm: false
          }) child2: DemoChildForm = obj;

        }

        const fg = serialize(new DemoForm());

        // childForm: true -> complex object is converted into a FormGroup
        expect(fg.get('child1')).toBeInstanceOf(FormGroup);
        expect(fg.get('child1').value).not.toBe(obj);
        expect(fg.get('child1').get('val1').value).toEqual(obj.val1);
        expect(fg.get('child1').get('val2').value).toEqual(obj.val2);
        expect(fg.get('child1').get('val3').value).toEqual(obj.val3);

        // childForm: false -> complex object is converted into a FormControl, user responsible for rendering.
        expect(fg.get('child2')).toBeInstanceOf(FormControl);
        expect(fg.get('child2').value).toBe(obj);

      });

      it('should add required validation', () => {

        @Model()
        @FormModel()
        class DemoForm {
          @FormProp(
            {
              required: true
            }
          ) required: string;
        }
        const required = serialize(new DemoForm()).get('required');

        required.updateValueAndValidity();
        expect(required.hasError('required')).toEqual(true);

        required.setValue('test');
        expect(required.hasError('required')).toEqual(false);
      });

      it('should add custom validation', () => {

        @Model()
        @FormModel()
        class DemoForm {
          @FormProp(
            {
              validators: [
                (value: AbstractControl) => {
                  if (value.value === 'fail') {
                    return {
                      myCustomValidator: 'myCustomValidator failed'
                    }
                  } else {
                    return null;
                  }
                },
                (value: AbstractControl) => {
                  return {
                    alwaysFail: 'alwaysFail failed'
                  }
                }
              ]
            }
          ) required: string;
        }
        const required = serialize(new DemoForm()).get('required');

        required.updateValueAndValidity();
        expect(required.hasError('alwaysFail')).toEqual(true);
        expect(required.errors['alwaysFail']).toEqual('alwaysFail failed');
        expect(required.hasError('myCustomValidator')).toEqual(false);

        required.setValue('fail');
        expect(required.hasError('alwaysFail')).toEqual(true);
        expect(required.errors['alwaysFail']).toEqual('alwaysFail failed');
        expect(required.hasError('myCustomValidator')).toEqual(true);
        expect(required.errors['myCustomValidator']).toEqual('myCustomValidator failed');
      });

      it('should add custom async validation', () => {

        @Model()
        @FormModel()
        class DemoForm {
          @FormProp(
            {
              asyncValidators: [
                (value: AbstractControl) => {
                  return new Promise<any>( resolve => {
                    setTimeout(() => {
                      if (value.value === 'fail') {
                        resolve({
                          myCustomValidator: 'myCustomValidator failed'
                        });
                      } else {
                        resolve(null)
                      }
                    }, 5);
                  });
                },
                (value: AbstractControl) => {
                  return new Promise<any>( resolve => {
                    setTimeout(() => {
                      resolve({
                        alwaysFail: 'alwaysFail failed'
                      });
                    }, 5);
                  });
                }
              ]
            }
          ) required: string;
        }
        const required = serialize(new DemoForm()).get('required');


        return new Promise<any>( resolve => {
          required.updateValueAndValidity();
          setTimeout(() => resolve() , 20);
        })
          .then(() => {
            expect(required.hasError('alwaysFail')).toEqual(true);
            expect(required.errors['alwaysFail']).toEqual('alwaysFail failed');
            expect(required.hasError('myCustomValidator')).toEqual(false);
          })
          .then( () => {
            return new Promise<any>( resolve => {
              required.setValue('fail');
              setTimeout(() => resolve() , 20);
            });
          }).then( () => {
            expect(required.hasError('alwaysFail')).toEqual(true);
            expect(required.errors['alwaysFail']).toEqual('alwaysFail failed');
            expect(required.hasError('myCustomValidator')).toEqual(true);
            expect(required.errors['myCustomValidator']).toEqual('myCustomValidator failed');
          });
      });
    });
  })
});

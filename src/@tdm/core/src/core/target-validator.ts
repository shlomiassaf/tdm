import { targetStore, PropMetadata, LazyInit } from '@tdm/transformation';
import { Validator, ValidationError, ValidationContext } from '../fw';

/**
 * @internal
 */
export interface CompiledValidation {
  validators: Validator[],
  prop: PropMetadata;
}

/**
 * @internal
 */
export function getInstructions(targetType: any): CompiledValidation[] {
  // TODO: once @Validators are allowed (along with PropMetadata#Validators) aggregate here.
  return targetStore.getTargetMeta(targetType).getValues(PropMetadata)
    .map( prop => ({
        validators: prop.validation,
        prop
      }));
}

export class TargetValidator {

  /**
   * @internal
   */
  @LazyInit(function (this: TargetValidator): CompiledValidation[] {
    return getInstructions(this.targetType);
  })
  meta: CompiledValidation[];

  constructor(private targetType: any) {
  }

  validate(instance: any): Promise<ValidationError[]> {
    const promises: Array<Promise<{ context: ValidationContext; validators: Validator[]}>> = [];
    const meta = this.meta;

    meta.forEach( p => {
      const context = {
        member: p.prop.name,
        target: instance,
        value: instance[p.prop.name],
        type: p.prop.type
      };
      const propValidations = p.validators.map( validator => {
        return Promise.resolve(validator.validate(context))
          .then( result => !result ? validator : undefined );
      });

      const promise = Promise.all(propValidations)
        .then( results => {
          return {
            context,
            validators: results.filter( v => !!v )
          }
        });

      promises.push(promise)
    });

    return Promise.all(promises)
      .then( results => results
        .filter( r => r.validators.length > 0 )
        .map( r => {
          return {
            context: r.context,
            errors: r.validators.reduce( (prev, v) => {
              prev[v.name] = v.errorMessage(r.context);
              return prev;
            }, {})
          }
        }));
  }
}

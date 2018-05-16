import { Validators, ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export interface BuiltInValidations {
  required?: boolean;
}

function normValidators(v: any): any[] {
  return !v ? [] : Array.isArray(v) ? v.slice() : [v];
}

// tslint:disable-next-line
export function getValidators(
  obj: {
    validators: ValidatorFn | ValidatorFn[] | null;
    asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null;
  },
  builtIn?: BuiltInValidations
): [ValidatorFn | null, AsyncValidatorFn | null] {
  const sync: ValidatorFn[] = normValidators(obj.validators);
  const async = normValidators(obj.asyncValidators);

  if (builtIn) {
    if (builtIn.required === true) {
      sync.push(Validators.required);
    }
  }

  return [
    sync.length > 0 ? Validators.compose(sync) : null,
    async.length > 0 ? Validators.composeAsync(async) : null
  ];
}

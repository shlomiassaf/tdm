import { isNumber, errors } from '@tdm/core/tdm';
import { ValidationContext } from './fw';

const undef = undefined;

function isTypeof(value, type: any): boolean {
  switch (type) {
    case Boolean:
      return typeof value === 'boolean';
    case String:
      return typeof value === 'string';
    case Number:
      return typeof value === 'number';
    default:
      return false;
  }
}

/**
 * Validates that the value is declared on the object, i.e. hasOwnProperty
 * The value can be undefined, null or any other falsy expression.
 *
 */
export const declared = {
  name: 'declared',
  validate(ctx: ValidationContext): boolean {
    return ctx.target.hasOwnProperty(ctx.member);
  },
  errorMessage(ctx: ValidationContext) {
    return `Property ${ctx.member} is not declared`;
  }
};

/**
 * Validates that the value is present, i.e. the value is not undefined and not null.
 */
export const required = {
  name: 'required',
  validate(ctx: ValidationContext): boolean {
    return ctx.value !== undef && ctx.value !== null;
  },
  errorMessage(ctx: ValidationContext) {
    return `Property ${ctx.member} is required`;
  }
};

/**
 * Checks if the value is an instance of it's type.
 * If instanceOf check fails and the type is Boolean, String or Number and additional check is done
 * using the typeof operator.
 */
export const instanceOf = {
  name: 'instanceOf',
  validate(ctx: ValidationContext): boolean {
    return ctx.value instanceof ctx.type || isTypeof(ctx.value, ctx.type);
  },
  errorMessage(ctx: ValidationContext) {
    return `Property ${ctx.member} is not an instance of ${ctx.type.name}`;
  }
};

/**
 * Validates that the value is greater than or equal to the minimum.
 * Does not validate that value is a number.
 */
export class Min {
  readonly name = 'minimum';

  constructor(private min: number) {
    if (!isNumber(min)) {
      errors.throw.validationConfig(this.name, 'input "min" is not a number');
    }
  }

  validate(ctx: ValidationContext): boolean {
    return ctx.value >= this.min;
  }

  errorMessage(ctx: ValidationContext) {
    return `Property ${ctx.member} must be greater than or equal to ${
      this.min
    }`;
  }
}

/**
 * Validates that the value is less than or equal to the maximum.
 * Does not validate that value is a number.
 */
export class Max {
  readonly name = 'maximum';

  constructor(private max: number) {
    if (!isNumber(max)) {
      errors.throw.validationConfig(this.name, 'input "max" is not a number');
    }
  }

  validate(ctx: ValidationContext): boolean {
    return ctx.value <= this.max;
  }

  errorMessage(ctx: ValidationContext) {
    return `Property ${ctx.member} must be less than or equal to ${this.max}`;
  }
}

/**
 * Validates that the value is between (but not equal to) the minimum and maximum.
 * Does not validate that value is a number.
 */
export class Between {
  readonly name = 'between';

  constructor(private min: number, private max: number) {
    if (!isNumber(min)) {
      errors.throw.validationConfig(this.name, 'input "min" is not a number');
    }
    if (!isNumber(max)) {
      errors.throw.validationConfig(this.name, 'input "max" is not a number');
    }
  }

  validate(ctx: ValidationContext): boolean {
    return ctx.value > this.min && ctx.value < this.max;
  }

  errorMessage(ctx: ValidationContext) {
    return `Property ${ctx.member} must be between ${this.min} and ${this.max}`;
  }
}

export const validators = {
  declared,
  required,
  instanceOf,
  Min,
  Max,
  Between
};

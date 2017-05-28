import { tdm, TDMModel } from '@tdm/core';
import { AdapterStatic, ValidationError } from './interfaces';

const { stringify } = tdm;

function getErrorName(type: Function): string {
  return `TDM${type.name}`;
}

export class TDMError extends Error {

}

export class PluginError extends TDMError {
  constructor(public pluginName: string, message: string) {
    super(message);
    this.name = getErrorName(PluginError);
  }

  static missing(name: string): DecoratorError {
    return new PluginError(name, `Unknown plugin "${name}"`);
  }

}


export class DecoratorError extends TDMError {
  constructor(target: any, propertyName: PropertyKey, message: string) {
    super(`Invalid decorator @ ${stringify(target)}#${stringify(propertyName)}: ${message}`);
    this.name = getErrorName(DecoratorError);
  }

  static hookNoStatic(target: any, propertyName: PropertyKey, action: string): DecoratorError {
   return new DecoratorError(target, propertyName, `Hook '${action}' can only decorate instance methods`);
  }

  static hookNoInstance(target: any, propertyName: PropertyKey, action: string): DecoratorError {
    return new DecoratorError(target, propertyName, `Hook '${action}' can only decorate instance methods`);
  }
}


export class AdapterError extends TDMError {
  constructor(public adapterClass: AdapterStatic<any, any>, message: string) {
    super(message);
    this.name = getErrorName(AdapterError);
  }

  static notRegistered(adapterClass: AdapterStatic<any, any>): AdapterError {
    return new AdapterError(adapterClass, `Adapter '${stringify(adapterClass)}' is not a registered Adapter`);
  }

  static notRegisteredFor(adapterClass: AdapterStatic<any, any>, target: any): AdapterError {
    return new AdapterError(adapterClass, `Adapter '${stringify(adapterClass)}' is not a registered Adapter for target '${target}'`);
  }

  static registered(adapterClass: AdapterStatic<any, any>, existsIn: string): AdapterError {
    return new AdapterError(adapterClass, `Adapter '${stringify(adapterClass)}' already registered for '${existsIn}'`);
  }
}

export class TargetError extends TDMError {
  constructor(public target: any, message: string) {
    super(message);
    this.name = getErrorName(TargetError);
  }

  static built(target: any, adapterClass: AdapterStatic<any, any>): TargetError {
    return new TargetError(target, `Target/Adapter ${stringify(target)}/${stringify(adapterClass)} is already built`);
  }

  static noActiveAdapter(target: any): TargetError {
    return new TargetError(target, `Target ${stringify(target)} has no active adapter registered.`);
  }

  /**
   * Fires an error that indicates that the target does not have a {@link ModelMetadata}
   * instance registered (or any {@link ModelMetadata} derived instance).
   * This usually means that the target is not decorated with @Model (or any adapter specific implementation of @Model)
   * @param target
   * @returns {TargetError}
   */
  static notModel(target: any): TargetError {
    return new TargetError(target, `Target ${stringify(target)} is not a model, make sure it is decorated with a @Model decorator (or any derived adapter specific Model decorator)`);
  }
}

export class ResourceError extends TDMError {
  constructor(public readonly ar: TDMModel<any>, message?: string) {
    super(message);
    this.name = getErrorName(ResourceError);
  }

  static coll_obj(ar: TDMModel<any>, expectedCol: boolean): ResourceError {
    return new ResourceError(null, expectedCol
      ? `Expected a collection but got an object`
      : `Expected an object but got a collection`
    );
  }
}

export class ResourceValidationError extends ResourceError {
  constructor(ar: TDMModel<any>, public readonly validationErrors: ValidationError[]) {
    super(ar)
  }
}

export class ValidationConfigError extends Error {
  constructor(validationName: string, message: string) {
    super(`Invalid validation configuration params for "${validationName}": ${message}`);
  }
}

import { Errors, stringify } from '@tdm/core/tdm';
import { AdapterStatic, ValidationError } from './interfaces';

const pt = Errors.prototype;

declare module '@tdm/core/tdm/src/fw/errors' {
  interface Errors {
    validation(model: any, errors: ValidationError[]): Error & { errors: ValidationError[] };
    validationConfig(validationName: string, message: string): Error;
    modelNoAdapter(model: any): Error;
    plugin(pluginName: string, message: string): Error;
    pluginMissing(pluginName: string): Error;
    adapter(adapterClass: AdapterStatic<any, any>, message: string): Error;
    adapterRegistered(adapterClass: AdapterStatic<any, any>, registeredIn?: any): Error;
    adapterNotRegistered(adapterClass: AdapterStatic<any, any>, model?: any): Error;
  }
}

pt.modelNoAdapter = function modelNoAdapterError(this: Errors, model: any): Error {
  return this.model(model, `No active adapter registered.`);
};

pt.validation = function validationError(this: Errors, model: any, errors: ValidationError[]): Error & { errors: ValidationError[] } {
  // TODO: print validation errors
  return this.ERROR(`Validation Error [${stringify(model)}]`, { errors });
};

pt.validationConfig = function validationConfigError(this: Errors, validationName: string, message: string): Error {
  return this.ERROR(`Invalid validation configuration params for "${validationName}": ${message}`);
};

pt.plugin = function plugin(this: Errors, pluginName: string, message: string): Error {
  return this.ERROR(`Plugin Error [${pluginName}]: ${message}`);
};

pt.pluginMissing = function plugin(this: Errors, pluginName: string): Error {
  return this.plugin(pluginName, `Unknown or missing plugin`);
};

pt.adapter = function adapter(adapterClass: AdapterStatic<any, any>, message: string): Error {
  return this.ERROR(`Adapter Error [${stringify(adapterClass)}]: ${message}`);
};

pt.adapterRegistered = function adapterRegistered(adapterClass: AdapterStatic<any, any>, registeredIn?: any): Error {
  return this.adapter(adapterClass, `Adapter already registered${ registeredIn ? ` (in ${stringify(registeredIn)})` : '' }`);
};

pt.adapterNotRegistered = function adapterNotRegistered(adapterClass: AdapterStatic<any, any>, model?: any): Error {
  return this.adapter(adapterClass, `Adapter not registered${ model ? ` (in ${stringify(model)})` : '' }`);
};

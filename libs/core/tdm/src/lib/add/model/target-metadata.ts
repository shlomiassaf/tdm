import { TargetMetadata } from '../../metadata';
import { ModelMetadata, MODEL_PH } from './model';

declare module '../../metadata/target-metadata' {
  interface TargetMetadata<T = any, Z = any> {
    /**
     * Indicates if the model returned from model() is a placeholder or a {@link ModelMetadata} instance.
     */
    hasModel: boolean;

    /**
     * Returns a placeholder or the {@link ModelMetadata} instance (or a derived class instance) for the target.
     *
     * If a {@link ModelMetadata} instance is not yet created, a plain object is returned.
     * The plain object is used a a placeholder for storing model metadata before the instance get's created.
     *
     * Use the `hasModel` property to check if it is a plain object or a {@link ModelMetadata} instance
     */
    model<T extends ModelMetadata>(): T | undefined;
  }
}

Object.defineProperty(TargetMetadata.prototype, 'model', {
  value: function(this: TargetMetadata) {
    // this[MODEL_PH] is set from ModelMetadata constructor
    // if not set, create one to act as temporary placeholder until set.
    // ModelMetadata will grab the data on the placeholder and take it into account
    return this[MODEL_PH] || (this[MODEL_PH] = {});
  }
});

Object.defineProperty(TargetMetadata.prototype, 'hasModel', {
  get: function(this: TargetMetadata) {
    return this[MODEL_PH] instanceof ModelMetadata;
  }
});

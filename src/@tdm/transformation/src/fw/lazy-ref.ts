/**
 * Same as angular's `forwardRef`, different name to prevent confusion / collusion.
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { isFunction, stringify, Constructor } from './utils';

const lazyRefKey = Symbol('lazyRef');
const toString = function() { return stringify(this()); };

/**
 * Allows to refer to references which are not yet defined.
 *
 * For instance, `lazyRef` is used when the `token` which we need to refer to for the purposes of
 * DI is declared,
 * but not yet defined. It is also used when the `token` which we use when creating a query is not
 * yet defined.
 *
 * ### Example
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
 * @experimental
 */
export function lazyRef<T extends Constructor<any>>(lazyRefFn: () => T): T {
  lazyRefFn[lazyRefKey] = lazyRef;
  lazyRefFn.toString = toString;
  return lazyRefFn as any;
}

export module lazyRef {
  /**
   * Lazily retrieves the reference value from a lazyRef.
   *
   * Acts as the identity function when given a non-forward-ref value.
   *
   * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
   *
   * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
   *
   * See: {@link lazyRef}
   * @experimental
   */
  export function resolve(type: any): Constructor<any> {
    return isFunction(type) && type[lazyRefKey] === lazyRef
      ? type()
      : type
    ;
  }
}


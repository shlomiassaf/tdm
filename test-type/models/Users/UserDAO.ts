/**
 * Model usage example - Base class implementation
 *
 * This example demonstrates model creation using 2 concrete classes.
 * A private base class that exposes all of the structure and provides implementation and an exposed empty class.
 * The base class is wrapping an empty class that is used as an export, this class should be left empty.
 *
 * Pros:
 *   - Single class, no interface, all in one place
 *   - Single place for concrete implementation
 *   - Can't make mistakes of implementing public API in wrong place.
 *   - Allows inheritance
 *
 * Cons:
 *   - Requires manual type creation (https://github.com/Microsoft/TypeScript/issues/6606)
 *   - For multiple mixins need to create type without ActiveRecord<> help.
 *     https://github.com/Microsoft/TypeScript/issues/13798
 *   - Won't work with angular DI + AOT (https://github.com/angular/angular/issues/14128)
 */


import { Injectable } from '@angular/core';
import { Hook, BeforeHook, AfterHook, TDMCollection, Prop, Exclude, ExecuteResponse, ExtendAction, ExecuteContext, IdentityValueType, Identity } from '@tdm/data';
import { ActiveRecord, HttpResource, HttpAction, UrlParam, HttpActionOptions, HttpActionMethodType } from '@tdm/ngx-http-client';

@HttpResource({
  endpoint: '/path'
})
export class UserDAO {
  @Identity()
  id: number;
  username: string;
  static num: number;
}

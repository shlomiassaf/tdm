import * as localForage from 'localforage';
import * as uuid from 'uuid/v4';
import { ModelMetadata, SetExt } from '@tdm/core/tdm';

import {
  Adapter,
  DAOMethodType,
  ExecuteContext,
  ExecuteParams,
  AdapterResponse,
  ExecuteResponse, ActionMethodType
} from '@tdm/data';

import { LocalForageResourceMetadata, LocalForageActionMetadata } from '../metadata';
import { LocalForageActionOptions } from './interfaces';

const KEY_PREFIX = 'tdm';
const METADATA_TABLE = '__METADATA_TABLE__';

function isValidString (value: string): boolean {
  return (value != null && value !== '');
}
function makePath (...args: string[]): string {
  return args.filter(isValidString).join('/').replace(/([^:\/]|^)\/{2,}/g, '$1/');
}

const promiseQueue = {
  queue: [] as Array<{ task: () => Promise<any>, resolve: (value?: any) => void, reject: (err: Error) => void}>,
  running: null as Promise<any[]>,
  runPending: false as boolean,
  get length(): number {
    return this.queue.length + (this.running ? 1 : 0);
  },
  enqueue<T = any>(task: () => Promise<T>, run?: boolean): Promise<T> {
    if (run === true && !this.running) {
      this.runAsMacroTask();
    }
    return new Promise<T>( (resolve, reject) => this.queue.push({ resolve, reject, task }) );
  },
  dequeue(): Promise<any> {
    if (this.queue.length > 0) {
      const t = this.queue.shift();
      return t.task()
        .then((value) => {
          t.resolve(value);
          return value;
        })
        .catch( err => {
          t.reject(err);
          return err;
        });
    } else {
      return Promise.reject(new Error('Queue is empty'));
    }
  },
  runAsMacroTask(): void {
    if (!this.runPending && !this.running) {
      this.runPending = true;
      setTimeout(() => this.run(), 0);
    }
  },
  run(): typeof promiseQueue {
    if (!this.running && this.queue.length > 0) {
      let resolve: (value: any) => void;
      const result: any = [];
      const drain = value => {
        result.push(value);
        if (this.queue.length === 0) {
          this.running = null;
          this.runPending = false;
          resolve(result);
        } else {
          this.dequeue().then(drain);
        }
      };
      this.running = new Promise<any[]>( r => resolve = r);
      this.dequeue().then(drain);
    }
    return this;
  }
};

export class LocalForageAdapter implements Adapter<LocalForageActionMetadata, LocalForageActionOptions> {
  readonly supports = { cancel: false };

  private idCount = 1;

  execute(ctx: ExecuteContext<LocalForageActionMetadata>,
          options: LocalForageActionOptions,
          params: ExecuteParams): AdapterResponse {
    const id = this.idCount++;
    return {
      id,
      response: promiseQueue.enqueue(() => this._execute(ctx, options, params), true)
    };
  }

  cancel(id: number): void { } // tslint:disable-line:no-empty

  protected _execute(ctx: ExecuteContext<LocalForageActionMetadata>,
                     options: LocalForageActionOptions,
                     params: ExecuteParams): Promise<ExecuteResponse> {
    try {
      options = options || <any> {};
      const {action} = ctx;
      const resource = ctx.targetMeta.model<LocalForageResourceMetadata>();

      if (!resource) {
        return Promise.reject(new Error('LocalForage resource not set.'));
      }

      const resourceKey = this.getResourceKey(resource);
      const executeResponse: ExecuteResponse = { data: undefined };
      let response: Promise<any>;
      switch (action.method) {
        case ActionMethodType.READ:
          response = action.isCollection
            ? this.getAll(resource)
            : this.getById(resource, ctx.instance || ctx.data)
          ;
          break;
        case ActionMethodType.DELETE:
          const actionName: keyof DAOMethodType = <any> action.name;
          executeResponse.skipDeserialize = true;
          if (actionName === 'remove') {
            const idToRemove = ctx.data[resource.identity];
            response = this.removeId(resourceKey, idToRemove)
              .then( () => localForage.removeItem(this.appendKey(resourceKey, idToRemove)) );
          } else if (actionName === 'clear') {
            response = this.removeTable(resourceKey);
          } else {
            response = Promise.reject(`Unknown DELETE command "${actionName}"`);
          }
          break;
        case ActionMethodType.CREATE:
          if (action.name === 'create') {
            response = this.getById(resource, ctx.data)
              .then( item => {
                if ( item ) {
                  return Promise
                    .reject(new Error(`${resource.resName} with identity ${item[resource.identity]} exists`));
                } else {
                  if (resource.autoGenIdentity === true) {
                    ctx.data[resource.identity] = uuid();
                  }
                  const idToCreate = ctx.data[resource.identity];
                  ctx.deserialize(ctx.data);
                  return this.ensureId(resourceKey, idToCreate)
                    .then( () => localForage.setItem(this.appendKey(resourceKey, idToCreate), ctx.serialize()));
                }
              });
          } else if (action.name === 'createBulk') {
            response = this.getKeys(this.getResourceKey(resource))
              .then( keys => {
                  const promises: Array<Promise<any>> = [];
                  const ids: any[] = [];
                  const singleCtx = new ExecuteContext(
                    ctx.targetMeta,
                    Object.create(ctx.action, {isCollection: { value: false } })
                  );
                  for (let d of ctx.data) {
                    if (resource.autoGenIdentity === true) {
                      d[resource.identity] = uuid();
                    }
                    let currId = d[resource.identity];

                    if (keys.has(currId)) {
                      promises.push(Promise.reject(new Error(`${resource.resName} with identity ${currId} exists`)));
                    } else {
                      ids.push(currId);
                      let c = singleCtx.clone();
                      c.deserialize(d);
                      promises.push(
                        localForage.setItem(this.appendKey(resourceKey, currId), c.serialize())
                      );
                    }
                  }
                  return this.ensureId(resourceKey, ...ids).then( () => Promise.all(promises) );
              });
          }
          break;
        case ActionMethodType.REPLACE:
        case ActionMethodType.UPDATE:
          response = this.getById(resource, ctx.data)
            .then( item => {
              if (!item) {
                return Promise.reject(new Error('Not Found'));
              } else {
                const idToUpdate = ctx.data[resource.identity];
                let newCtx: ExecuteContext<any>;

                if (action.method === ActionMethodType.UPDATE) {
                  newCtx = ctx.clone();
                  newCtx.deserialize(item);
                } else {
                  newCtx = ctx;
                }
                newCtx.deserialize(ctx.data);
                return localForage.setItem(this.appendKey(resourceKey, idToUpdate), newCtx.serialize());
              }
            });
          break;
        default:
          response = Promise.resolve();
          break;
      }
      return response.then( value => {
        executeResponse.data = value;
        return executeResponse;
      });

    } catch (err) {
      return Promise.reject(err);
    }
  }

  private getAll(resource: ModelMetadata): Promise<any[]> {
    const resourceKey = this.getResourceKey(resource);
    return this.getKeys(resourceKey, true)
      .then( keys => {
        return Promise.all(
          keys.map( k => localForage.getItem(this.appendKey(resourceKey, k)) )
        );
      });
  }

  private getById(resource: ModelMetadata, instance: any): Promise<any> {
    return localForage.getItem(this.getInstanceKey(resource, instance));
  }

  private appendKey(resourceKey: string, instanceKey: string): string {
    return `${resourceKey}.${instanceKey}`;
  }

  private getResourceKey(resource: ModelMetadata): string {
    return `${KEY_PREFIX}.${resource.resName}`;
  }

  private getInstanceKey(resource: ModelMetadata, instance: any): string {
    const identValue = instance[resource.identity];
    return `${this.getResourceKey(resource)}.${identValue}`;
  }

  private getKeys(resourceKey: string, asArray: true): Promise<string[]>;
  private getKeys(resourceKey: string): Promise<Set<string>>;
  private getKeys(resourceKey: string, asArray?: true): Promise<Set<string> | string[]> {
    return localForage.getItem(resourceKey)
      .then( (ids: string[]) => {
        if (asArray === true) {
          return ids || [];
        } else {
          return new Set<string>(ids || []);
        }
      });
  }

  private saveKeys (resourceKey: string, keys?: Set<string>): Promise<Set<string> | undefined> {
    return localForage.getItem(resourceKey)
      .then( resourceTable => {
        const isRemove = !(keys && keys.size);
        if (isRemove) {
          if (resourceTable) {
            return this.removeTable(resourceKey);
          }
        } else {
          if (!resourceTable) {
            return this.addTable(resourceKey,  SetExt.asArray(keys));
          } else {
            return <any> localForage.setItem(resourceKey, SetExt.asArray(keys));
          }
        }
      })
      .then(() => keys);
  }

  private ensureId (resourceKey: string, ...ids: string[]): Promise<Set<string>> {
    return this.getKeys(resourceKey)
      .then(foundIds => {
        for (let id of ids) {
          foundIds.add(id);
        }
        return this.saveKeys(resourceKey, foundIds);
      });
  }

  private removeId (resourceKey: string, ...ids: string[]): Promise<Set<string>> {
    return this.getKeys(resourceKey)
      .then(foundIds => {
        for (let id of ids) {
          foundIds.delete(id);
        }
        return this.saveKeys(resourceKey, foundIds);
      });
  }

  private removeTable(key: string): Promise<void> {
    const metaKey = `${KEY_PREFIX}.${METADATA_TABLE}`;
    return localForage.getItem(metaKey)
      .then( (metaTableArray: string[]) => {
        const metaTable = new Set<string>(metaTableArray || []);
        metaTable.delete(key);
        return <any> localForage.setItem(metaKey, SetExt.asArray(metaTable)) // update tables map
          .then( () => this.getKeys(key, true) ) // get all rows
          .then( keys => Promise.all( // remove each row
            keys.map( k => localForage.removeItem(this.appendKey(key, k)) )
          ))
          .then(() => localForage.removeItem(key) ); // remove table
      });
  }

  private addTable(key: string, content: any): Promise<void> {
    const metaKey = `${KEY_PREFIX}.${METADATA_TABLE}`;
    return localForage.getItem(metaKey)
      .then( (metaTableArray: string[]) => {
        const metaTable = new Set<string>(metaTableArray || []);
        metaTable.add(key);
        return <any> localForage.setItem(metaKey, SetExt.asArray(metaTable))
          .then( () => {
            if (content) {
              return localForage.setItem(key, content);
            }
          });
      });
  }
}

LocalForageActionMetadata.adapterClass = LocalForageAdapter;

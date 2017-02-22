import { MetadataStatic, metadataFactory } from './index';
import { ActionMetadata, ActionMetadataArgs } from "./action";
import { ResourceMetadata } from "./resource";
import { TargetAdapterMetadataStore } from '../reflection';
import { DeserializerFactory } from "../../core/index";
import { DecoratorInfo } from './core';
import { array } from '../../utils';

export interface AdapterMetadataArgs<T extends ResourceMetadata, Z extends ActionMetadata> {
  actionMetaClass: MetadataStatic<any, Z>;
  resourceMetaClass: MetadataStatic<any, T>;

  /**
   * Factory that returns an DeserializerFactory
   * Each adapter must have at least one default deserializer.
   * Resource's and Action's can define specific deserializer factories, the order of deserializers
   * selection is: action -> resource -> adapter
   */
  deserializerFactory: DeserializerFactory;
  commit?(adapterStore: TargetAdapterMetadataStore): void;
}

export class AdapterMetadata<T extends ResourceMetadata, Z extends ActionMetadata> {
  actionMetaClass: MetadataStatic<any, Z>;
  resourceMetaClass: MetadataStatic<any, T>;
  deserializerFactory: DeserializerFactory;
  commit?: (adapterStore: TargetAdapterMetadataStore) => void;

  private actions = new Map<any, ActionMetadata[]>();

  constructor(obj: AdapterMetadataArgs<T, Z>) {
    Object.assign(this, obj);
  }

  addAction(target: any, actionArgs: ActionMetadataArgs<any>, info: DecoratorInfo): void {
    const actionMetadata = metadataFactory(this.actionMetaClass, actionArgs, info);
    const actions = this.actions.get(target) || [];
    actions.push(actionMetadata);
    this.actions.set(target, actions);
  }

  getActions(...targets: any[]): ActionMetadata[] {
    const metadataColl = targets.map( t => this.actions.get(t) ).filter( t => !!t );
    return array.flatten(metadataColl);
  }

  static DEFAULTS: AdapterMetadataArgs<any, any> = {} as any;

  static VALIDATE(obj: AdapterMetadataArgs<any, any>): void {
    ['actionMetaClass', 'resourceMetaClass']
      .forEach( k => {
        if (!obj.hasOwnProperty(k) || !obj[k]) {
          throw new Error('Resource plugin is missing ' + k);
        }
      });
  }
}

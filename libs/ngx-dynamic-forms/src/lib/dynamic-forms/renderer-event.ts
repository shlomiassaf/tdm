import {
  DynamicControlRenderContext,
  TDMModelForm
} from '../tdm-model-form/tdm-model-form';

// tslint:disable-next-line
export interface RENDERER_EVENTS {
  custom: any;
  childFormEdit: any;
  arrayMove: any;
  arrayAdd: any;
  arrayRemove: any;
}

export interface RendererEventBase<
  T extends keyof RENDERER_EVENTS = keyof RENDERER_EVENTS
> {
  type: T;
  context: DynamicControlRenderContext;
}

export interface CustomRendererEvent extends RendererEventBase<'custom'> {
  subType: string;
  data?: any;
}

export interface ChildFormEditRendererEvent
  extends RendererEventBase<'childFormEdit'> {
  type: 'childFormEdit';
  isNew: boolean;
  createTDMModelForm<T extends any>(): TDMModelForm<T>;
  reset(): void;
}

export interface ArrayAddRendererEvent extends RendererEventBase<'arrayAdd'> {
  /**
   * Location to add to, optional.
   * When not set will be added last.
   */
  atIdx?: number;

  /**
   * When true the action was already executed, this is just a notification
   *
   * A renderer might choose to implement the action, when so this will be set to true.
   */
  executed?: boolean;
}

export interface ArrayMoveRendererEvent extends RendererEventBase<'arrayMove'> {
  /**
   * The index where the item is currently at
   */
  fromIdx: number;
  /**
   * The index where to move the item.
   */
  toIdx: number;

  /**
   * When true the action was already executed, this is just a notification
   *
   * A renderer might choose to implement the action, when so this will be set to true.
   */
  executed?: boolean;
}

export interface ArrayRemoveRendererEvent
  extends RendererEventBase<'arrayRemove'> {
  /**
   * The index where to remove the item from.
   */
  atIdx: number;

  /**
   * When true the action was already executed, this is just a notification
   *
   * A renderer might choose to implement the action, when so this will be set to true.
   */
  executed?: boolean;
}

export type RendererEvent =
  | CustomRendererEvent
  | ChildFormEditRendererEvent
  | ArrayAddRendererEvent
  | ArrayMoveRendererEvent
  | ArrayRemoveRendererEvent;

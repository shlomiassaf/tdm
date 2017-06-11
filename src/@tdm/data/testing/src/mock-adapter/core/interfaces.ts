import { ActionOptions } from '@tdm/data';

export interface BaseMockConfig {
}


export interface MockActionOptions extends BaseMockConfig, ActionOptions {
  timeout?: number;
  returnValue?: any;
  throwError?: Error;
  payloadInspect?: (payload: any) => void;
}

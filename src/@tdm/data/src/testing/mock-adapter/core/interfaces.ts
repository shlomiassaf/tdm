import { ActionOptions } from '@tdm/data';

export interface BaseMockConfig {
}


export interface MockActionOptions extends BaseMockConfig, ActionOptions {
  returnValue?: any;
  throwError?: Error;
  payloadInspect?: (payload: any) => void;
}

import { ClientProtocol, ServerProtocol } from '@tdm/service-mocker/shared';

declare module '@tdm/service-mocker/shared/lib/messaging' {
  export interface ClientProtocol {
    restoreDb: {
      request: { [tableName: string]: any[] };
      response: void;
    };
  }

  export interface ServerProtocol {
    installed: {
      request: {v: string};
      response: number;
    };
  }
}

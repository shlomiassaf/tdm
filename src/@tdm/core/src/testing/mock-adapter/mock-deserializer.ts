import { isFunction } from '@tdm/transformation';

export class MockDeserializer {

  public deserializerFn: (response: any) => any | Promise<any>;

  deserialize(resp: any) {
    return isFunction(this.deserializerFn) ? this.deserializerFn(resp) : resp;
  }

}

export const mockDeserializer = new MockDeserializer();

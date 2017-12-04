import { ActionMethodType } from '@tdm/data';

export enum HttpActionMethodType {
  Get = 0,
  Post = 1,
  Put = 2,
  Delete = 3,
  Options = 4,
  Head = 5,
  Patch = 6,
}

export interface MappedMethod {
  method: ActionMethodType;
  source: HttpActionMethodType;
  local: boolean;
}

const METHOD_MAP: { [method: number]: ActionMethodType } = {
  [HttpActionMethodType.Get]: ActionMethodType.READ,
  [HttpActionMethodType.Post]: ActionMethodType.CREATE,
  [HttpActionMethodType.Put]: ActionMethodType.REPLACE,
  [HttpActionMethodType.Delete]: ActionMethodType.DELETE,
  [HttpActionMethodType.Patch]: ActionMethodType.UPDATE
};

export function mapMethod(method: HttpActionMethodType): MappedMethod {
  const mapped = METHOD_MAP[method];
  return {
    source: method,
    method: typeof mapped === 'undefined' ? ActionMethodType.LOCAL : mapped,
    local: typeof mapped === 'undefined'
  };
}

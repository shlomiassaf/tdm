import { BaseActiveRecord, Constructor } from "@tdm/core";

export function bucketFactory() {
  const bucket: BaseActiveRecord<any>[] = [];
  const create = <T extends BaseActiveRecord<any>>(type: Constructor<T>, ...args: any[]): T => {
    const t = new type(...args);
    bucket.push(t);
    return t;
  };
  return {
    bucket,
    create,
    clear() {
      while(bucket.length > 0) {
        bucket.pop().$ar.disconnect();
      }
    }
  }
}

import { TDMModel, Constructor } from "@tdm/data";

export function bucketFactory() {
  const bucket: TDMModel<any>[] = [];
  const create = <T extends TDMModel<any>>(type: Constructor<T>, ...args: any[]): T => {
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

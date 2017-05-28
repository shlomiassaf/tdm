import { MetaClassInstanceDetails, MetaClassMetadata } from './fw';
import { targetStore } from './metadata';

export const registerHelpers = {
  /**
   * Registers the value as any array.
   * If array does not exists will create one and push the value into it.
   *
   * Handles both single and property style registration.
   * @param meta
   */
  array<TMetaArgs, TMetaClass>(this: MetaClassMetadata<TMetaArgs, TMetaClass> ,
                               meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass>): void {
    const propKey: any = this.metaArgs.single === true ? true : meta.metaPropKey;

    let curr: any[] = <any>targetStore.getMetaFor(meta.target, meta.metaClassKey, propKey);
    if (!curr) {
      targetStore.setMetaFor(meta.target, meta.metaClassKey, propKey, curr = []);
    }

    curr.push(meta.metaValue);
  }
};

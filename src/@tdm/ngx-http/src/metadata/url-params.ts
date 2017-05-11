import { targetStore, DecoratorInfo, BaseMetadata, metaFactoryFactory, MapExt, SetExt, isString, MetaFactoryInstance } from '@tdm/core';
import { mapMethod, MappedMethod, HttpActionMethodType } from './method-mapper';

export interface UrlParamMetadataArgs {
  /**
   * Optional parameter that specifies the name of the URL template parameter.
   * When not provided, the name of the decorated property is used.
   *
   * @optional
   * @default property name
   */
  urlTemplateParamName?: string;

  /**
   * A list of methods the UrlParam applies on.
   * When not provided, applies on all methods.
   *
   * @optional
   * @default undefined
   */
  methods?: HttpActionMethodType | HttpActionMethodType[]
}

export class UrlParamMetadata extends BaseMetadata {
  urlTemplateParamName: string;
  methods: MappedMethod[] = [];

  constructor(metaArgs: UrlParamMetadataArgs | string | undefined, info: DecoratorInfo)  {
    super(info);

    const urlParamsMeta: UrlParamMetadataArgs = {};

    if (isString(metaArgs)) {
      Object.assign(urlParamsMeta, { urlTemplateParamName: metaArgs });
    } else {
      metaArgs && Object.assign(urlParamsMeta, metaArgs);
      if (!urlParamsMeta.urlTemplateParamName) {
        urlParamsMeta.urlTemplateParamName = info.name as any;
      }
    }

    Object.assign(this, urlParamsMeta);

    if (urlParamsMeta.methods) {
      const methods: HttpActionMethodType[] = Array.isArray(urlParamsMeta.methods) ? urlParamsMeta.methods : Array.of(urlParamsMeta.methods);
      this.methods = methods.map(mapMethod);
    } else {
      this.methods = [];
    }
  }

  static metaFactory = metaFactoryFactory<UrlParamMetadataArgs, UrlParamMetadata>(UrlParamMetadata);

  static register(meta: MetaFactoryInstance<UrlParamMetadata>): void {
    const curr = targetStore.getMetaFor<any, Set<UrlParamMetadata>>(meta.target, meta.metaClassKey, meta.info.name as any) || new Set<UrlParamMetadata>();
    curr.add(meta.metaValue);
    targetStore.setMetaFor<any, Set<UrlParamMetadata>>(meta.target, meta.metaClassKey, meta.info.name as any, curr);
  }

  static extend(from: Map<PropertyKey, Set<UrlParamMetadata>>, to: Map<PropertyKey, Set<UrlParamMetadata>> | undefined): Map<PropertyKey, Set<UrlParamMetadata>> {
    if (!to) {
      to = new Map<PropertyKey, Set<UrlParamMetadata>>();
    }

    MapExt.asKeyValArray(from)
      .forEach( ([k, v]) => {
        if (!to.has(k)) {
          to.set(k, new Set<UrlParamMetadata>(v.values()))
        } else {
          SetExt.combine(to.get(k), v);
        }
      });

    return to;
  }
}

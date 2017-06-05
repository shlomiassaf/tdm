import { tdm } from '@tdm/core';
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

function extend(from: Map<PropertyKey, UrlParamMetadata[]>, to: Map<PropertyKey, UrlParamMetadata[]> | undefined): Map<PropertyKey, UrlParamMetadata[]> {
  if (!to) {
    to = new Map<PropertyKey, UrlParamMetadata[]>();
  }

  tdm.MapExt.asKeyValArray(from)
    .forEach( ([k, v]) => {
      if (!to.has(k)) {
        to.set(k, v.slice())
      } else {
        // TODO: need to filter duplicated (based on method)
        to.set(k, to.get(k).concat(v));
      }
    });

  return to;
}

@tdm.MetaClass<UrlParamMetadataArgs, UrlParamMetadata>({
  allowOn: ['member'],
  extend,
  register: tdm.registerHelpers.array,
  proxy: {
    host: tdm.PropMetadata,
    containerKey: 'urlParam'
  }
})
export class UrlParamMetadata extends tdm.BaseMetadata {
  urlTemplateParamName: string;
  methods: MappedMethod[] = [];

  constructor(metaArgs: UrlParamMetadataArgs | string | undefined, info: tdm.DecoratorInfo)  {
    super(info);

    const urlParamsMeta: UrlParamMetadataArgs = {};

    if (tdm.isString(metaArgs)) {
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
}

declare module '@tdm/core/metadata/prop' {
  interface PropMetadataArgs {
    urlParam?: UrlParamMetadataArgs | undefined
  }
}
import {
  isString,
  registerHelpers,
  MapExt,
  BaseMetadata,
  DecoratorInfo,
  PropMetadata,
  MetaClass
} from '@tdm/core/tdm';
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

/** @internal */
export function extend(from: Map<PropertyKey, UrlParamMetadata[]>, to: Map<PropertyKey, UrlParamMetadata[]> | undefined): Map<PropertyKey, UrlParamMetadata[]> {
  if (!to) {
    to = new Map<PropertyKey, UrlParamMetadata[]>();
  }

  MapExt.asKeyValArray(from)
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

@MetaClass<UrlParamMetadataArgs, UrlParamMetadata>({
  allowOn: ['member'],
  extend,
  register: registerHelpers.array,
  proxy: {
    host: PropMetadata,
    containerKey: 'urlParam'
  }
})
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
}

declare module '@tdm/core/tdm/src/metadata/prop' {
  interface PropMetadataArgs {
    urlParam?: UrlParamMetadataArgs | undefined;
  }
}

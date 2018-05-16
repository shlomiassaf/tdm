import {
  isString,
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
  methods?: HttpActionMethodType | HttpActionMethodType[];
}

@MetaClass<UrlParamMetadataArgs, UrlParamMetadata>({
  allowOn: ['member'],
  extend: 'mergeMapArray',
  register: 'array',
  proxy: {
    host: PropMetadata,
    containerKey: 'urlParam'
  }
})
export class UrlParamMetadata extends BaseMetadata {
  urlTemplateParamName: string;
  methods: MappedMethod[] = [];

  constructor(
    metaArgs: UrlParamMetadataArgs | string | undefined,
    info: DecoratorInfo
  ) {
    super(info);

    const urlParamsMeta: UrlParamMetadataArgs = {};

    if (isString(metaArgs)) {
      Object.assign(urlParamsMeta, { urlTemplateParamName: metaArgs });
    } else {
      if (metaArgs) {
        Object.assign(urlParamsMeta, metaArgs);
      }

      if (!urlParamsMeta.urlTemplateParamName) {
        urlParamsMeta.urlTemplateParamName = info.name as any;
      }
    }

    Object.assign(this, urlParamsMeta);

    if (urlParamsMeta.methods) {
      const methods: HttpActionMethodType[] = Array.isArray(
        urlParamsMeta.methods
      )
        ? urlParamsMeta.methods
        : Array.of(urlParamsMeta.methods);
      this.methods = methods.map(mapMethod);
    } else {
      this.methods = [];
    }
  }
}

declare module '@tdm/core/tdm/lib/metadata/prop' {
  interface PropMetadataArgs {
    urlParam?: UrlParamMetadataArgs | undefined;
  }
}

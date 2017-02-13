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

export class UrlParamMetadata {
  urlTemplateParamName: string;
  methods: MappedMethod[] = [];

  constructor(obj: UrlParamMetadataArgs, public name: PropertyKey) {
    Object.assign(this, obj);
    if (obj.methods) {
      const methods: HttpActionMethodType[] = Array.isArray(obj.methods) ? obj.methods : Array.of(obj.methods);
      this.methods = methods.map(mapMethod);
    } else {
      this.methods = [];
    }

    if (!this.urlTemplateParamName) {
      // TODO: Can't accept symbol to param name in URL...
      this.urlTemplateParamName = <any>name;
    }
  }


  static DEFAULTS: UrlParamMetadataArgs = {};
  static VALIDATE(obj: UrlParamMetadataArgs): void {}
}

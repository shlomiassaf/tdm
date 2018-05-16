import { camelCase, snakeCase } from 'voca';
import { ExtendAction, ExecuteContext, Identity, TDMCollection } from '@tdm/data';
import { ActiveRecord, HttpResource, UrlParam, HttpActionOptions, HttpAction, HttpActionMethodType } from '@tdm/ngx-http-client';

export function toCamelCase(propertyName: string) { return camelCase(propertyName) }
export function toSnakeCase(propertyName: string) { return snakeCase(propertyName) }

// https://restcountries.eu/#api-endpoints-name
/**
 * This resource wraps a single endpoint REST API which means it is not resource oriented.
 * The API uses query parameters to identify the request.
 *
 * Thi example shows how to define the model so it can normalize the endpoint into a resource.
 *
 * To get a single title we need to use the "title" query param which returns 404 if it does not exist or the title object if exists.
 * This indicate that the title is the @Identity key.
 *
 * The other query params (director, actor, year) return an array so they are query calls.
 * The base "query" method does not have a mandatory filter parameter so we will have to use ExtendAction
 * to overload the signature and provide our logic before executing the query.
 *
 */
@HttpResource({
  endpoint: 'https://restcountries.eu/rest/v2/name/:name?',
  transformNameStrategy: {
    incoming: toCamelCase,
    outgoing: toSnakeCase
  },
  skip: true
})
export class Country {

  @Identity()
  @UrlParam()
  name: string;

  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: [number, number];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
  translations: { [index: string]: string };
  flag: string;
  regionalBlocs: Array<{
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
  }>;
  cioc: string;

  @HttpAction({
    method: HttpActionMethodType.Get,
    endpoint: 'https://restcountries.eu/rest/v2/alpha/:alpha',
    pre: function (ctx: ExecuteContext<any>, countryCode: string, options?: HttpActionOptions) {
      if (!options) {
        options = {} as any;
      }
      if (!options.urlParams) {
        options.urlParams = {};
      }
      options.urlParams.alpha = countryCode;

      return options;
    }
  })
  static findCountryCode: (countryCode: string, options?: HttpActionOptions) => ActiveRecord<Country>;

  @ExtendAction({
    pre: (ctx: ExecuteContext<any>, filter: 'name' | 'eee', value: string, options?: HttpActionOptions) => {
      if (!filter || !value) {
        throw new Error('Invalid parameters supplied.');
      }
      ctx.setInstance();
      switch (filter) {
        case 'name':
          ctx.instance.name = value;
          break;
        case 'eee':
          // there is no actor property so we need to manually push the query string.
          if (!options) {
            options = {};
          }
          options.urlParams = Object.assign(options.urlParams || {}, { actor: value });
          break;
      }
      return options;
    }
  })
  static query: (filter: 'name' | 'eee', value: string, options?: HttpActionOptions) => CountryCollection;
}

export type CountryCollection = (TDMCollection<ActiveRecord<Country>> & {
  query: typeof Country.query
  findCountryCode: typeof Country.findCountryCode
});

import { camelCase, snakeCase } from 'voca';
import { ExtendAction, ExecuteContext, Identity, TDMCollection } from '@tdm/data';
import { ARMixin, HttpResource, UrlParam, HttpActionOptions } from '@tdm/ngx-http';

export function toCamelCase(propertyName: string) { return camelCase(propertyName) }
export function toSnakeCase(propertyName: string) { return snakeCase(propertyName) }

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
  endpoint: 'http://netflixroulette.net/api/api.php',
  transformNameStrategy: {
    incoming: toCamelCase,
    outgoing: toSnakeCase
  },
  noBuild: true
})
export class Title {
  unit: number;

  showId: number;

  @Identity() // netflixroulette does not allow search by id (showId) so we'll use showTitle
  @UrlParam('title') // we need api.php?title=[showTitle], since it's not in the endpoint it will fallback as query string.
  showTitle: string;

  @UrlParam('year')
  releaseYear: number;

  rating: number;
  category: string;

  showCast: string;

  @UrlParam()
  director: string;

  summary: string;
  poster: string;
  mediatype: number;
  runtime: string;

  /*
      Extending the "query" action to support out special use case.
      This can be done in many ways but this demonstrates overloading core actions.

      Note that while the query signature now accepts 2 mandatory parameters the old signature
      will also work, this is overloading.
      The overloading is virtual, in the type world, but in the runtime mode only 1 method runs, the new one.
      It is recommended to throw an exception.
   */
  @ExtendAction({
    pre: (ctx: ExecuteContext<any>, filter: 'director' | 'year' | 'actor', value: string, options?: HttpActionOptions) => {
      if (!filter || !value) {
        throw new Error('Invalid parameters supplied.');
      }

      switch (filter) {
        case 'director':
          ctx.instance.director = value;
          break;
        case 'year':
          ctx.instance.releaseYear = value;
          break;
        case 'actor':
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
  static query: (filter: 'director' | 'year' | 'actor', value: string, options?: HttpActionOptions) => TitleCollection;
}

export type TitleCollection = (TDMCollection<ARMixin<Title>> & { query: typeof Title.query });

export interface TopLevel {
  /**
   * @without errors
   */
  data?: ResourceLinkage | ResourceObject | Array<ResourceObject>;

  /**
   * @without data
   */
  errors?: Array<ErrorObject>;
  meta?: MetaObject;

  jsonapi?: JSONAPIObject;
  links?: TopLevelLinksObject;

  /**
   * @with data
   */
  included?: Array<ResourceObject>;
}

export interface MetaObject {
  [name: string]: any;
}

export interface Pagination {
  first?: Link | null;
  last?: Link | null;
  prev?: Link | null;
  next?: Link | null;
}
export interface LinkObject {
  /**
   * link URL.
   */
  href: string;
  /**
   * non-standard meta-information about the link
   */
  meta: MetaObject;
}

export type Link = string | LinkObject;

export interface LinksObject {
  self?: Link;
  related?: Link;
}

export interface TopLevelLinksObject extends LinksObject {
  /**
   * links for the primary data.
   */
  pagination?: Pagination;
}

export interface AttributesObject {
  [name: string]: any;
}

export interface RelationshipObject {
  links?: TopLevelLinksObject;
  data?: ResourceLinkage;
  meta?: MetaObject;
}

export interface RelationshipsObject {
  [name: string]: RelationshipObject;
}

export interface ResourceIdentifierObject {
  id: string;
  type: string;
  meta?: MetaObject;
}

export type ResourceLinkage =
  | null
  | ResourceIdentifierObject
  | Array<ResourceIdentifierObject>;

export interface ResourceObject extends ResourceIdentifierObject {
  attributes?: AttributesObject;
  relationships?: RelationshipsObject;
  links?: LinksObject;
}

export interface JSONAPIObject {
  version?: string;
  meta?: MetaObject;
}

export interface ErrorObject {
  /**
   * a unique identifier for the particular occurrence of the problem.
   */
  id?: string;

  links?: {
    /**
     * leads to further details about this particular occurrence of the problem.
     */
    about: Link;
  };

  /**
   * HTTP status code.
   */
  status?: string;

  /**
   * application-specific error code.
   */
  code?: string;

  /**
   * Short, human-readable summary of the problem.
   * The title does not change across occurrences of the same error, except for purposes of localization.
   */
  title?: string;

  /**
   * A human-readable explanation specific to this occurrence.
   */
  detail?: string;

  /**
   * An object containing references to the source of the error.
   */
  source?: {
    /**
     * JSON Pointer [RFC6901] to the associated entity in the request document
     */
    pointer?: string;

    /**
     * A string indicating which URI query parameter caused the error.
     */
    parameter?: string;

    meta?: MetaObject;

    [name: string]: any;
  };
}

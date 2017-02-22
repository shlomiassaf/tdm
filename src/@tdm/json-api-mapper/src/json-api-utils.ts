import * as J from './json-api';

export type LinkTypes = 'self' | 'related' | 'about';

export function hasLink(type: LinkTypes, linksObject: J.LinksObject | any): boolean {
  if (!linksObject || !type) {
    return false;
  } else {
    return linksObject.hasOwnProperty(type);
  }
}

export function getLink(link: J.Link): string | undefined {
  if (!link) {
    return undefined;
  } else if (typeof link === 'string') {
    return link;
  } else {
    return link.href;
  }
}

export function findIncluded(included: J.ResourceObject[], identifierObject: J.ResourceIdentifierObject): J.ResourceObject | undefined {
  if (Array.isArray(included)) {
    return included.find( i => i.type === identifierObject.type && i.id == identifierObject.id);
  }
}

export function getType(obj: J.TopLevel | J.ResourceIdentifierObject | J.RelationshipObject): string | undefined {
  const data: any = (obj as any).data;

  if (!data) { //ResourceIdentifierObject
    return (obj as any).type;
  } else if (Array.isArray(data)) {
    return data[0] ? data[0].type : undefined;
  } else {
    return data.type;
  }

}

export function getResourceKeys(resource: J.ResourceObject): { att: string[], rel: string[] } {
  return {
    att: resource && resource.attributes ? Object.keys(resource.attributes) : [],
    rel: resource && resource.relationships ? Object.keys(resource.relationships) : []
  }
}

export function getDocumentKeys(doc: J.TopLevel): { att: string[], rel: string[] } {
  return Array.isArray(doc.data) ? getResourceKeys(doc.data[0]) : getResourceKeys(doc.data);
}

export function isIdentObject(obj: any): boolean {
  let count = 0;

  count += obj.hasOwnProperty('id') ? 1 : 0;
  count += obj.hasOwnProperty('type') ? 1 : 0;

  if (count !== 2) return false;

  count += obj.hasOwnProperty('attributes') ? -1 : 0;
  count += obj.hasOwnProperty('relationships') ? -1 : 0;
  count += obj.hasOwnProperty('links') ? -1 : 0;

  return count === 2;
}

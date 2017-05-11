import * as pathToRegexp from 'path-to-regexp';

export interface Params {
  [param: string]: string | string[];
}

export type CompiledPatternFactory = (params: Params) => string;

export interface ParsedPattern {
  regexp: RegExp;
  keys: pathToRegexp.Key[];
}

export interface ParsedPath {
  remainingPathname: string | null,
  paramNames: Array<string | number>,
  paramValues: Array<string>
}

const REGEXP_CACHE = new Map<string, ParsedPattern>();
const COMPILED_CACHE = new Map<string, CompiledPatternFactory>();

export function getRegexp(pattern: string): ParsedPattern {
  if (!REGEXP_CACHE.has(pattern)) {
    const keys: pathToRegexp.Key[] = [];
    const regexp = pathToRegexp(pattern, keys, { end: false });
    REGEXP_CACHE.set(pattern, { keys, regexp });
  }

  return REGEXP_CACHE.get(pattern);
}

export function getCompiled(pattern: string): CompiledPatternFactory {
  if (!COMPILED_CACHE.has(pattern)) {
    COMPILED_CACHE.set(pattern, pathToRegexp.compile(pattern));
  }

  return COMPILED_CACHE.get(pattern);
}

export function matchPattern(pattern: string, pathname: string): ParsedPath {
  if ( pattern.charAt(0) !== '/' ) {
    pattern = `/${pattern}`;
  }

  const compiled = getRegexp(pattern);
  const match = compiled.regexp.exec(pathname);

  if (!match) {
    return {
      remainingPathname: null,
      paramNames: [],
      paramValues: []
    };
  }

  return {
    remainingPathname: pathname.substr(match[0].length),
    paramNames: compiled.keys.map( key => key.name ),
    paramValues: match.slice(1).map(value => value && decodeURIComponent(value))
  };
}

export function getParamNames(pattern: string): Array<string | number> {
  return getRegexp(pattern).keys.map( key => key.name);
}

export function makeParams(paramNames: (string | number)[], paramValues: any[]): Params {
  const params: Params = {};
  let lastIndex = 0;

  if (Array.isArray(paramValues)) {
    paramNames.forEach(function(paramName, index) {
      if (typeof paramName === 'number') {
        paramName = lastIndex++;
      }

      params[paramName] = paramValues[index];
    });
  }

  return params;
}

export function getParams(pattern: string, pathname: string): Params {
  const { remainingPathname, paramNames, paramValues } = matchPattern(pattern, pathname);

  if (remainingPathname === null) {
    return null;
  }

  return makeParams(paramNames, paramValues);
}


export function formatPattern(pattern: string, params: Params = {}): string {
  return getCompiled(pattern)(params);
}

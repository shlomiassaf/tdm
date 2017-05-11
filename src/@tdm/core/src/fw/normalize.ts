import { isString, isFunction } from './utils';
import { PropAliasConfig, PropTransformConfig, TransformFn } from './interfaces'

export function propAliasConfig(from: string | Partial<PropAliasConfig>, fallback: string): PropAliasConfig {
  let incoming: string, outgoing: string;

  if (!from) {
    incoming = outgoing = fallback;
  } else if (isString(from) ) {
    incoming = outgoing = from;
  } else {
    incoming = from.incoming || fallback;
    outgoing = from.outgoing || fallback;
  }

  return { incoming, outgoing };
}

export function propTransformConfig(from: TransformFn | Partial<PropTransformConfig>): PropTransformConfig {
  let incoming: TransformFn, outgoing: TransformFn;

  if (isFunction(from) ) {
    incoming = outgoing = from;
  } else if (from) {
    if (isFunction(from.incoming)) {
      incoming = from.incoming;
    }
    if (isFunction(from.outgoing)) {
      outgoing = from.outgoing;
    }
  }

  return { incoming, outgoing };
}

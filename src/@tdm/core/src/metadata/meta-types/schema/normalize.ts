import { isString, isFunction } from '../../../utils';
import { PropAliasConfig, PropTransformConfig, TransformFn } from './interfaces'


export function propAliasConfig(from: string | Partial<PropAliasConfig>): PropAliasConfig {
  let incoming: string, outgoing: string;

  if (isString(from) ) {
    incoming = outgoing = from;
  } else {
    if (from.hasOwnProperty('incoming')) {
      incoming = from.incoming;
    }
    if (from.hasOwnProperty('outgoing')) {
      outgoing = from.outgoing;
    }

    if (!incoming) {
      incoming = outgoing;
    }
    if (!outgoing) {
      outgoing = incoming;
    }
  }

  return { incoming, outgoing };
}

export function propTransformConfig(from: TransformFn | Partial<PropTransformConfig>): PropTransformConfig {
  let incoming: TransformFn, outgoing: TransformFn;

  if (isFunction(from) ) {
    incoming = outgoing = from;
  } else {
    if (from.hasOwnProperty('incoming')) {
      incoming = from.incoming;
    }
    if (from.hasOwnProperty('outgoing')) {
      outgoing = from.outgoing;
    }

    if (!incoming) {
      incoming = outgoing;
    }
    if (!outgoing) {
      outgoing = incoming;
    }
  }

  return { incoming, outgoing };
}

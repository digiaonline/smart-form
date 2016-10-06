// @flow
import type {Value, ValidationContext} from '../types';

export default function resolveValue(descriptor: Value, currentValue: mixed, context: ValidationContext): mixed {
  if (['string', 'boolean', 'number'].indexOf(typeof descriptor) !== -1 || Array.isArray(descriptor)) {
    return descriptor;
  }

  const {allValues} = context;

  if (typeof descriptor === 'object' && descriptor.type === 'Reference') {
    const { path } = descriptor;
    if (path[0] === '$currentValue' && path.length === 1) {
      return currentValue;
    } else if (path[0] === '$currentForm' && path.length === 2) {
      return allValues[path[1]];
    } else {
      throw new Error('Invalid reference path ' + JSON.stringify(path));
    }
  }
}
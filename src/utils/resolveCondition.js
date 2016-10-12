// @flow
import type {Condition, ValidationContext} from '../types';

export default function resolveCondition(condition: Condition, currentValue: mixed, context: ValidationContext): boolean {
  const {resolveValue} = context;
  if (typeof condition === 'boolean') {
    return condition;
  }

  if (typeof condition === 'object' && condition.type === 'Op') {
    const leftValue: any = resolveValue(condition.leftValue, currentValue, context);
    const rightValue: any = resolveValue(condition.rightValue, currentValue, context);

    return (
        condition.op === '>' ? (parseFloat(leftValue) > parseFloat(rightValue))
      : condition.op === '>=' ? (parseFloat(leftValue) >= parseFloat(rightValue))
      : condition.op === '==' ? (leftValue === rightValue)
      : condition.op === '!=' ? (leftValue !== rightValue)
      : condition.op === '<' ? (parseFloat(leftValue) < parseFloat(rightValue))
      : condition.op === '<=' ? (parseFloat(leftValue) <= parseFloat(rightValue))
      : condition.op === 'ArrayIncludes' ? Array.isArray(leftValue) && leftValue.indexOf(rightValue) !== -1
      // $FlowFixMe
      : (() => {throw new Error("Unkown operator " + condition.op)})()
    );
  } else {
    throw new Error('Invalid condition object ' + condition);
  }
}
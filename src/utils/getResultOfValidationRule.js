// @flow
import type {FieldValidationRule, PropsToValidator, ValidatorFunctionReturnValue} from '../types';

export default function getResultOfValidationRule(rule: FieldValidationRule, props: PropsToValidator): ValidatorFunctionReturnValue {
  const type = typeof rule === 'string' ? rule : rule.type;
  const validator = props.allValidators[type];
  if (validator) {
    return validator(rule, props);
  } else {
    throw new Error(`Unkown validator type '${type}'`);
  }
}
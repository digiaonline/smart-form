// @flow
import type {PropsToValidator, ValidatorFunctionReturnValue, RequiredValidationRule} from '../types';

export default function validateRequired(rule: RequiredValidationRule, {currentValue}: PropsToValidator): ValidatorFunctionReturnValue {
  const hasValue = !(currentValue == null || currentValue == undefined || (typeof currentValue === 'string' && currentValue.trim().length === 0));

  return hasValue ? undefined : rule.message;
}
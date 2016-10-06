// @flow
import type {PropsToValidator, ValidatorFunctionReturnValue, RequiredIfEnabledValidationRule} from '../types';

export default function validateRequiredIfEnabled(rule: RequiredIfEnabledValidationRule, {currentValue, isEnabled}: PropsToValidator): ValidatorFunctionReturnValue {
  const hasValue = !(currentValue == null || currentValue == undefined || (typeof currentValue === 'string' && currentValue.trim().length === 0));

  return isEnabled && !hasValue ? rule.message : undefined;
}
// @flow
import type {PropsToValidator, ValidatorFunctionReturnValue, RequiredIfValidationRule, ValidationContext} from '../types';

export default function validateRequiredIf(rule: RequiredIfValidationRule, props: PropsToValidator & ValidationContext): ValidatorFunctionReturnValue {
  const {currentValue, resolveCondition} = props;
  const hasValue = !(currentValue == null || currentValue == undefined || (typeof currentValue === 'string' && currentValue.trim().length === 0));

  return !hasValue && resolveCondition(rule.condition, currentValue, props) ? rule.message : undefined;
}
// @flow
import type {PropsToValidator, ValidatorFunctionReturnValue, ConditionIsMetValidationRule, ValidationContext} from '../types';

export default function validateRequiredIf(rule: ConditionIsMetValidationRule, props: PropsToValidator & ValidationContext): ValidatorFunctionReturnValue {
  const {currentValue, resolveCondition} = props;

  return resolveCondition(rule.condition, currentValue, props) ? undefined : rule.message;
}
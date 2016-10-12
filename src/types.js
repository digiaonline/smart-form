// @flow
import type { Component, Element } from 'react';

// A For is a list of field names, plus a map from the name of each field, to its template
export type Form = {
  fieldsByName: {[name: string]: Field},
  listOfFieldNames: Array<string>
};

// A field can be any of the following templates
export type Field = {
  type: string,
  name: string,
  title: string,
  defaultValue?: Value,
  meta?: {
    enabledIf?: Condition,
    validation?: FieldValidationMeta,
  }
};

// A text field is simply a GeneralField, with type=Text and a boolean value that determines whether it's multiline or not
export type DefaultFieldTypes =
  TextField | NumberField | PasswordField | RadioField;

export type TextField =
  Field & { type: 'Text', multiline?: boolean };

export type NumberField =
  Field & { type: 'Number' };

export type PasswordField =
  Field & { type: 'Password' };

export type RadioField =
  Field & {
    type: 'Radio',
    options: Array<{
      title: string,
      value: string,
      meta?: {[key: string]: any}
    }>
  };


export type Value =
  // A value can either be a string, number, boolean, array, or...
  string | number | boolean | Array<any> |
  {
    // ... or a reference to the value of another field
    type: 'Reference',
    // path is an array of strings, that determines the address to either a field in the current form, or a field in another form
    path: Array<string> // ['currentValue'] ['$currentForm', theNameOfTheOtherField] | [someOtherForm, theNameOfTheOtherField]
  };

export type Condition = boolean | {
  // A simple comparative op
  type: 'Op',
  // Your ordinary comparison operators
  op: '>' | '>=' | '==' | '!=' | '<=' | '<' | 'ArrayIncludes',
  leftValue: Value,
  rightValue: Value
};

export type FieldValidationRule = string | {type: string};

// Valid if the field has a non-empty value
export type RequiredValidationRule =
  { type: 'Required', message: string };

// Valid if the field is disabled, or otherwise if it has a non-empty value
export type RequiredIfEnabledValidationRule =
  { type: 'RequiredIfEnabled', message: string };

// Valid if the condition returns false, or otherwise if the field has a non-empty value
export type RequiredIfValidationRule =
  { type: 'RequiredIf', condition: Condition, message: string };

export type ConditionIsMetValidationRule =
  { type: 'ConditionIsMet', condition: Condition, message: string };

export type DefaultValidationRules =
  RequiredValidationRule | RequiredIfEnabledValidationRule | RequiredIfValidationRule | ConditionIsMetValidationRule;

// Holds metadata about the validation rules of a single field
export type FieldValidationMeta = {
  validationRules: Array<FieldValidationRule>
};

export type FieldComponentProps = {
  template: Field
};

export type FieldComponent =
  Component<{}, FieldComponentProps, {}>;

export type IteratorComponentProps = {
  formTemplate: Form,
  renderField: (fieldName: string) => Element<any>
};

export type IteratorComponent =
  Component<any, IteratorComponentProps, any>;

export type ValidatorFunctionReturnValue =
  void | string;

export type ValidatorFunction =
  (rule: FieldValidationRule, props: PropsToValidator) => ValidatorFunctionReturnValue;

export type ValidationContext = {
  allValidators: {[type: string]: ValidatorFunction},
  allValues: {[name: string]: mixed},
  resolveCondition: (condition: Condition, currentValue: mixed, context: ValidationContext) => boolean,
  resolveValue: (descriptor: Value, currentValue: mixed, context: ValidationContext) => mixed
};

export type PropsToValidator = ValidationContext & {
  currentValue: mixed,
  isEnabled: boolean
};
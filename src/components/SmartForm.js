// @flow
import React, { Component } from 'react';
import type {
  Form, IteratorComponent, FieldComponent, Condition, Value, FieldValidationMeta, FieldValidationRule, ValidatorFunction, ValidationContext
} from '../types';
import DefaultIteratorComponent from './DefaultIteratorComponent';
import DefaultFieldComponent from './DefaultFieldComponent';
import defaultValidators from '../defaultValidators';
import mapValues from 'lodash/mapValues';
import keyBy from 'lodash/keyBy';
import get from 'lodash/get';
import getResultOfValidationRule from '../utils/getResultOfValidationRule';
// $FlowFixMe
import { connect } from 'react-redux';
// $FlowFixMe
import { reduxForm, Field } from 'redux-form';

import resolveCondition from '../utils/resolveCondition';
import resolveValue from '../utils/resolveValue';

type SmartFormProps = {
  formTemplate: Form,
  formId: string,
  reduxFormProps: Object,
  iteratorComponent: IteratorComponent,
  fieldComponent: FieldComponent,
  wholeFormState: Object,
  validators: {[type: string]: ValidatorFunction}
};

export default connect(
  (state) => ({ wholeFormState: state.form })
)(class SmartForm extends Component {
  props: SmartFormProps;
  state: {
    enabledDisabledMap: {[fieldName: string]: boolean},
    currentValues: {fieldName: string, value: string},
  };
  static defaultProps = {
    reduxFormProps: {},
    iteratorComponent: DefaultIteratorComponent,
    fieldComponent: DefaultFieldComponent,
    validators: defaultValidators
  };

  _enabledDisabledMap: {[fieldName: string]: boolean};

  constructor(props: SmartFormProps) {
    super(props);
    this.state = {
      enabledDisabledMap: {},
      currentValues: {},
    };

    // @todo: This is a hack. Remove it, and use context types instead :)
    this._enabledDisabledMap = {};

    // $FlowFixMe
    this.validateSynchronously = this.validateSynchronously.bind(this);

    // $FlowFixMe
    this.renderField = this.renderField.bind(this);
  }

  componentWillMount() {
    this.recalculateState();
  }

  recalculateState() {
    const values = this.getValuesOfCurrentForm();
    const template = this.props.formTemplate;
    const valueMap = this.state.currentValues || {}

    const listOfEnabledDisabledFlags =
      template.listOfFieldNames
        .map((fieldName) => ({
          fieldName,
          isEnabled: this.calculateIfFieldIsEnabled(fieldName)
        }));

    const newValues = {}
    template.listOfFieldNames
      .forEach((fieldName) => newValues[fieldName] = values[fieldName])

    const changedMap = {}
    Object.keys(newValues).forEach(value => changedMap[value] = newValues[value] !== valueMap[value])

    this.updateValues(changedMap, template.fieldsByName)

    const enabledDisabledMap =
      mapValues(
        keyBy(listOfEnabledDisabledFlags, 'fieldName'),
        'isEnabled'
      );
    this._enabledDisabledMap = enabledDisabledMap;
    this.setState({ enabledDisabledMap, currentValues: newValues });
  }

  updateValues(changedValues: Object, template: Object) {
    Object.keys(template).forEach(fieldName => {
      const entry = template[fieldName]
      const changeCondition = get(entry, ['meta', 'forceChangeValue']);

      if (changeCondition && changedValues[get(changeCondition, ['rightValue', 'path', '1'])]
        && resolveCondition(changeCondition, '', this.getValidationContext())) {
        this.props.wholeFormState[this.props.formId].values[fieldName] = changeCondition.targetValue
      }
    })
  }

  validateSynchronously() {
    this.recalculateState();
    const template = this.props.formTemplate;
    const listOfValidationMessages =
      template.listOfFieldNames
        .map((fieldName) => ({
          fieldName,
          message: this.getValidationMessageForField(fieldName)
        }))
        .filter(({ message }) => typeof message === 'string' && message.length > 0);

    const validationMessages =
      mapValues(
        keyBy(listOfValidationMessages, 'fieldName'),
        'message'
      );

    return validationMessages;
  }

  getValidationMessageForField(fieldName: string): void | string {
    const formTemplate = this.props.formTemplate;
    const fieldTemplate = formTemplate.fieldsByName[fieldName];
    const isEnabled = this.isFieldEnabled(fieldName);
    const values = this.getValuesOfCurrentForm();
    const currentValue = values[fieldName];
    const validationMeta : FieldValidationMeta = get(fieldTemplate, ['meta', 'validation']);
    const context = this.getValidationContext();

    if (typeof validationMeta !== 'object' || !Array.isArray(validationMeta.validationRules)) {
      return;
    }

    const messages =
      validationMeta.validationRules.map(
        (validationRule) => getResultOfValidationRule(validationRule, {...context, currentValue, isEnabled})
      ).filter((possibleMessage) => typeof possibleMessage === 'string');

    if (messages.length > 0) {
      return messages.join(', ');
    } else {
      return;
    }
  }

  isFieldEnabled(fieldName: string): boolean {
    return this._enabledDisabledMap[fieldName] !== false;
  }

  calculateIfFieldIsEnabled(fieldName: string): boolean {
    const values = this.getValuesOfCurrentForm();
    const formTemplate = this.props.formTemplate;
    const fieldTemplate = formTemplate.fieldsByName[fieldName];
    const value = values[fieldName];
    const enabledIfCondition = get(fieldTemplate, ['meta', 'enabledIf']);
    if (enabledIfCondition === undefined) {
      return true;
    } else {
      return resolveCondition(enabledIfCondition, value, this.getValidationContext());
    }
  }

  getValidationContext(): ValidationContext {
    return {
      allValidators: this.props.validators,
      allValues: this.getValuesOfCurrentForm(),
      resolveCondition, resolveValue
    };
  }

  getValueOfField(fieldName: string): mixed {
    return get(this.getValuesOfCurrentForm(), fieldName);
  }

  getValuesOfForm(formName: string): Object {
    return get(this.props.wholeFormState, [formName, 'values']) || {};
  }

  getValuesOfCurrentForm(): Object {
    return this.getValuesOfForm(this.props.formId);
  }

  renderField(fieldName: string) {
    const { fieldComponent, formTemplate } = this.props;
    const fieldTemplate = formTemplate.fieldsByName[fieldName];
    if (!fieldTemplate) {
      throw new Error(`Unkown field '${fieldName}'`);
    }
    const fieldComponentProps = {
      fieldTemplate: fieldTemplate,
      isEnabled: this.isFieldEnabled(fieldName)
    };
    return <Field key={`field-${fieldName}`} component={fieldComponent} name={fieldName} props={fieldComponentProps} />;
  }

  render() {
    const { props } = this;
    const TheIteratorComponent = props.iteratorComponent;

    return (
      <FormComponent key="form" {...props.reduxFormProps} keepDirtyOnReinitialize={true} form={props.formId} validate={this.validateSynchronously}>
        {/* $FlowFixMe */}
        <TheIteratorComponent key="iterator" formTemplate={this.props.formTemplate} renderField={this.renderField} _smartFormState={this.state} />
      </FormComponent>
    );
  }
});

const FormComponent = reduxForm()(({ children }) => children);

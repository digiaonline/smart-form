import React, { Component } from 'react';
import {SmartForm} from '@nordsoftware/smart-form';
import CustomizedField from './CustomizedField';
import CustomizedIterator from './CustomizedIterator';

export default (props) => {
  const reduxFormProps = {
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true,
    touchOnChange: true
  };

  return (
    <div key="container">
      <SmartForm formTemplate={props.formTemplate}
                 key={`form-${props.formId}`}
                 formId={props.formId}
                 iteratorComponent={CustomizedIterator}
                 fieldComponent={CustomizedField}
                 reduxFormProps={reduxFormProps} />
    </div>
  );
}
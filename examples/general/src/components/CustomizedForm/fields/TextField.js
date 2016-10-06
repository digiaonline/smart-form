import React from 'react';
import FieldWrapper from './FieldWrapper';

export default (props) => {
  return (
    <FieldWrapper key="wrapper" {...props}>
      <input className="input" type="text" {...props.input} />
    </FieldWrapper>
  );
};
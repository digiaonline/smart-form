// @flow
import React from 'react';
import TextField from './fields/TextField';

const componentsByType = {
  'Text': TextField
};

// $FlowFixMe
export default (props) => {
  const Component = componentsByType[props.fieldTemplate.type];
  if (!Component) {
    throw new Error(`Unkown component type '${props.fieldTemplate.type}'`);
  }
  return <Component {...props} />;
};
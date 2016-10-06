// @flow
import React, { Component } from 'react';
import type { FieldComponentProps } from '../types';

export default class DefaultFieldComponent extends Component {
  props: FieldComponentProps;

  constructor(props: FieldComponentProps) {
    super(props);
  }

  render() {
    console.warn('Unimplemented');
    return <div>Field here</div>;
  }
}
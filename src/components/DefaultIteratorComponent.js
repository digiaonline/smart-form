import React from 'react';
import type { IteratorComponentProps } from '../types';

export default ({ formTemplate, renderField }: IteratorComponentProps) =>
  (
    <div key="container">
    {formTemplate.listOfFieldNames.map((fieldName) => renderField(fieldName))}
    </div>
  );
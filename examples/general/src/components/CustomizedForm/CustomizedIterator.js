import React from 'react';

export default ({ formTemplate, renderField }) => (
  <div className="fields">
  {formTemplate.listOfFieldNames.map((fieldName) =>
    <div className="field-wrapper" key={fieldName}>{renderField(fieldName)}</div>
  )}
  </div>
);
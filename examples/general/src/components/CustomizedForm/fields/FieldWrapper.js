import React from 'react';

export default ({ fieldTemplate, children, t, meta, isEnabled }) =>
  <div key="container" style={{opacity: isEnabled ? '1' : '0'}}>
    {
      (typeof meta.error === 'string' && meta.error.length > 0) ?
      (
        <div key="error" className="error">
          <div key="errorMessage" className="message">{meta.error}</div>
        </div>
      ) : (<div></div>)
    }
    <label key="label" className="label">
      <span key="labelText" className="inputText">{fieldTemplate.title}</span>
    </label>
    <div key="inputWrapper">
      {children}
    </div>
  </div>;
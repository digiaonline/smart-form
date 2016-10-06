// @flow
import React from 'react';
import CustomizedForm from './CustomizedForm/CustomizedForm';

const formTemplate = {
  fieldsByName: {
    firstName: {
      type: 'Text',
      name: 'firstName',
      meta: {
        validation: {
          validationRules: [
            {
              type: 'Required',
              message: 'This field is required'
            }
          ]
        }
      }
    },
    lastName: {
      type: 'Text',
      name: 'lastName',
      meta: {
        validation: {
          validationRules: [
            {
              type: 'RequiredIfEnabled',
              message: 'This field is required'
            }
          ]
        }
      }
    }
  },
  listOfFieldNames: ['firstName', 'lastName']
};

export default () => {
  return (
    <div className="app">
      <CustomizedForm formId="some-id" key="some-key" formTemplate={formTemplate} />
    </div>
  );
};
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

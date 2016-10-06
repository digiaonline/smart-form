// @flow
import configureStore from './configureStore';
import React, { createElement } from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import { AppContainer } from 'react-hot-loader';

const store = configureStore();

const renderApp = (rootComponent) => render(
  (
    // <AppContainer>
      createElement(rootComponent, { store })
    // </AppContainer>
  ),
  document.getElementById('root')
);

renderApp(Root);

// if (module.hot && typeof module.hot.accept === 'function') {
//   module.hot.accept(
//     './components/Root',
//     () => renderApp(require('./components/Root').default)
//   );
// }
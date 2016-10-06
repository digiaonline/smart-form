// @flow
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default function configureStore() {
  const rootReducer = combineReducers({
    form: formReducer
  });

  const middlewares = [];

  const enhancer = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  );


  const store = createStore(rootReducer, undefined, enhancer);

  return store;
}
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import loggerMiddleware from './middlewares/logger';
import reducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(reducer, preloadedState, middlewareEnhancer);

  return store;
}

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { enableBatching } from 'redux-batched-actions';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger({ collapsed: true, diff: true }));
}

export default function configureStore(preloadedState) {
  return createStore(
    enableBatching(rootReducer),
    preloadedState,
    applyMiddleware(...middlewares)
  );
}

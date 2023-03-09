import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
);
const composedEnhancers = compose(applyMiddleware(...middlewares));


// persist redux store
const persistConfig = {
  key: 'root', 
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer, 
  undefined, 
  composedEnhancers
);

export const persistor = persistStore(store);
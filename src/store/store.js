import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';

import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middlewares));

// persist redux store
const persistConfig = {
  key: 'root', 
  storage,
  blacklist: ['user', 'categories']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer, 
  undefined, 
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk
].filter(
  Boolean
);

const persistConfig = {
  key: 'counter',
  storage,
  blacklist: ['user', 'category']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(middlewares)
});

export const persistor = persistStore(store);
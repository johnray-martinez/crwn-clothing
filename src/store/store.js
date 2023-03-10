import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
);

const persistConfig = {
  key: 'counter',
  storage,
  blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(middlewares)
});

export const persistor = persistStore(store);
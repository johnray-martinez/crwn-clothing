import { configureStore, Middleware } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk
].filter((middleware): middleware is Middleware => Boolean(middleware));

const persistConfig = {
  key: 'counter',
  storage,
  blacklist: ['user', 'category']
};

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(middlewares)
});

export const persistor = persistStore(store);
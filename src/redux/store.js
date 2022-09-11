import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import { transactionsApi } from './transactions/transactionsApi';
import authReducer from './auth/auth-slice';
import transactionsSlice from './transactions/transactions-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  transactionsApi.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
};

const transactionsPersistConfig = {
  key: 'wallet',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    wallet: persistReducer(transactionsPersistConfig, transactionsSlice),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    balance: 0,
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
  },
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.email = payload.email;
    },
    [authOperations.googleApi.fulfilled](state, { payload }) {
      state.balance = payload.balance;
      state.token = payload.token;
      state.email = payload.email;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.balance = payload.user?.balance;
      state.email = payload.user?.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state) {
      state.email = null;
      state.balance = 0;
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.email = null;
      state.balance = 0;
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.balance = payload?.balance;
      state.email = payload?.email;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
      state.token = null;
    },
    [authOperations.updateBalance.fulfilled](state, { payload }) {
      state.balance = payload.data.balance;
    },
  },
});

export default authSlice.reducer;

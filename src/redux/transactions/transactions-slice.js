import { createSlice } from '@reduxjs/toolkit';
import transactionsOperations from './transactions-operations';

export const transactionsSlice = createSlice({
  name: 'wallet',
  initialState: {
    wallet: {
      balance: 0,
      getMonthlyBalances: 5000,
      getTransactionsPerDay: 500,
      getTransactionsPerMonth: 25000,
      //   getLoader,
      //   getTransactionError,
    },
  },
  extraReducers: {
    [transactionsOperations.setBalance.fulfilled](state, { payload }) {
      console.log(payload);
      state.wallet.balance = payload.data.balance;
    },
  },
});

export default transactionsSlice.reducer;

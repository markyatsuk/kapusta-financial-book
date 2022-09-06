import { createSlice } from '@reduxjs/toolkit';
import transactionsOperations from './transactions-operations';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    wallet: {
      getTotalBalance: 5000,
      getMonthlyBalances: 5000,
      getTransactionsPerDay: 500,
      getTransactionsPerMonth: 25000,
      //   getLoader,
      //   getTransactionError,
    },
  },
  extraReducers: {},
});

export default transactionsSlice.reducer;

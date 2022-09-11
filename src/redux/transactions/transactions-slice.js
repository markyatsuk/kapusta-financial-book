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
      state.wallet.balance = payload.data.balance;
    },
    [transactionsOperations.getTransactionsByType.fulfilled](
      state,
      { payload },
    ) {
      console.log(payload);
    },
  },
});

export default transactionsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import transactionsOperations from './transactions-operations';

export const transactionsSlice = createSlice({
  name: 'wallet',
  initialState: {
    wallet: {
      balance: 0,
      getMonthlyBalances: 0,
      getTransactionsPerDay: 0,
      getTransactionsPerMonth: 0,
      getIncomePerMonth: 0,
      getExpencesPerMonth: 0,
      fullReport: [],
      expensesReportPerMonth: [],
      incomeReportPerMonth: [],
      //   getLoader,
      //   getTransactionError,
    },
  },
  extraReducers: {
    [transactionsOperations.setBalance.fulfilled](state, { payload }) {
      state.wallet.balance = payload.data.balance;
    },
    [transactionsOperations.getFullTransactions.fulfilled](state, { payload }) {
      state.wallet.getIncomePerMonth = payload.transactions[1]?.total ?? 0;
      state.wallet.getExpencesPerMonth = payload.transactions[0]?.total ?? 0;
      state.wallet.incomeReportPerMonth = payload.transactions[1]?.reports;
      state.wallet.expensesReportPerMonth = payload.transactions[0]?.reports;
    },
    [transactionsOperations.getFullTransactions.rejected](state, { payload }) {
      state.wallet.getIncomePerMonth = 0;
      state.wallet.getExpencesPerMonth = 0;
      state.wallet.incomeReportPerMonth = [];
      state.wallet.expensesReportPerMonth = [];
    },
  },
});

export default transactionsSlice.reducer;

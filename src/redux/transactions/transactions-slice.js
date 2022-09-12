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
    [transactionsOperations.getTransactionsByType.fulfilled](
      state,
      { payload },
    ) {
      // console.log(payload);
    },
    [transactionsOperations.getFullTransactions.fulfilled](state, { payload }) {
      console.log(payload.transactions);
      state.wallet.getIncomePerMonth = payload.transactions[1].total;
      state.wallet.getExpencesPerMonth = payload.transactions[0].total;
      state.wallet.incomeReportPerMonth = payload.transactions[1].reports;
      state.wallet.expensesReportPerMonth = payload.transactions[0].reports;
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

const getTotalBalance = state => state.wallet.wallet.balance;
const getMonthlyBalances = state => state.wallet.wallet.monthlyBalancesYear;
const getTransactionsPerDay = state => state.wallet.wallet.transactionsDay;
const getTransactionsPerMonth = state =>
  state.wallet.wallet.transactionsMonthYear;
const getIncomePerMonth = state => state.wallet.wallet.getIncomePerMonth;
const getExpencesPerMonth = state => state.wallet.wallet.getExpencesPerMonth;
// const getLoader = state => state.wallet.loader;
// const getTransactionError = state => state.wallet.error;

const transactionsSelectors = {
  getTotalBalance,
  getMonthlyBalances,
  getTransactionsPerDay,
  getTransactionsPerMonth,
  getIncomePerMonth,
  getExpencesPerMonth,
  // getLoader,
  // getTransactionError,
};
export default transactionsSelectors;

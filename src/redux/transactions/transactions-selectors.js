const getTotalBalance = state => state.wallet.wallet.balance;
const getMonthlyBalances = state => state.wallet.wallet.monthlyBalancesYear;
const getTransactionsPerDay = state => state.wallet.wallet.transactionsDay;
const getTransactionsPerMonth = state =>
  state.wallet.wallet.transactionsMonthYear;
// const getLoader = state => state.wallet.loader;
// const getTransactionError = state => state.wallet.error;

const transactionsSelectors = {
  getTotalBalance,
  getMonthlyBalances,
  getTransactionsPerDay,
  getTransactionsPerMonth,
  // getLoader,
  // getTransactionError,
};
export default transactionsSelectors;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './Report.module.css';
import { ReactComponent as Strip } from './strip.svg';
// import transactionsOperations from '../../redux/transactions/transactions-operations';
// import { getTransactionsPerMonth } from '../../redux/transactions/transactions-selectors';
// import transactions-operations from "../../"
import transactionsOperations from '../../redux/transactions/transactions-operations';
import transactionsSelectors from '../../redux/transactions/transactions-selectors';
const CurrentAmount = ({ currentMonth, currentYear }) => {
  const dispatch = useDispatch();
  const fullReport = useSelector(transactionsSelectors.getFullReport);
  console.log(fullReport);
  let expenses;
  let incomes;
  if (fullReport) {
    fullReport.map(el => {
      if (fullReport[0]._id.type === 'expense') {
        expenses = fullReport[0];
        incomes = fullReport[1];
      } else {
        incomes = fullReport[0];
        expenses = fullReport[1];
      }
    });
  }

  let monthToString = String(currentMonth);
  let yearToString = String(currentYear);

  useEffect(() => {
    if ((monthToString, yearToString)) {
      if (currentMonth < 10) {
        dispatch(
          transactionsOperations.getFullTransactions({
            month: `0${monthToString}`,
            year: yearToString,
          }),
        );
      } else {
        dispatch(
          transactionsOperations.getFullTransactions({
            month: monthToString,
            year: yearToString,
          }),
        );
      }
      // dispatch(transactionsOperations.getTransactionsByType({type: "expense"}))
      // dispatch(transactionsOperations.getTransactionsByType({type: "income"}))
    }
  }, [currentMonth, currentYear, dispatch, monthToString, yearToString]);

  // const findTotalSum = type => {
  //   let totalSum = 0;
  //   const filteredType = transactions.filter(
  //     transaction => transaction.type === type,
  //   );
  //   filteredType.map(el => (totalSum += el.sum));
  //   return totalSum;
  // };

  return (
    <div className={`${s.section} ${s.amountSection}`}>
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Expenses:</p>
        <span className={`${s.amountText} ${s.amountExpense}`}>
          {`- ${expenses?.total} UAH.`}
        </span>
      </div>
      <Strip className={s.amountStrip} />
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Income:</p>
        <span className={`${s.amountText} ${s.amountIncome}`}>
          {`+ ${incomes?.total} UAH.`}
        </span>
      </div>
    </div>
  );
};
export default CurrentAmount;

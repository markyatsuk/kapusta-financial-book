import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './Report.module.css';
import { ReactComponent as Strip } from './strip.svg';
import transactionsOperations from '../../redux/transactions/transactions-operations';
import { getTransactionsPerMonth } from '../../redux/transactions/transactions-selectors';

const CurrentAmount = ({ currentMonth, currentYear }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactionsPerMonth);
  let monthToString = String(currentMonth);
  let yearToString = String(currentYear);

  useEffect(() => {
    if ((monthToString, yearToString)) {
      dispatch(
        transactionsOperations.getTransactionsMonthYear(
          monthToString,
          yearToString,
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMonth, currentYear]);

  const findTotalSum = type => {
    let totalSum = 0;
    const filteredType = transactions.filter(
      transaction => transaction.type === type,
    );
    filteredType.map(el => (totalSum += el.sum));
    return totalSum;
  };

  return (
    <div className={`${s.section} ${s.amountSection}`}>
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Expenses:</p>
        <span
          className={`${s.amountText} ${s.amountExpense}`}
        >{`- ${findTotalSum('expense').toLocaleString('en')}.00 UAH.`}</span>
      </div>
      <Strip className={s.amountStrip} />
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Income:</p>
        <span
          className={`${s.amountText} ${s.amountIncome}`}
        >{`+ ${findTotalSum('income').toLocaleString('en')}.00 UAH.`}</span>
      </div>
    </div>
  );
};
export default CurrentAmount;

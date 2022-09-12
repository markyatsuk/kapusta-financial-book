import React from 'react';
import s from './Report.module.css';
import { ReactComponent as Strip } from './strip.svg';

const CurrentAmount = ({ currentMonth, currentYear, expenses, incomes }) => {
  return (
    <div className={`${s.section} ${s.amountSection}`}>
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Expenses:</p>
        <span className={`${s.amountText} ${s.amountExpense}`}>
          {`- ${expenses} UAH.`}
        </span>
      </div>
      <Strip className={s.amountStrip} />
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Income:</p>
        <span className={`${s.amountText} ${s.amountIncome}`}>
          {`+ ${incomes} UAH.`}
        </span>
      </div>
    </div>
  );
};
export default CurrentAmount;

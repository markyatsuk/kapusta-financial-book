import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import s from './Report.module.css';

import Balance from '../Balance';
import { getTransactionsPerMonth } from '../../redux/transactions/transactions-selectors';
import { CurrentAmount, CurrentMonth } from './';
import categories from '../../data/categories';
import sprite from './icon.svg';
import ArrowToGoBack from '../ArrowToGoBack';
import transactionsOperations from '../../redux/transactions/transactions-operations';

const Report = ({
  month,
  year,
  onHandleClickRight,
  onHandleClickLeft,
  getCategory,
}) => {
  const [type, setType] = useState('expense');
  const transaction = useSelector(getTransactionsPerMonth);
  const dispatch = useDispatch();
  useEffect(() => {
    if ((month, year)) {
      dispatch(transactionsOperations.getTransactionsMonthYear(month, year));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  const getTransactionByType = type => {
    const filteredByType = transaction.filter(
      transaction => transaction.type === type,
    );
    return filteredByType;
  };

  const findeTotalSumByCategiry = (type, category) => {
    let totalExpense = 0;
    getTransactionByType(type)
      .filter(tr => tr.category === category)
      .map(el => {
        return (totalExpense += el.sum);
      });
    return totalExpense;
  };

  const onClick = () => {
    if (type === 'expense') {
      setType('income');
    }
    if (type === 'income') {
      setType('expense');
    }
  };
  return (
    <div className={s.reportContainer}>
      <div className={`${s.navigation} ${s.section}`}>
        <ArrowToGoBack />
        <div className={s.navigationWrapper}>
          <Balance hide={s.buttonNone} width={s.buttonWidth} />
          <CurrentMonth
            currentMonth={month}
            currentYear={year}
            onHandleClickRight={onHandleClickRight}
            onHandleClickLeft={onHandleClickLeft}
          />
        </div>
      </div>
      <CurrentAmount currentMonth={month} currentYear={year} />
      <div className={`${s.reportWrapper} ${s.section}`}>
        <div className={`${s.transactionWrapper} ${s.sectionReportTitle}`}>
          <ArrowBackIosIcon
            style={{ color: '#FF751D' }}
            fontSize="small"
            onClick={onClick}
          />
          {type === 'expense' ? (
            <h1 className={s.reportTitle}>expenses:</h1>
          ) : (
            <h1 className={s.reportTitle}>income:</h1>
          )}
          <ArrowForwardIosIcon
            style={{ color: '#FF751D' }}
            fontSize="small"
            onClick={onClick}
          />
        </div>
        <ul className={s.reportList}>
          {getTransactionByType(type).length === 0 ? (
            <p>
              The report will be available after you enter data on your income
              and expenses for the selected period.
            </p>
          ) : (
            categories.map(event => {
              let sum = findeTotalSumByCategiry(type, event.label);
              if (sum === 0) {
                return '';
              }

              return (
                <li className={s.reportCard} key={event.id}>
                  <p>{`${sum.toLocaleString('en')}.00`}</p>
                  <svg
                    className={s.iconSvg}
                    title={event.label}
                    onClick={getCategory}
                  >
                    <use
                      xlinkHref={`${sprite}#${event.label}`}
                      title={event.label}
                    />
                  </svg>
                  <p className={s.reportCardTitle}>{event.label}</p>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};
export default Report;

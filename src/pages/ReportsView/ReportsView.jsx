import React, { useState, useEffect } from 'react';
import ChartReport from '../../components/ChartReport/ChartReport';
import { Report } from '../../components/Report';
import { useSelector, useDispatch } from 'react-redux';
import s from './ReportView.module.css';
import Container from '../../components/Container';
import transactionsSelectors from '../../redux/transactions/transactions-selectors';
import transactionsOperations from '../../redux/transactions/transactions-operations';
const ReportsView = () => {
  let date = new Date();
  let selectedMonth = date.getMonth() + 1;
  let selectedYear = date.getFullYear();
  const [month, setMonth] = useState(selectedMonth);
  const [year, setYear] = useState(selectedYear);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('expense');
  const [hasChanged, setHasChanged] = useState(false);
  let monthToString = String(month);
  let yearToString = String(year);

  const dispatch = useDispatch();

  const expensesReport = useSelector(
    transactionsSelectors.getExpencesReportPerMonth,
  );
  const incomeReport = useSelector(
    transactionsSelectors.getIncomeReportPerMonth,
  );
  const expenses = useSelector(transactionsSelectors.getExpencesPerMonth);
  const incomes = useSelector(transactionsSelectors.getIncomePerMonth);

  useEffect(() => {
    if (monthToString < 10) {
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
  }, [dispatch, monthToString, yearToString]);

  const onHandleClickRight = () => {
    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
  };
  const onHandleClickLeft = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };

  return (
    <Container>
      <div className={s.containerReport}>
        <Report
          month={month}
          year={year}
          onHandleClickRight={onHandleClickRight}
          onHandleClickLeft={onHandleClickLeft}
          setCategory={setCategory}
          expenses={expenses}
          incomes={incomes}
          expensesReport={expensesReport}
          incomeReport={incomeReport}
          setTitle={setTitle}
          setHasChanged={setHasChanged}
          category={category}
        />
        <ChartReport
          month={month}
          year={year}
          category={category}
          expensesReport={expensesReport}
          incomeReport={incomeReport}
          title={title}
          hasChanged={hasChanged}
        />
      </div>
    </Container>
  );
};

export default ReportsView;
